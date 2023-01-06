import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { newCostumer } from '../../../../rudex/slices/CostumerSlice';

const Createcostumers = () => {
    const [costumerAddress, setcostumerAddress] = useState('');
    const [costumerPhone, setcostumerPhone] = useState('');
    const [costumerEmail, setcostumerEmail] = useState('');
    const [costumerId, setcostumerId] = useState('');
    const [Name, setName] = useState('');
    const {newCostumerLoading,newCostumerSuccess } = useSelector(
        (state) => state.Costumer
      );

      const dispatch = useDispatch();
      const navigate = useNavigate();

      useEffect(() => {
        if (newCostumerSuccess) {
          navigate('/');
          dispatch(reset());
        }
      }, [newCostumerSuccess]);

      const handleSubmit = (e) => {
        e.preventDefault();
     const data = {
      costumerAddress,
      costumerPhone,
      costumerEmail,
      Name,
      costumerId
      
        };
    
        dispatch(newCostumer(data));
      };
  return (
<>
<div className='header  w-[80%] mx-auto sm:w-[100%]'>
      

      <form onSubmit={handleSubmit} className='  lg:w-[60%]  mx-auto p-7 sm:w-[100%] '>
       <div className=' bg-slate-300 w-[50%] mx-auto p-9 sm:w-[90%] rounded-[10px]
       '>
       <div className='text-[24px] ml-7' >
        <h1>Create new post</h1>
      </div>
      <div className='flex gap-[5rem] ml-7'>
      <div className>
          <div >
            <label htmlFor='Name'>Name</label>
          </div>
          <div>
            <input
              value={Name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              className='px-2 py-2 rounded-[5px] w-[100%] '
              placeholder=''
              id='Name'
              required
            />
          </div>
        </div>

        <div className>
          <div >
            <label htmlFor='title'>Phone</label>
          </div>
          <div>
            <input
              value={costumerPhone}
              onChange={(e) => setcostumerPhone(e.target.value)}
              type='text'
              className='px-2 py-2 rounded-[5px]'
              placeholder='063'
              id='title'
              required
            />
          </div>
        </div>
      </div>

       <div className='ml-7'>
          <div >
            <label htmlFor='Email'>Email</label>
          </div>
          <div>
            <input
              value={costumerEmail}
              onChange={(e) => setcostumerEmail(e.target.value)}
              type='text'
              className='px-2 py-2 rounded-[5px] w-[70%] '
              placeholder='email'
              id='Email'
              required
            />
          </div>
        </div>

        <div className='ml-7'>
          <div>
            <label htmlFor='body'>Post Body</label>
          </div>
          <div>
            <textarea
              value={costumerAddress}
              onChange={(e) => setcostumerAddress(e.target.value)}
              className='px-2 py-2 rounded-[5px]'
              placeholder='Post Body'
              cols='44'
              rows='10'
              id='body'
              required
            ></textarea>
          </div>
        </div>

       
        <div>
          <button className='bg-slate-600 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded mt-3 ml-7'>
          {newCostumerLoading ? (loading) : 'create'}
          </button>
        </div>
       </div>

        
      </form>
    </div>
</>
        

   
  )
}

export default Createcostumers
