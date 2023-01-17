import React from "react"
// import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom"
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { useSelector } from 'react-redux';
// import { login } from '../../../rudex/slices/auth';


const Search = ({ CartItem }) => {
  // fixed Header
  // window.addEventListener("scroll", function () {
  //   const search = document.querySelector(".search")
  //   search.classList.toggle("active", window.scrollY > 100)
  // })

  const {user} = useSelector((state) => state.auth);

  return (
    <>
      <section className='search   '>
        <div className='container c_flex grid grid-cols-3 '>
     

        <div className='search-box f_flex  rounded-[40px] border-2 w-[100%] px-6 py-2 ml-[60%]'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...'      className=' px-4 py-2  rounded-[5px] w-[70%]  outline-none border' />
            <span>All Category</span>
          </div>

          <div className='icon f_flex bg-slate-600 w-[13%] h-[52px] rounded-full  ml-[40rem] '>
              <Link to='/cart'>
                <div className="  ml-4 mt-4  ">
                <FiShoppingCart/>
                </div>
                <span> 0 </span>
                {/* <span>{CartItem.length === 0 ? "" : CartItem.length}</span> */}
              </Link>
          </div>

          {/* <div className='icon f_flex bg-slate-600 w-[13%] h-[52px] rounded-full  ml-[20rem] '>
                <div className="  ml-4 mt-4  ">
                <FiShoppingCart/>
                </div>
                <span> 0 </span>
          </div> */}

          {/* <div className="bg-slate-200 w-[13%] h-[52px] rounded-full"> {login?. user?.FirstName[0].toUpperCase()} </div> */}
        </div>
      </section>
    </>
  )
}

export default Search