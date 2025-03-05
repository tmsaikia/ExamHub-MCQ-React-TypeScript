import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import heroImg1 from "../assets/exam_hero.svg";
import heroImg2 from "../assets/student_study.svg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Box sx={{
      pt: 15,
      pb: 10,
      background: `linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%)`,
      position: "relative",
      overflow: "hidden",
    }}>
      <Container maxWidth="xl">
        <Grid container alignItems="center" spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h1" gutterBottom>
                Master Exams with<br />
                <Box component="span" color="primary.main">AI-Powered</Box> Learning
              </Typography>
              <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
                Smart exam preparation platform with real-time analytics
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{ px: 5, borderRadius: "50px" }}
                onClick={() => navigate("/login")}
              >
                Start Learning
              </Button>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={heroImg1} 
                alt="Hero" 
                style={{ 
                  width: "100%", 
                  maxWidth: 600,
                  height: "auto",
                  objectFit: "cover" 
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}