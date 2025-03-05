import { Container, Typography, Box, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Confetti from 'react-confetti';
import CelebrationIcon from '@mui/icons-material/Celebration';

const ThankYou = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `linear-gradient(135deg, ${theme.palette.primary.light}20 0%, ${theme.palette.secondary.light}20 100%)`,
      px: { xs: 2, md: 4 }
    }}>
      <Confetti 
        width={window.innerWidth} 
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={200}
      />
      
      <Container maxWidth="sm">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <Box sx={{ 
            textAlign: 'center',
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            background: theme.palette.background.paper,
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <motion.div
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <CelebrationIcon sx={{ 
                fontSize: { xs: 60, md: 80 }, 
                color: theme.palette.primary.main,
                mb: 3
              }} />
            </motion.div>

            <Typography
              variant="h3"
              fontWeight="800"
              gutterBottom
              sx={{ 
                color: theme.palette.primary.main,
                mb: 2,
                fontSize: { xs: '1.8rem', md: '2.4rem' }
              }}
            >
              Congratulations! 🎉
            </Typography>

            <Typography
              variant="h6"
              sx={{ 
                color: theme.palette.text.secondary,
                mb: 4,
                fontSize: { xs: '1rem', md: '1.25rem' }
              }}
            >
              Your exam has been successfully submitted. We'll notify you once results are ready.
            </Typography>

            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/")}
              sx={{
                px: { xs: 4, md: 6 },
                py: { xs: 1.5, md: 2 },
                borderRadius: 2,
                fontSize: { xs: '0.875rem', md: '1.1rem' },
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }
              }}
            >
              Return Home
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ThankYou;