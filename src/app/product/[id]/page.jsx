"use client"
import React, { useContext, useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css';
import { product_data } from "../../../../Data/data";
import "./page.css";
import Image from 'next/image';
import ProductCarousel from '@/app/components/ProductCarousel';
import Catenavbar from '@/app/categories/Catenavbar';
import { StoreContext } from '@/app/context/StoreContext';
import Link from 'next/link';
import Footer from '@/app/components/Footer';



const page = ({params}) => {
    const {cartItems,addCart,removeCart} = useContext(StoreContext);
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
<Catenavbar category={data.Type}/>
    <div className=" main w-full max-w-[1200px] mx-auto flex  relative border-b-[1px] border-zinc-300 ">
        <div className="left w-[50%] flex  justify-center ">
            <div className=" leftmain w-full border-b-[1px] border-zinc-300 flex justify-center ">
            <img src={data.img} alt="" className='w-[480px] py-5 z-[3]'/></div>
        <div className="hides" >
            <div className=" scroll">
       <h1 className='text-2xl py-3 font-bold'>Product Detail</h1>
        <p className='pt-5 pb-3 font-semibold'>Key Features</p>
        <p className='text-zinc-600 text-[14px] w-[80%]'>{data.Key_Features}</p>
<p className='pt-5 pb-1 font-semibold'>Unit</p>
<p className='text-zinc-500 text-[14px]'>{data.weight}</p>
<p className='pt-5 pb-1 font-semibold'>Type</p>
<p className='text-zinc-500 text-[14px]'>{data.Type}</p>
<p className='pt-5 pb-1 font-semibold'>Country of Origin</p>
<p className='text-zinc-500 text-[14px]'>{data.Country_of_Origin}</p>
<p className='pt-5 pb-1 font-semibold'>Return Policy</p>
<p className='text-zinc-500 text-[14px] w-[80%]'>{data.Return_Policy}</p>
<p className='pt-5 pb-1 font-semibold'>Description</p>
<p className='text-zinc-500 text-[14px] w-[80%]'>{data.Description}</p>
<p className='pt-5 pb-1 font-semibold'>Disclaimer</p>
<p className='text-zinc-500 text-[14px] w-[80%]'>Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more or different information. It is recommended not to solely rely on the information presented.</p></div></div>
        </div>
        <div className={`  right    border-l-[1px] border-zinc-200  relative   `} >
            <div className={` rightmain sticky top-0 `}>
            <div className="nameborder border-b-[1px] border-zinc-300  ">
        <p className='text-zinc-600 text-[13px] '>Home / {data.product_category} / {data.name}</p>
        <h1 className='text-[25px] font-bold py-2'>{data.name}</h1>
        <span className='text-[12px] font-semibold text-zinc-500'><i class="ri-timer-2-line text-[12px] text-green-600"></i> 10 MINs</span>
          <h1 className='font-semibold py-2 text-blue-500 cursor-pointer' >View Details <i class="ri-arrow-right-s-fill "></i>
        </h1>
        </div>
         <p className='text-zinc-500 text-[13px] py-2'>{data.weight}</p>
        <div className="m-addCart flex justify-between ">

            <div className=" flex flex-col">
            <p className='font-semibold'>₹{data.price} <span className='text-zinc-400 text-[12px] pl-1'>MRP <s>{data.dis_price}</s> </span> </p>
            <p className='text-[12px] text-zinc-500 pb-3'>(Inclusive of all taxes)</p></div>
            {  !cartItems[data.id]?<button className='font-semibold text-[13px] bg-blue-500 text-white py-[5px] px-[18px] rounded-lg border-[1px] border-blue-500 w-[100px] h-[40px] ' onClick={ () => addCart(data.id)}>ADD</button>:
                    <div className='flex flex-row  justify-around items-center rounded-lg gap-1 px-1 py-[4px]  w-[100px] h-[40px] bg-blue-500 text-white'>
                    <i class="ri-subtract-line cursor-pointer px-1  text-[14px]  rounded-md" onClick={ () => removeCart(data.id)}></i>
                    <p className='text-[15px]'>{cartItems[data.id]}</p>
                    <i class="ri-add-line cursor-pointer px-1 text-[14px]  rounded-md" onClick={ () => addCart(data.id)}></i>
                    </div>
            }
        </div>
    <div className=" policy">
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
        </div>
        </div>
        </div>
        </div>
    </div>
    <div className="pt-[50px]">
        <ProductCarousel category={data.category} id={data.id}/>
    </div>
    <Footer/>
    </>
  )
}

export default page
