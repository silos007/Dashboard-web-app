import React from 'react'
import { RiSettingsLine } from "react-icons/ri";
import { AiFillDashboard } from "react-icons/ai";
import { FaCube} from "react-icons/fa6";


const LeftPanel = () => {
  return (
    <>
    <div className='left_panel_container w-1/5 h-full bg-blue-950 text-white'>
      <h1 className='flex justify-center items-center text-2xl font-semibold mt-10'><RiSettingsLine size={30} className='mr-3'/>Dashboard</h1>
      <div>
        <ul className='flex flex-col justify-around items-start px-10 mt-10 text-xl font-normal'>
            <li className='flex items-center py-3'><AiFillDashboard className='mr-2'/>Dashboard</li>
            <li className='flex items-center py-3'><FaCube className='mr-2'/>Product</li>
            <li className='flex items-center py-3'><AiFillDashboard className='mr-2'/>Customers</li>
            <li className='flex items-center py-3'><AiFillDashboard className='mr-2'/>Income</li>
            <li className='flex items-center py-3'><AiFillDashboard className='mr-2'/>Promote</li>
            <li className='flex items-center py-3'><AiFillDashboard className='mr-2'/>Help</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default LeftPanel
