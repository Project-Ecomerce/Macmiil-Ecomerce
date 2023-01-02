import React from 'react'
import Sidebar from '../../components/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div  className='flex items-start gap-3 mt-[20px] w-full '>
       <div>
       <Sidebar/>
       </div>
      <div>
      <Outlet  />
      </div>
       
    </div>
  )
}

export default Dashboard;