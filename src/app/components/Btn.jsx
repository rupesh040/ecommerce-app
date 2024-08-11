"use client"
import React, { useState } from 'react'

const Btn = () => {
    const [itemCount,setItemCount] = useState(0);
  return (
    !itemCount?<button className='font-semibold text-[13px] bg-blue-100 text-blue-700 py-[5px] px-[18px] rounded-lg border-[1px] border-blue-500 w-[66px] h-[31]' onClick={ () => setItemCount(prev => prev+1)}>ADD</button>:
           <div className='flex flex-row bg-blue-200 items-center rounded-lg gap-1 px-1 py-[4px]  w-[66px] h-[31]'>
           <i class="ri-subtract-line cursor-pointer px-1  text-[14px]  rounded-md" onClick={ () => setItemCount(prev => prev-1)}></i>
           <p className='text-[15px]'>{itemCount}</p>
           <i class="ri-add-line cursor-pointer px-1 text-[14px]  rounded-md" onClick={ () => setItemCount(prev => prev+1)}></i>
           </div>
  )
}

export default Btn
