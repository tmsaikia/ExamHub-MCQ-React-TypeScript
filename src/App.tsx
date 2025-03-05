import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import theme from './theme';
import LoadingScreen from './components/LoadingScreen';


const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Exam = lazy(() => import('./pages/exam'));
const ThankYou = lazy(() => import('./pages/ThankYou'));

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<LoadingScreen />}>
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;