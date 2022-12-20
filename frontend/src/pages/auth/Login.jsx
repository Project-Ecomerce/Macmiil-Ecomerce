import React from 'react'
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slices/authSlice';


const Login = () => {

    const [ Email,setEmail] = useState('')
    const [ Password,setPassword] = useState('')
  return (
    <div>Login
        <div className='container w-[60%] mx-auto'>
        <form >
          <h1 className='text-center'>Welcome, Please Login</h1>
          <p className='my-3 text-red-500'></p>
          <div className='inputGroup'>
            <label htmlFor='email'>Email</label>
            <div>
              <input
                // type='text'
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                className='border py-2 px-3 w-full'
                placeholder='Enter your email address'
              />
            </div>
          </div>
          <div className='inputGroup'>
            <label htmlFor='email'>Password</label>
            <div>
              <input
                // value={pass}
                // onChange={(e) => setPassword(e.target.value)}
                type='password'
                className='border py-2 px-3 w-full'
                placeholder='Enter your password'
              />
            </div>
          </div>

          <div className='inputGroup'>
            <button className='p-4 my-5 bg-blue-600 text-white rounded-sm'>
            {isLoading ? 'Loading' : 'Login'}
            </button>
          </div>

          <div>
            <p>
              need new account ? <Link to='/register'>please register</Link>{' '}
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login