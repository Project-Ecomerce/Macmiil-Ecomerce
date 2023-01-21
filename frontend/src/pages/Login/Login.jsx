// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../../rudex/slices/auth';
import { useNavigate } from 'react-router-dom';
import './Login.css'
function Login() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  

  const redirect = useNavigate();
  const {user} = useSelector((state) => state.auth);

   useEffect(() => {
    if (user?.token) {
     redirect ('/');
    }
  }, [user]);

  const { isLoading, isError, errorMessage } = useSelector(
    (state) => state.auth
  );

  

 

  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();

    if (!Email || !Password) {
      alert('NEED EMAIL AND PASSWORD');
      return;
    }

    const data = {
      Email,
      Password
    };

    dispatch(login(data));
  };
  return (
    <div className="midguud">
      <div className="imge">
        <img src="saki.svg" alt="" srcset="" />
      </div>
      <form className="login" onSubmit={loginHandler}>
        <div className="woow">
          <h1 className="title">Log In</h1>
          <p>{isError ? errorMessage : ""}</p>
          <div className="xxx">
            <input
              type="text"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="pos">
            <input
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              required
            />
          </div>
          <div className="but">
            <button>Login</button>
          </div>
          <a href="#">Forgot your password?</a>
          <p className="text">Don't have an account?</p>
          <Link to="/Register">
            <button className="buttonShadow">Create new account</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login