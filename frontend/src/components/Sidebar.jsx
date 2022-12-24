import React from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineLibraryAdd} from "react-icons/md"
import {FaHome} from "react-icons/fa"
import {HiUsers} from "react-icons/hi"
import {MdOutlineProductionQuantityLimits} from "react-icons/md"
function Sidebar() {
  return (
    <section className=' flex gap-6border'>
        <div className="Sidebar flex  min-h-screen w-78 p-5">
          <div className="top_section">
            <div className="bars flex  gap-24 items-center  ">
            <h1 className="logo text-green-600 ">Macmiil Online  </h1>
           <img className='w-5' src="icons8_menu_500px_2.png" alt="" />
            </div>
            <menu className='mt-12'>
             <Link to={"/Dashboard"}> <div className="div flex items-center gap-5 p-3 hover:bg-green-400 ">
               <FaHome className='text-green-800'/>
                <h1>Dashboard</h1>
               </div></Link>

               <div className="div flex items-center gap-5  p-3 cursor-pointer hover:bg-green-400 rounded-full ">
               <MdOutlineProductionQuantityLimits/>
                <h1>Products</h1>
               </div>

               <div className="div flex items-center gap-5 p-3 hover:bg-green-400 rounded-full  ">
               <MdOutlineLibraryAdd/>
                <h1>Add Products</h1>
               </div>


               <div className="div flex items-center gap-5 p-3 hover:bg-green-400 cursor-pointer  transition-all rounded-full  ">
               <HiUsers/>
                <h1>Users</h1>
               </div>
              
               <div className="div flex items-center gap-5 p-3 hover:bg-green-400 transition-all cursor-pointer rounded-full  ">
               <HiUsers/>
                <h1>Sub Catogary</h1>
               </div>

               <div className="div flex items-center gap-5 p-3 hover:bg-green-400 transition-all cursor-pointer rounded-full  ">
               <HiUsers/>
                <h1>Sub Catogary</h1>
               </div>

               <div className="div flex items-center gap-5 p-3 hover:bg-green-400 transition-all cursor-pointer  rounded-full ">
               <MdOutlineLibraryAdd/>
                <h1>Add Products</h1>
               </div>

               <div className="div flex items-center gap-5 p-3 hover:bg-green-400 transition-all cursor-pointer  rounded-full ">
               <MdOutlineLibraryAdd/>
                <h1>Add Products</h1>
               </div>

               <div className="div flex items-center gap-5 p-3 hover:bg-green-400 transition-all cursor-pointer shadow-sm ">
               <FaHome/>
                <h1>Dashboard</h1>
               </div>

            </menu>
            </div>  
           
        </div>
        <div className=" w-full h-16 text-xl text-gray-900 font-semibold bg-[#8CFFCA] p-5 border">
       <div className=''>
        <h1>Sidebar hello</h1>
       </div>
      </div>
        </section>

  )
}

export default Sidebar