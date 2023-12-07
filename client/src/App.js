import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "./pages";
import AdminHome from './adminPages/AdminHome.jsx'
import AdminLogin from "./adminPages/AdminLogin";
import AdminSignup from './adminPages/AdminSignUp.jsx'
import AdminForgotPassword from './adminPages/AdminForgotPassword.jsx'
import AdminResetPassword from './adminPages/AdminResetPassword.jsx'

import TutorHome from './tutorPages/TutorHome.jsx'
import TutorLogin from "./tutorPages/TutorLogin.jsx";
import TutorSignup from "./tutorPages/TutorSignup.jsx";
import TutorForgotPassword from "./tutorPages/TutorForgotPassword.jsx";
import TutorResetPassword from "./tutorPages/TutorResetPassword.jsx";


import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />

        {/* admin section */}
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
        <Route path="/admin/reset-password/:id/:token" element={<AdminResetPassword />} />


      {/* tutor section */}
      <Route path="/tutor" element={<TutorHome />} />
        <Route path="/tutor/login" element={<TutorLogin />} />
        <Route path="/tutor/signup" element={<TutorSignup />} />
        <Route path="/tutor/forgot-password" element={<TutorForgotPassword />} />
        <Route path="/tutor/reset-password/:id/:token" element={<TutorResetPassword />} />


      </Routes>
    </div>
  );
}

export default App
