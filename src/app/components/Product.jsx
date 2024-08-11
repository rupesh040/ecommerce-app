import React, { useState } from 'react'
import Btn from './Btn'
const Product = ({img,name,weight,price}) => {
  return (
    <div className='min-w-[179px] max-w-[179px] h-[272px] bg-white border-[1px] border-zinc-300 rounded-xl flex flex-col overflow-hidden  p-3 hover:border-blue-300 hover:shadow-lg' >
        <div className="h-[50%] w-[100%] flex justify-center items-center overflow-hidden">
        <img src={img} alt="" className='w-[130px]' /></div>
        <div className="h-[50%] flex flex-col justify-between pt-2">
            <div className=" flex flex-col gap-1">
                <span className='text-[10px] '><i class="ri-timer-2-line text-[10px] text-green-600"></i> 10 MINs</span>
            <h4 className='font-semibold text-[13px]'>{name}</h4> <span className='text-zinc-400 text-[12px]'>{weight}</span>
            </div>
        </div>

         <div className=" flex flex-row justify-between items-center">
           <h4 className='font-semibold text-[14px]'>₹{price}</h4>
           <Btn/>

        </div>
    </div>
  )
}

export default Product
