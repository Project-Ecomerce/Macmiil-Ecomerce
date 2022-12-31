import React from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineLibraryAdd} from "react-icons/md"
import {FaHome} from "react-icons/fa"
import {HiUsers} from "react-icons/hi"
import {FiMenu} from "react-icons/fi"


import {MdOutlineProductionQuantityLimits} from "react-icons/md"
function Sidebar() {
  return (
    <section className=' flex gap-6border'>
        <div className="Sidebar flex  min-h-screen w-78 p-5">
          <div className="top_section">
            <div className="bars flex  gap-24 items-center  ">
            <h1 className="logo text-green-600 ">Macmiil Online  </h1>
           <FiMenu />
            </div>
            <menu className='mt-12'>
             <Link to={'/dashboard'}> <div className="div flex items-center gap-5  p-3 cursor-pointer hover:bg-green-600 hover:text-white rounded hover:shadow-md ">
               <FaHome className=''/>
                <h1>Dashboard</h1>
               </div></Link>

               <div className="div flex items-center gap-5  p-3 cursor-pointer hover:bg-green-600 hover:text-white rounded hover:shadow-md">
               <MdOutlineProductionQuantityLimits/>
                <h1>Products</h1>
               </div>

               <div className="div flex items-center gap-5  p-3 cursor-pointer hover:bg-green-600 hover:text-white rounded hover:shadow-md ">
               <MdOutlineLibraryAdd/>
                <h1>Add Products</h1>
               </div>


               <div className="div flex items-center gap-5  p-3 cursor-pointer hover:bg-green-600 hover:text-white rounded hover:shadow-md ">
               <HiUsers/>
                <h1>Users</h1>
               </div>
              
               <div className="div flex items-center gap-5  p-3 cursor-pointer hover:bg-green-600 hover:text-white rounded hover:shadow-md ">
               <HiUsers/>
                <h1>Sub Catogary</h1>
               </div>

               <div className="div flex items-center gap-5  p-3 cursor-pointer hover:bg-green-600 hover:text-white rounded hover:shadow-md ">
               <HiUsers/>
                <h1>Sub Catogary</h1>
               </div>

          
            
               <Link to={'/AddProducts'}>
               <div className="div flex items-center gap-5  p-3 cursor-pointer hover:bg-green-600 hover:text-white rounded hover:shadow-md ">
               <MdOutlineLibraryAdd/>
                <h1>Add Products</h1>
               </div>
               </Link>
            

               <div className="div flex items-center gap-5  p-3 cursor-pointer hover:bg-green-600 hover:text-white rounded hover:shadow-md ">
               <FaHome/>
                <h1>Dashboard</h1>
               </div>

               <div className="div flex items-center gap-5 mt-20   cursor-pointer hover:bg-green-600 hover:text-white rounded hover:shadow-md ">
               
                <h1>Log Out</h1>
               </div>



            </menu>
            </div>  
           
        </div>
      
        </section>

  )
}

export default Sidebar