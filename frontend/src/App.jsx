import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Products from "./pages/AddProducts";
import Login from "./pages/auth/Login"
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import AddProducts from "./pages/AddProducts";

function App() {
  
  return (
    <Router>
   
    
      <Navbar/>
      
      <Routes>
      <Route path='/dashboard' element ={<Dashboard/>} />
        <Route path='/AddProducts' element ={<Products />} />
        <Route path='/loging' element = {<Login />} />
        
      </Routes> 
      
     
     
    </Router>
  );
}

export default App;
