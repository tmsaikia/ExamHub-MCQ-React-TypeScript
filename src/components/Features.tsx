import { Box, Container, Grid, Typography, Card, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import expertQuestions from "../assets/student_study.svg";
import aiAnalytics from "../assets/analytics.svg";
import instantResults from "../assets/online_test.svg";

const features = [
  {
    title: "Expert-Curated Questions",
    description: "Access thousands of questions designed by industry experts",
    icon: expertQuestions
  },
  {
    title: "AI-Powered Analytics",
    description: "Get personalized insights and performance predictions",
    icon: aiAnalytics
  },
  {
    title: "Instant Results",
    description: "Real-time scoring and detailed feedback analysis",
    icon: instantResults
  }
];

const Features = () => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      py: { xs: 6, md: 10 },
      background: theme.palette.background.paper
    }}>
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700
            }}
          >
            Why Choose ExamHub?
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              textAlign: "center",
              mb: 6,
              maxWidth: 800,
              mx: "auto",
              fontSize: { xs: '1rem', md: '1.25rem' }
            }}
          >
            Revolutionize your exam preparation with cutting-edge technology
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card sx={{
                  p: { xs: 2, md: 3 },
                  height: '100%',
                  borderRadius: 4,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }
                }}>
                  <Box sx={{
                    width: 120,
                    height: 120,
                    mx: 'auto',
                    mb: 3
                  }}>
                    <img 
                      src={feature.icon} 
                      alt={feature.title} 
                      style={{ 
                        width: '100%', 
                        height: '100%',
                        objectFit: 'contain'
                      }} 
                    />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 1.5,
                      textAlign: 'center',
                      fontSize: { xs: '1.25rem', md: '1.5rem' }
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{
                      textAlign: 'center',
                      fontSize: { xs: '0.875rem', md: '1rem' }
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;