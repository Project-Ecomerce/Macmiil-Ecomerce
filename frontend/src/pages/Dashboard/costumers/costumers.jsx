import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {getAllcostumer} from '../../../../rudex/slices/CostumerSlice'
// import Spinner from '../../components/';

const Costumers = () => {

  const dispatch = useDispatch();
  const { Costumer,isLoading,isError,isSuccess} = useSelector((state) => state.Costumer)
  console.log(Costumer, "FOUND DATA!!!!!!!!!!")

  useEffect(() =>{

    // invocation ()
dispatch(getAllcostumer())
  },[])


  return (
    
    
    <div className='w-[100%]   sm:w-[100%]'>
    console header 
   <div className='head w-full flex items-center justify-around'>
     <h1 className='text-xl font-bold'>costumer</h1>
    <Link to="/CreateProducts">
    <button className='text-xl bg-slate-600 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded mb-4 mr-[8rem] '>
       Create
     </button>
    </Link>
     </div>
     {isLoading? isLoading:(
       <>
         
      
        
   <div className='overflow-y-auto h-[25rem]'>
   <div class=" sm: w-[77%] relative  overflow-x-auto shadow-md  sm:rounded-lg  lg:w-[100%]">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:w-[100%] ">
      
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    phone
                </th>
                <th scope="col" class="px-6 py-3">
                    email
                </th>
                <th scope="col" class="px-6 py-3">
                Address
                </th>
                <th scope="col" class="px-6 py-3">
                    view
                </th>
                <th scope="col" class="px-6 py-3">
                    edite
                </th>
            </tr>
        </thead>
        {Costumer?.custumers?.map((custumers) =>(
           <tbody>
           <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
              
               <th scope="row" class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white ">
                 
                   <div class="pl-3">
                       <div class="text-base font-semibold">{custumers. Name}</div>
                       
                   </div>  
               </th>
               <td class="px-6 py-4">
               {custumers.costumerPhone}
               </td>
               <td class="px-6 py-4">
                   <div class="flex items-center">
                       <div class=""></div> {custumers.costumerEmail}
                   </div>
               </td>

               <td class="px-6 py-4">
                   <div class="flex items-center">
                       <div class=""></div> {custumers.costumerAddress}
                   </div>
               </td>

              <Link to='/GetOneCostumer'>
              <td class="px-6 py-4">
                   <button className='px-3 py-2 bg-green-500 text-white'>
                   view
                 </button>
               </td>
              </Link>

               <td class="px-6 py-4">
                   <button className='px-3 py-2 bg-green-500 text-white'>
                   Edite
                </button>
               </td>

               
              
           </tr>
           <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               
              
           </tr>
       </tbody>
        ))}
    </table>
    
   
</div>
   </div>

       </>
     )}
     
     </div>


    
  )
}

export default Costumers