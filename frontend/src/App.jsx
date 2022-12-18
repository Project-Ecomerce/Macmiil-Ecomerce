
import './App.css'
import Navbar from './pages/Navbar'
import User from './pages/User'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <User/>

    <Router>
        <Routes>
          {/* <Route path='/' element={<Home />} />
          <Route path='/register' element={<SignUp />} /> */}
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>

    
  )
}

export default App
