import React from "react";
import NAVbar from "./components/Navbar";
import Home from "./Pages/Home";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div>
      <NAVbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
