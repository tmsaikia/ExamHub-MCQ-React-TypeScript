import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Exam from "./pages/exam"; // Ensure file exists
import ThankYou from "./pages/ThankYou"; // Ensure file exists

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/exam" element={<Exam />} /> 
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
};

export default AppRoutes;
