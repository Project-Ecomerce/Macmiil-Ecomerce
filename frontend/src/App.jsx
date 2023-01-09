import React from 'react'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import Home from './pages/Home/Home'

import Dashboard from './pages/Dashboard/Dashboard'
// import Users from './pages/Dashboard/Users'
// import Catogary from './pages/Dashboard/Catogary'
// import SubCatogary from './pages/Dashboard/SubCatogary'
// import AddProducts from './pages/Dashboard/AddProducts'
// import Sidebar from './pages/Dashboard/Sidebar'
import Login from './pages/Login/Login'
import Register from './pages/Login/Register'
import Products from './pages/Dashboard/products/Products'
import Createproduct from './pages/Dashboard/products/Createproduct'
import GetOneproduct from './pages/Dashboard/products/GetOneproduct'
import Updateproduct from './pages/Dashboard/products/updateproduct'

function App() {
  
  return (
    <div>
     <Router>
     <Header/>
     <Routes>
      <Route path= '/' element={<Home/>} />
      <Route path= '/Login' element={<Login/>} />
      <Route path= '/Register' element={<Register/>} />
      <Route path='/Dashboard' element={<Dashboard />}>
            <Route path='Products' element={<Products />}></Route>
            {/* <Route path='patients' element={<PatientsDash />} /> */}
            <Route path='patients/new' element={<Createproduct />} />
            <Route path='patients/get/:ProductId' element={<GetOneproduct />} />
            <Route path='patients/Edit/:ProductId' element={<Updateproduct />} />
          </Route>
       
     </Routes>
      <Footer/>

     </Router>
    
  
    </div>
  )
}

export default App