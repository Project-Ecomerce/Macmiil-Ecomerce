import React from 'react'
import { useSelector } from 'react-redux';
import Post from './Post';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import {getAllProducts } from '../../../rudex/slices/product/productSlice'

const Posts = () => {
    const dispatch = useDispatch();
    const { products} = useSelector((state) => state.product)
    const product = products.products
    console.log(product)
    useEffect(() =>{

        // invocation ()
    dispatch(getAllProducts())
      },[])
  return (
    <div>
        <h3>News feed</h3>
        {product?.length
        ? product.map((post, idx) => <Post key={post._id} post={post} />)
        : 'No posts are available'}


        
    </div>

    
   
  )
}

export default Posts