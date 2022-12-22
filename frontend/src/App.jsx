import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/auth/Login"
import Sidebar from "./components/Sidebar";

function App() {
  
  return (
    <Router>
      <Sidebar>
      <Navbar/>
      <Routes>
      <Route path="/home" element ={<Home />} />
        <Route path="/products" element ={<Products />} />
        <Route path="/loging" element = {<Login />} />
      </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
