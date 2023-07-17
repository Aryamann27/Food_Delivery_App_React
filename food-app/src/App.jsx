import React from "react";
import NAVbar from "./components/Navbar";
import Home from "./Pages/Home";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Login";
import Footer from "./components/Footer";
import SignupPage from "./Pages/Signup";
import Delivery from "./Pages/Delivery";
import Dining from "./Pages/Dining";
import Cart_Page from "./Pages/Cart_Page";
import Reservation_Page from "./Pages/Reservation_Page";
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
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/dining' element={<Dining />} />
        <Route path='/cart' element={<Cart_Page />} />
        <Route path="/reservations" element={<Reservation_Page/>}/>

      </Routes>
      <Footer />
      </div>
    </Router>
    
  );
}

export default App;
