"use client"
import 'remixicon/fonts/remixicon.css';
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { StoreContext } from '../context/StoreContext';


const page = () => {
      const {product_data,cartItems,addCart,removeCart} = useContext(StoreContext);
      let totalPrice = 0;
  return (
    <>
    <div className="w-full h-full bg-[#F5F7FD]">
    <div className=" h-[100vh] m-auto max-w-[1080px]   z-20 p-5 max-[600px]:w-full flex flex-col justify-between">
        <div className=" flex justify-between ">
        <h1 className='font-semibold'>My Cart </h1><i class="ri-close-line text-xl font-semibold cursor-pointer "  onClick={()=> window.history.back()} ></i>
        </div>
        <div className="cro w-full h-[75%] bg-white  rounded-xl my-5 overflow-y-auto flex flex-col flex-nowrap pb-28">
            {
                product_data.map((item,index) => {
                    if(cartItems[item.id]>0){
                        totalPrice += item.price*cartItems[item.id];
                    return(    <div className=" flex items-center gap-3 p-3 justify-between">
                        <div className=" flex gap-3">
                        <Link href={`/product/${item.id}`}>
                        <img src={item.img}alt="" className='w-20 h-20 border-[1px] border-zinc-200 rounded-xl'/></Link>
                        <div className="flex flex-col gap-2">
                        <p className='text-[13px] max-w-[150px]'>{item.name}</p>
                        <div className="flex items-center gap-4">
                        <p className='font-semibold'>₹{item.price*cartItems[item.id]}</p>
                        <p className='text-[12px] text-zinc-400'>{item.weight}</p></div>
                        </div>
                        </div>
                        {
                    !cartItems[item.id]?<button className='font-semibold text-[13px] bg-blue-100 text-blue-700 py-[5px] px-[18px] rounded-lg border-[1px] border-blue-500 w-[66px] h-[31]' onClick={ () => addCart(item.id)}>ADD</button>:
                    <div className='flex flex-row bg-blue-200 items-center rounded-lg gap-1 px-1 py-[4px]  w-[75px] h-[31]'>
                    <i class="ri-subtract-line cursor-pointer px-1  text-[14px]  rounded-md" onClick={ () => removeCart(item.id)}></i>
                    <p className='text-[15px]'>{cartItems[item.id]}</p>
                    <i class="ri-add-line cursor-pointer px-1 text-[14px]  rounded-md" onClick={ () => addCart(item.id)}></i>
                    </div>
                   }
                    </div>)
                    }
                })
            }

        </div>
        <div className="mb-4 flex bg-white rounded-xl p-3 items-center justify-between">
            <div className="  ">
            <h1 className='font-semibold'>₹{totalPrice}</h1>
            <p className='text-[12px] text-zinc-400'>TOTAL</p>
            </div>
            <div className=" flex flex-row items-center">Proceed<i class="ri-arrow-right-s-line"></i></div>
        </div>
    </div>
    </div>
    </>
  )
}

export default page
