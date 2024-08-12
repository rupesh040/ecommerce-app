import React, { useContext, useState } from 'react'
import Link from 'next/link'
import StoreContextProvider, { StoreContext } from '../context/StoreContext';



const Product = ({img,name,weight,price,id}) => {
    const {cartItems,addCart,removeCart} = useContext(StoreContext)
  return (
    <div className='min-w-[179px] max-w-[179px] h-[272px] bg-white border-[1px] border-zinc-300 rounded-xl flex flex-col overflow-hidden  p-3 hover:border-blue-300 hover:shadow-lg' >
        <Link className="h-[50%] w-[100%] flex justify-center items-center overflow-hidden" href={`/product/${id}`}>
        <img src={img} alt="" className='w-[130px]' /></Link>
        <div className="h-[50%] flex flex-col justify-between pt-2">
            <div className=" flex flex-col gap-1">
                <span className='text-[10px] '><i class="ri-timer-2-line text-[10px] text-green-600"></i> 10 MINs</span>
            <h4 className='font-semibold text-[13px]'>{name}</h4> <span className='text-zinc-400 text-[12px]'>{weight}</span>
            </div>
        </div>

         <div className=" flex flex-row justify-between items-center">
           <h4 className='font-semibold text-[14px]'>₹{price}</h4>

           {
            !cartItems[id]?<button className='font-semibold text-[13px] bg-blue-100 text-blue-700 py-[5px] px-[18px] rounded-lg border-[1px] border-blue-500 w-[66px] h-[31]' onClick={ () => addCart(id)}>ADD</button>:
            <div className='flex flex-row bg-blue-200 items-center rounded-lg gap-1 px-1 py-[4px]  w-[66px] h-[31]'>
            <i class="ri-subtract-line cursor-pointer px-1  text-[14px]  rounded-md" onClick={ () => removeCart(id)}></i>
            <p className='text-[15px]'>{cartItems[id]}</p>
            <i class="ri-add-line cursor-pointer px-1 text-[14px]  rounded-md" onClick={ () => addCart(id)}></i>
            </div>
           }

        </div>
    </div>
  )
}

export default Product
