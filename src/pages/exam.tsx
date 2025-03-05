import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { resetExam, saveAnswer } from "../store/examSlice";
import { motion } from "framer-motion";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  LinearProgress,
  useTheme
} from "@mui/material";
import mockQuestions from "../data/mockQuestions";

const Exam = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userAnswers = useAppSelector((state) => state.exam.answers);

  const [questions] = useState(mockQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1800);
  const [showFinishDialog, setShowFinishDialog] = useState(false);
  const [localAnswer, setLocalAnswer] = useState("");
  const isFirstRender = useRef(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setLocalAnswer(userAnswers[questions[currentQuestionIndex].id] || "");
  }, [currentQuestionIndex, userAnswers, questions]);

  const handleAnswerChange = (value: string) => {
    setLocalAnswer(value);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      const fileName = event.target.files[0].name;
      setLocalAnswer((prev) => (prev ? `${prev}, ${fileName}` : fileName));
    }
  };

  const saveCurrentAnswer = () => {
    if (localAnswer.trim()) {
      dispatch(saveAnswer({
        questionId: questions[currentQuestionIndex].id.toString(),
        answer: localAnswer
      }));
    }
  };

  const handleNextQuestion = () => {
    saveCurrentAnswer();
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleFinishExam = () => {
    saveCurrentAnswer();
    dispatch(resetExam());
    setShowFinishDialog(true);
  };

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Container maxWidth="md" sx={{ 
      py: { xs: 2, md: 4 },
      px: { xs: 1.5, md: 3 } 
    }}>
      {/* Header Section */}
      <Box sx={{ 
        p: { xs: 2, md: 3 },
        mb: 3,
        borderRadius: 3,
        background: theme.palette.background.paper,
        boxShadow: '0 5px 20px rgba(0,0,0,0.05)'
      }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 2 
        }}>
          <Typography variant="h5" sx={{ 
            fontWeight: 600,
            fontSize: { xs: '1rem', md: '1.25rem' }
          }}>
            Question {currentQuestionIndex + 1} of {questions.length}
          </Typography>
          <Box sx={{ 
            background: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
            px: 2,
            py: 1,
            borderRadius: 2
          }}>
            <Typography variant="h6" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
              {formatTime()}
            </Typography>
          </Box>
        </Box>
        
        <LinearProgress 
          variant="determinate" 
          value={(currentQuestionIndex + 1) / questions.length * 100}
          sx={{ 
            height: 8,
            borderRadius: 4,
            '& .MuiLinearProgress-bar': {
              borderRadius: 4,
              background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`
            }
          }}
        />
      </Box>

      {/* Question Content */}
      <motion.div
        key={currentQuestionIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Box sx={{ 
          p: { xs: 2, md: 3 },
          mb: 3,
          borderRadius: 3,
          background: theme.palette.background.paper,
          boxShadow: '0 5px 20px rgba(0,0,0,0.05)'
        }}>
          <Typography variant="h6" sx={{ 
            fontWeight: 500,
            fontSize: { xs: '1rem', md: '1.25rem' },
            mb: 3
          }}>
            {currentQuestion?.question}
          </Typography>

          {currentQuestion?.type === "mcq" ? (
            <FormControl component="fieldset" fullWidth>
              <RadioGroup
                value={userAnswers[currentQuestion.id] || ""}
                onChange={(e) => dispatch(saveAnswer({
                  questionId: currentQuestion.id.toString(),
                  answer: e.target.value
                }))}
              >
                {currentQuestion.options?.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={option}
                    control={<Radio sx={{ 
                      color: theme.palette.primary.main,
                      '&.Mui-checked': { color: theme.palette.primary.main }
                    }} />}
                    label={
                      <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
                        {option}
                      </Typography>
                    }
                    sx={{
                      mb: 1,
                      p: 1.5,
                      borderRadius: 2,
                      transition: 'all 0.2s',
                      '&:hover': {
                        background: theme.palette.action.hover
                      }
                    }}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          ) : (
            <>
              <TextField
                fullWidth
                multiline
                rows={6}
                variant="outlined"
                placeholder="Type your detailed answer here..."
                value={localAnswer}
                onChange={(e) => handleAnswerChange(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }
                }}
              />

              <Box sx={{ 
                display: 'flex', 
                gap: 2, 
                mt: 3,
                flexDirection: { xs: 'column', md: 'row' },
                '& .MuiButton-root': {
                  width: { xs: '100%', md: 'auto' },
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }
              }}>
                <Button
                  variant="outlined"
                  onClick={saveCurrentAnswer}
                  startIcon={<span>💾</span>}
                >
                  Save Draft
                </Button>
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<span>📎</span>}
                >
                  Attach File
                  <input type="file" hidden onChange={handleFileUpload} />
                </Button>
              </Box>
            </>
          )}
        </Box>
      </motion.div>

      {/* Navigation Controls */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        gap: 2,
        flexDirection: { xs: 'column-reverse', md: 'row' },
        '& .MuiButton-root': {
          px: { xs: 2, md: 4 },
          py: { xs: 1.5, md: 2 },
          fontSize: { xs: '0.875rem', md: '1rem' },
          minHeight: 48
        }
      }}>
        <Button
          variant="contained"
          color="error"
          onClick={handleFinishExam}
        >
          Finish Exam
        </Button>
        
        <Button
          variant="contained"
          onClick={handleNextQuestion}
          disabled={currentQuestionIndex === questions.length - 1}
          sx={{
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            '&:disabled': {
              background: theme.palette.action.disabledBackground
            }
          }}
        >
          Next Question →
        </Button>
      </Box>

      {/* Confirmation Dialog */}
      <Dialog open={showFinishDialog} onClose={() => setShowFinishDialog(false)}>
        <DialogTitle sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
          Finish Exam?
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
            Are you sure you want to submit your exam?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => setShowFinishDialog(false)}
            sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}
          >
            Cancel
          </Button>
          <Button 
            onClick={() => navigate("/thank-you")} 
            color="error"
            sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Exam;