import React from 'react'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import Home from './pages/Home/Home'

import Dashboard from './pages/Dashboard/Dashboard'
import Users from './pages/Dashboard/Users'
import Catogary from './pages/Dashboard/Catogary'
import SubCatogary from './pages/Dashboard/SubCatogary'
import AddProducts from './pages/Dashboard/AddProducts'
import Sidebar from './pages/Dashboard/Sidebar'
import Login from './pages/Login/Login'

function App() {
  
  return (
    <div>
     <Router>
     <Header/>
     <Routes>
      <Route path= '/' element={<Home/>} />
      <Route path= '/Login' element={<Login/>} />
      <Route path="/Dashboard" element = {<Dashboard />}>
       <Route path="Users" element = {<Users />} />
       <Route path="Catogary" element = {<Catogary />} />
       <Route path="Products" element = {<AddProducts />} />
       <Route path="Products" element = {<Sidebar />} />
       <Route path="SubCatogary" element = {<SubCatogary />} /> 
       </Route>
     </Routes>
      <Footer/>

     </Router>
    
  
    </div>
  )
}

export default App