"use client"
import Navbar from '@/app/components/Navbar'
import React, { useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css';
import { product_data } from "../../../../Data/data";
import Btn from '@/app/components/Btn';
import "./page.css";
import Image from 'next/image';


const page = ({params}) => {
    const [data, setData] = useState({});

    const fetchproductData = () => {
      for (let i = 0; i < product_data.length; i++) {
        if (Number(params.id) === product_data[i].id) {
          setData(product_data[i]);
          console.log(product_data[i]);
          break;
        }
      }
    };

    useEffect(() => {
        fetchproductData();
    }, []);
  return (
    <>
    <Navbar/>
    <div className="w-full max-w-[1200px] mx-auto flex flex-row relative">
        <div className="left w-[50%] flex flex-col justify-center py-10 ">
            <div className="w-full border-b-[1px] border-zinc-300 mb-3">
            <img src={data.banner} alt="" className='w-[480px] py-5 '/></div>
        <h1 className='text-2xl py-3 font-bold'>Product Detail</h1>
        <p className='py-1'>{data.flavour}</p>
        <p className='text-zinc-500 text-[14px]'>Flavour</p>
        <p className='pt-5 pb-3 font-semibold'>Key Features</p>
        <p className='text-zinc-600 text-[14px] w-[80%]'>{data.Key_Features}</p>
<p className='pt-5 pb-1 font-semibold'>Unit</p>
<p className='text-zinc-500 text-[14px]'>{data.Unit}</p>
<p className='pt-5 pb-3 font-semibold'>Ingredients</p>
<p className='text-zinc-600 text-[14px] w-[80%]'>{data.Ingredients}</p>
<p className='pt-5 pb-1 font-semibold'>Type</p>
<p className='text-zinc-500 text-[14px]'>{data.Type}</p>
<p className='pt-5 pb-1 font-semibold'>Country of Origin</p>
<p className='text-zinc-500 text-[14px]'>{data.Country_of_Origin}</p>
<p className='pt-5 pb-1 font-semibold'>Return Policy</p>
<p className='text-zinc-500 text-[14px] w-[80%]'>{data.Return_Policy}</p>
<p className='pt-5 pb-1 font-semibold'>Description</p>
<p className='text-zinc-500 text-[14px] w-[80%]'>{data.Description}</p>
<p className='pt-5 pb-1 font-semibold'>Disclaimer</p>
<p className='text-zinc-500 text-[14px] w-[80%]'>Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more or different information. It is recommended not to solely rely on the information presented.</p>
        </div>
        <div className={`  right w-[50%]   border-l-[1px] border-zinc-200  relative py-12  `} >
            <div className={`sticky top-0 pl-10 py-12`}>
            <div className=" border-b-[1px] border-zinc-300 pb-3 mb-5">
        <p className='text-zinc-600 text-[13px] '>Home / {data.product_category} / {data.name}</p>
        <h1 className='text-[25px] font-bold py-2'>{data.name}</h1>
        <span className='text-[12px] font-semibold text-zinc-500'><i class="ri-timer-2-line text-[12px] text-green-600"></i> 10 MINs</span>
        <h1 className='font-semibold py-2 text-blue-500'>View all by Lay's<i class="ri-arrow-right-s-fill "></i>
        </h1>
        </div>
        <p className='text-[12px] text-zinc-500 pb-3'>(Inclusive of all taxes)</p>
        <div className=" flex justify-between">
            <div className=" flex flex-col">
                <p className='text-zinc-400 text-[12px]'>{data.Unit}</p>
            <p className='font-semibold'>₹{data.price} <span className='text-zinc-400 text-[12px] pl-1'>MRP <s>{data.dis_price}</s> </span> </p></div>
            <Btn/>
        </div>

        <h2 className='font-semibold text-[15px] pt-10 '>Why shop from our store?</h2>
        <div className=" flex gap-3 py-5">
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png" alt="" className='w-10 h-10'/>
            <div className="">
                <p className='text-[13px] '>Superfast Delivery</p>
                <p className='text-[13px] text-zinc-500'>Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
            </div>
        </div>
        <div className=" flex gap-3 py-5">
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Best_Prices_Offers.png" alt="" className='w-10 h-10'/>
            <div className="">
                <p className='text-[13px] '>
                Best Prices & Offers</p>
                <p className='text-[13px] text-zinc-500'>
                Best price destination with offers directly from the manufacturers.</p>
            </div>
        </div>
        <div className=" flex gap-3 py-5">
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Wide_Assortment.png" alt="" className='w-10 h-10'/>
            <div className="">
                <p className='text-[13px] '>Wide Assortment</p>
                <p className='text-[13px] text-zinc-500'>
                Choose from 5000+ products across food, personal care, household & other categories.</p>
            </div>
        </div></div>
        </div>
    </div>
    </>
  )
}

export default page
