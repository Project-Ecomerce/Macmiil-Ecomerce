import React from 'react'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

function App() {
  
  return (
    <div>
     <Router>
     <Header/>
     <Routes>
      <Route path= '/' element={<Home/>} />
      <Route path= '/Login' element={<Login/>} />
     </Routes>
      <Footer/>

     </Router>
    
  
    </div>
  )
}

export default App