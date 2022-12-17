import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import reportWebVitals from './'
import {GoogleOAuthProvider} from '@react-oauth/google'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider >  <App /></GoogleOAuthProvider>;
   
  </React.StrictMode>
)
