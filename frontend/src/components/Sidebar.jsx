import React from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineLibraryAdd} from "react-icons/md"
import {FaHome} from "react-icons/fa"
import {HiUsers} from "react-icons/hi"
import {MdOutlineProductionQuantityLimits} from "react-icons/md"
function Sidebar() {
  return (
    <div className='Container '>
        <div className="Sidebar flex bg-green-300 min-h-screen w-72 p-5">
          <div className="top_section">
            <div className="bars flex  gap-28 items-center ">
            <h1 className="logo text-green-600 ">Macmiil Online</h1>
           <img className='w-5' src="icons8_menu_500px_2.png" alt="" />
            </div>
            <menu className='mt-12'>
             <Link to ='/Dashboard'> <div className="div flex items-center gap-5 p-3 hover:bg-green-400 ">
               <FaHome className='text-green-800'/>
                <h1>Dashboard</h1>
               </div></Link>

              <Link to='/Dashboard/Products'>
              <div className="div flex items-center gap-5  p-3 cursor-pointer hover:bg-green-400 ">
               <MdOutlineProductionQuantityLimits/>
                <h1>Products</h1>
               </div>
              </Link>

              <Link to='/Dashboard/AddProducts'>
              <div className="div flex items-center gap-5 p-3 hover:bg-green-400  ">
               <MdOutlineLibraryAdd/>
                <h1>Add Products</h1>
               </div>
              </Link>


               <Link to='/Dashboard/Users'>
               <div className="div flex items-center gap-5 p-3 hover:bg-green-400  transition-all  ">
               <HiUsers/>
                <h1>Users</h1>
               </div>
               </Link>
              
               <Link to='/Dashboard/Catogary'>
               <div className="div flex items-center gap-5 p-3 hover:bg-green-400 transition-all  ">
               <HiUsers/>
                <h1> Catogary</h1>
               </div>
               </Link>

             <Link to='/Dashboard/SubCatogary'>
             <div className="div flex items-center gap-5 p-3 hover:bg-green-400 transition-all   ">
               <HiUsers/>
                <h1>Sub Catogary</h1>
               </div>
             </Link>

               {/* <div className="div flex items-center gap-5 p-3 hover:bg-green-400 transition-all   ">
               <MdOutlineLibraryAdd/>
                <h1>Add Products</h1>
               </div> */}

               {/* <div className="div flex items-center gap-5 p-3 hover:bg-green-400 transition-all  ">
               <MdOutlineLibraryAdd/>
                <h1>Add Products</h1>
               </div>
               <div className="div flex items-center gap-5 p-3 hover:bg-green-400 transition-all  ">
               <FaHome/>
                <h1>Dashboard</h1>
               </div> */}

            </menu>
            </div>  
        </div>
 
 </div>
  )
}

export default Sidebar