import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Products from "./pages/Dashboard/Products";
import Login from "./pages/auth/Login"
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Dashboard/Users";
import Catogary from "./pages/Dashboard/Catogary";
import SubCatogary from "./pages/Dashboard/SubCatogary";
import AddProducts from "./pages/Dashboard/AddProducts";
// import Sidebar from "./components/Sidebar";

function App() {
  
  return (
    <Router>
      <Navbar/>
     
      
      <Routes>
      <Route path="/home" element ={<Home />} />
      <Route path="/products" element ={<Products />} />
       <Route path="/loging" element = {<Login />} />
       <Route path="/Dashboard" element = {<Dashboard />}>
       <Route path="Users" element = {<Users />} />
       <Route path="Catogary" element = {<Catogary />} />
       <Route path="Products" element = {<Products />} />
       <Route path="Products" element = {<Products />} />
       <Route path="SubCatogary" element = {<SubCatogary />} />
       <Route path="AddProducts" element = {<AddProducts />} />


       </Route>
      </Routes>
      
    </Router>
  );
}

export default App;
