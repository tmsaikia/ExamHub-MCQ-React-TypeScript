import { useState } from "react";
import { Container, TextField, Button, Typography, Box, Grid, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import loginIllustration from "../assets/online_test.svg";

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    let valid = true;
    let newErrors = { email: "", password: "" };

    if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleStartExam = () => {
    if (validateForm()) {
      navigate("/exam");
    }
  };

  return (
    <Container maxWidth="lg" sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      px: { xs: 2, sm: 4 },
      py: { xs: 4, sm: 0 }
    }}>
      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <img 
                src={loginIllustration} 
                alt="Login" 
                style={{ 
                  width: '100%', 
                  maxWidth: { xs: 300, md: 500 },
                  height: 'auto',
                  filter: `drop-shadow(0 10px 20px ${theme.palette.primary.light}30)`
                }} 
              />
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box sx={{
              p: { xs: 3, md: 4 },
              borderRadius: { xs: 2, md: 4 },
              background: theme.palette.background.paper,
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
            }}>
              <Typography
                variant="h4"
                fontWeight="800"
                gutterBottom
                sx={{ 
                  color: theme.palette.primary.main,
                  mb: 4,
                  textAlign: 'center',
                  fontSize: { xs: '1.8rem', md: '2.125rem' }
                }}
              >
                Welcome Back!
              </Typography>

              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={Boolean(errors.email)}
                helperText={errors.email}
                InputProps={{
                  sx: { 
                    borderRadius: 2,
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }
                }}
                InputLabelProps={{
                  sx: { fontSize: { xs: '0.875rem', md: '1rem' } }
                }}
              />

              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={Boolean(errors.password)}
                helperText={errors.password}
                InputProps={{
                  sx: { 
                    borderRadius: 2,
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }
                }}
                InputLabelProps={{
                  sx: { fontSize: { xs: '0.875rem', md: '1rem' } }
                }}
              />

              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  mt: 3,
                  py: { xs: 1.5, md: 2 },
                  borderRadius: 2,
                  fontWeight: 600,
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                  }
                }}
                onClick={handleStartExam}
              >
                Start Exam
              </Button>

              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ 
                  mt: 3,
                  textAlign: 'center',
                  fontSize: { xs: '0.75rem', md: '0.875rem' },
                  a: {
                    color: theme.palette.primary.main,
                    fontWeight: 500,
                    textDecoration: 'none'
                  }
                }}
              >
                By continuing, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;