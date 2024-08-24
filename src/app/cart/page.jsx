"use client"
import 'remixicon/fonts/remixicon.css';
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { StoreContext } from '../context/StoreContext';
import "./cart.css";


const page = () => {
      const {product_data,cartItems,addCart,removeCart} = useContext(StoreContext);
      let totalPrice = 0;
  return (
    <>
    <div className="main w-full  bg-[#F5F7FD]">
    <div className=" m-auto max-w-[1080px]   z-20 p-5 max-[600px]:w-full flex flex-col">
        <div className=" flex justify-between ">
        <h1 className='font-semibold'>My Cart </h1><i class="ri-close-line text-xl font-semibold cursor-pointer "  onClick={()=> window.history.back()} ></i>
        </div>
        <div className="cro w-full  bg-white  rounded-xl mt-5  flex flex-col overflow-hidden ">
            <div className=" sticky top-0 bg-white flex border-b-[1px] border-zinc-200 p-4 justify-start items-center gap-2" ><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/assets/eta-icons/15-mins-filled.png" alt="" width={50} /> <div className=""> <p className='font-bold text-[16px]'> Free Delivery in 10 minutes</p> <p className='text-[11px]'>Shipment 0f All item</p> </div></div>
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
                    !cartItems[item.id]?<button className='font-semibold text-[13px] bg-blue-500 text-white py-[5px] px-[18px] rounded-lg border-[1px] border-blue-500 w-[100px] h-[40px] ' onClick={ () => addCart(item.id)}>ADD</button>:
                    <div className='flex flex-row  justify-around items-center rounded-lg gap-1 px-1 py-[4px]  w-[100px] h-[40px] bg-blue-500 text-white'>
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
        <div className=" flex flex-col gap-2  border-t-[1px] border-zinc-300 border-dashed rounded-xl bg-white overflow-hidden mb-5">
                <h2 className='font-bold px-3 py-2'> Bill details</h2>
                <p className='flex justify-between text-[14px] px-3'> <span><i class="ri-bill-line pr-1"></i>Sub total </span> <spna>₹{totalPrice}</spna> </p>
                <p className='flex justify-between text-[14px] px-3' > <span><i class="ri-truck-line pr-1"></i>Delivery charge </span> <spna> <s className='text-[11px] text-zinc-400'>₹49</s> Free</spna> </p>
                <div className=" flex justify-between text-[15px] bg-blue-100 text-blue-500 p-3 border-[1px] border-blue-300 border-dashed grand"> <p className='font-semibold'>Grand total</p> <p className='font-semibold'>₹{totalPrice}</p>  </div>
            </div>
        <div className="mb-4 flex bg-blue-500 text-white rounded-xl p-3 items-center justify-between  proceed sticky bottom-3">
            <div className="  ">
            <h1 className='font-semibold'>₹{totalPrice}</h1>
            <p className='text-[12px] text-zinc-200'>TOTAL</p>
            </div>
            <div className=" flex flex-row items-center text-white relative px-4 cursor-pointer">Proceed <i class="ri-arrow-right-s-line anime2 "></i><i class="ri-arrow-right-s-line anime"></i></div>
        </div>
    </div>
    </div>
    </>
  )
}

export default page
