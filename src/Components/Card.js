import React from 'react';
import { CiTimer } from "react-icons/ci";

const Card = () => {
  return (
    
    <>
    <div className='Card_container w-[280px] mx-2 h-[200px] rounded-xl shadow-xl bg-white'>
        <div className='top-section'>
          <div>
            <h1 className='w-24 h-24 bg-green-100 rounded-full'><CiTimer size={50} className='text-green-900 relative left-5 top-5' /></h1>
          </div>
          <div className='justify-start'>
            <p>Earning</p>
            <h1 className='text-black font-semibold'>$198K</h1>
            <p><span className='text-green-400'>37.8%</span> this month</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default Card
