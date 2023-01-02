import React from 'react'
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {getAllProducts} from '../../../rudex/slices/product/productSlice'
// import Spinner from '../../components/';

const Products = () => {

  const dispatch = useDispatch();
  const { products,isLoading,isError,isSuccess} = useSelector((state) => state.products)
  console.log(products, "FOUND DATA!!!!!!!!!!")

  useEffect(() =>{

    // invocation ()
dispatch(getAllProducts())
  },[])
  return (
    <>
       <div className='w-full'>
     {/* console header  */}
    <div className='head w-full flex items-center justify-around'>
      <h1 className='text-xl font-bold'>Patients management console</h1>
      <button className='text-xl font-bold py-2 px-3 bg-blue-700 text-white'>
        New Patient
      </button>
      </div>
      {isLoading? isLoading:(
        <>
           <table className='my-3 w-[90%] mx-auto '>
            <tr>
              <td className='border p-3 '>costumerId</td>
              <td className='border p-3 '>Costumername</td>
              <td className='border p-3 '>costumerPhone</td>
              <td className='border p-3 '> costumerEmail</td>
              <td className='border p-3 '> costumerAddress
              </td>
              <td className='border p-3 '>Update</td>
              <td className='border p-3 '>Delete</td>
            </tr>

            {products?.map((products) =>( 
              // { you should use return }
              // ( you skip the return )
              
              <tr>
                    <td className='border p-3 '>{Costumers.costumerId}</td>
                <td className='border p-3 '>{Costumers.Name}</td>
                <td className='border p-3 '>{Costumers.costumerPhone}</td>
                <td className='border p-3 '>{Costumers.costumerEmail}</td>
                <td className='border p-3 '>{Costumers.costumerAddress}</td>
                <td className='border p-3 '>
                  <button className='px-3 py-2 bg-green-500 text-white'>
                    UPDATE
                  </button>
                </td>
                <td className='border p-3 '>
                  <button className='px-3 py-2 bg-red-500 text-white'>
                    DELETE
                  </button>
                </td>
              </tr>
          ))}
            </table>
        </>
      )}
      
      </div>

    </>
  )
}

export default Products