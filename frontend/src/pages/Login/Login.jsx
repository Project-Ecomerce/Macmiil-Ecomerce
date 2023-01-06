import React from 'react'
import './Login.css'
function Login() {
  return (
    <div class="login">
    <div>
        <p class="title">Log In</p>
        <input placeholder="Email" required />
        <input placeholder="Password" type="password" required />
        <button class="loader">Sign in</button>
        <a href="#">Forgot your password?</a>
        <p class="text">Don't have an account?</p>
        <button class="buttonShadow">Create new account</button>
    </div>
</div>
  )
}

export default Login