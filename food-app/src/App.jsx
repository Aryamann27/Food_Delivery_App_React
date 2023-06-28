import React from "react";
import NAVbar from "./components/Navbar";
import Home from "./Pages/Home";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Login";
import Footer from "./components/Footer";
import SignupPage from "./Pages/Signup";
function App() {
  return (
    <Router>
      <div>
      <NAVbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
