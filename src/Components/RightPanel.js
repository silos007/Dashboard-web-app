import React from 'react';
import Card from './Card.js';

const RightPanel = () => {
  return (
    <>
    
    <div className='right_panel_container w-full h-full'>
    <div className='bg-gray-100 w-full h-full flex justify-evenly items-center relative -top-28 left-0'>
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
    <div className='sec_row_section flex justify-evenly items-center relative left-0 -top-60'>
            <div className='w-2/3 h-[600px] bg-white rounded-xl shadow-xl'>
                <div className='flex flex-col justify-start items-start px-7 py-10'>
                <p className='text-2xl text-blaxk'>Overview</p>
                <p className='text-gray-300'> Monthaly Earning</p>
                </div> 
            </div>
            <div className='w-1/4 h-[600px] bg-white rounded-xl shadow-xl'>
                <div className='flex flex-col justify-start items-start px-7 py-10'>
                <p className='text-2xl text-black'>Customers</p>
                <small className='text-gray-200 '>Customers that buy Product</small>
                </div>
                
            </div>
    </div>
    <div className='product_sell w-[93%] m-10 rounded-xl h-[600px] bg-white shadow-2xl relative -top-56 left-0'>
           <h1 className='text-3xl text-black relative left-[-450px] top-14 font-semibold'>Product Sell</h1>
           <div>

           </div>
    </div>
    </div>
    
    
    </>
  )
}

export default RightPanel
