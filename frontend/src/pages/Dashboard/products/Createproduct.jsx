import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { newProduct,reset } from '../../../../rudex/slices/product/productSlice';

const Createproduct = () => {
    const [title, settitle] = useState('');
    const [Price, setPrice] = useState('');
    const [Store, setStore] = useState('');
    const [subId, setsubId] = useState('');
    const [image, setimage] = useState('');
    const {newProductLoading,newProductSuccess } = useSelector(
        (state) => state.product
      );

      const dispatch = useDispatch();
      const navigate = useNavigate();

      useEffect(() => {
        if (newProductSuccess) {
          navigate(`/Dashboard/products`);
          dispatch(reset());
        }
      }, [newProductSuccess]);

      

      const handleSubmit = (e) => {
        e.preventDefault();
     const data = {
      title,Price,Store,subId,image
      
        };
    
        dispatch(newProduct(data));
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
            <label htmlFor='Name'>title</label>
          </div>
          <div>
            <input
              value={title}
              onChange={(e) => settitle(e.target.value)}
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
            <label htmlFor='title'>Price</label>
          </div>
          <div>
            <input
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
              type='text'
              className='px-2 py-2 rounded-[5px]'
              placeholder='063'
              id='Price'
              required
            />
          </div>
        </div>
      </div>

       <div className='ml-7'>
          <div >
            <label htmlFor='Store'>Store</label>
          </div>
          <div>
            <input
              value={Store}
              onChange={(e) => setStore(e.target.value)}
              type='text'
              className='px-2 py-2 rounded-[5px] w-[70%] '
              placeholder='Store'
              id='Store'
              required
            />
          </div>
        </div>

        <div className='ml-7'>
          <div>
            <label htmlFor='body'>subId</label>
          </div>
          <div>
          <input
              value={subId}
              onChange={(e) => setsubId(e.target.value)}
              type='text'
              className='px-2 py-2 rounded-[5px]'
              placeholder='063'
              id='Price'
              required
            />
          </div>
        </div>

       
        <div>
          <button className='bg-slate-600 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded mt-3 ml-7'>
          {newProductLoading ? (loading) : 'create'}
          </button>
        </div>
       </div>

        
      </form>
    </div>
</>
        

   
  )
}

export default Createproduct
