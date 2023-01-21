import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { registration } from '../../../rudex/slices/auth';
import { useEffect } from 'react';
import "./Register.css"

const Register = () => {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    
    
  
    const redirect = useNavigate();
    const {user} = useSelector((state) => state.auth);
  
     useEffect(() => {
      if (user?.token) {
       redirect ('/Login');
      }
    }, [user]);
  
    const { isLoading, isError, errorMessage } = useSelector(
      (state) => state.auth
    );
  
    
  console.log(user)
   
  
    const dispatch = useDispatch();
  
    const loginHandler = async (e) => {
      e.preventDefault();
  
      if (!Email || !Password || !FirstName
        ) {
        alert('NEED EMAIL AND PASSWORD');
        return;
      }
  
      const data = {
        Email,
        Password,
        FirstName,
        LastName

      };
  
      dispatch(registration(data));
    };
    
  return (
    <div className='midweyn'>
      <div className='sawirka'>
        <img src="ali.svg" alt="" srcset="" />
      </div>
    <section className="">
  
   
      
          <div className="halfcontianer">
              <h1 className="">
                  Create account
              </h1>
              <form className="" action="#" onSubmit={loginHandler}>
              <p className=''>{isError ? errorMessage : ''}</p>

              <div className='first'>
                      <label for="email" className="">FirstName</label>
                      <input type='text'
                value={FirstName}
                onChange={(e) => setFirstName(e.target.value)}
                      
                      name="email" id="email" className="" placeholder="firstname" required=""/>
                  </div>

                  <div className='last'>
                      <label for="email" className="">LastName</label>
                      <input type='text'
                value={LastName}
                onChange={(e) => setLastName(e.target.value)}
                      
                      name="email" id="email" className="" placeholder="lastname" required=""/>
                  </div>

                  <div className='Emial'>
                      <label for="email" className="">Your email</label>
                      <input type='text'
                value={Email}
                onChange={(e) => setEmail(e.target.value)} name="email" id="email" className="" placeholder="@gmail.com" required=""/>
                  </div>
                  <div className='pass'>
                      <label for="password" className="">Password</label>
                      <input type="password" value={Password}
                onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="......." className="input" required=""/>
                  </div>
                  <button className='save'>
               save
            </button>
                  <div className="">
                      <div className="">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="" required=""/>
                      </div>
                      <div className="">
                        <label for="terms" class="">I accept the <a class="" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" className="">Create an account</button>
                  <p className="">
                      Already have an account? <a href="#" class="">Login here</a>
                  </p>
              </form>
          </div>
      
  
</section>
    </div>
  )
}

export default Register