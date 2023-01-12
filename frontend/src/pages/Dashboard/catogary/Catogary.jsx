import React from 'react'
import { Link } from 'react-router-dom'

const Catogary = () => {
  return (
    <div className='w-[90%]   sm:w-[100%]'>

    <div className='head w-full flex items-center justify-between'>
      <h1 className='text-xl font-bold'>costumer</h1>
     <Link to="/Dashboard/User/new">
     <button className=' bg-green-600 hover:bg-slate-400 text-white font-bold py-1 px-4 mt-5 mb-4 mr-[4rem] '>
        Create
      </button>
     </Link>
      </div>
      {/* {isLoading? isLoading:( */}
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
         {/* {users?.  users?.map(( users
 ) =>( */}
            <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
               
                <th scope="row" class="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white ">
                <td class="px-6 py-4">
                {/* { users.userId} */}
                useid
                </td>
                    <div class="pl-3">
                        <div class="text-base font-semibold">FirstName</div>
                        {/* { users. FirstName} */}
                    </div>  
                </th>
                
                <td class="px-6 py-4">
                    price
                {/* { users.Price} */}
                </td>
 
                {/* <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class=""></div> { users.costumerAddress}
                    </div>
                </td> */}
 
               
               <td class="px-6 py-4">
               <Link to={`/Dashboard/patients/get/`}>
               <button className='px-3 py-2 bg-green-500 text-white'>
                    view
                  </button>
                     </Link>
                </td>
               
 
                <td class="px-6 py-4">
                    <button className='px-3 py-2 bg-green-900 text-white'>
                    delete
                 </button>
                </td>
 
                <td class="px-6 py-4">
               <Link to={`/Dashboard/User/Edit/`}>
               <button className='px-3 py-2 bg-green-500 text-white'>
               update
                  </button>
                     </Link>
                </td>
 
                <td class="px-6 py-4">
               <Link to={`/Dashboard/User/role/`}>
               <button className='px-3 py-2 bg-green-500 text-white'>
               role
                  </button>
                     </Link>
                </td>
 
                
               
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                
               
            </tr>
        </tbody>
         {/* ))} */}
     </table>
     
    
 </div>
    </div>
 
        </>
      {/* )} */}
      
      </div>
  )
}

export default Catogary