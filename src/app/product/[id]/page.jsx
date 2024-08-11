"use client"
import Navbar from '@/app/components/Navbar'
import React, { useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css';
import { product_data } from "../../../../Data/data";
import Btn from '@/app/components/Btn';
import "./page.css";


const page = ({params}) => {
  return (
    <>
    <Navbar/>
    <div className="w-full max-w-[1200px] mx-auto flex flex-row relative">
        <div className="left w-[50%] flex flex-col justify-center py-10 ">
            <div className="w-full border-b-[1px] border-zinc-300 mb-3">
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/assets/products/sliding_images/jpeg/7bc1df93-0002-47c3-bea3-7b92bcf09c8c.jpg?ts=1720514361" alt="" className='w-[480px] py-5 '/></div>
        <h1 className='text-2xl py-3 font-bold'>Product Detail</h1>
        <p className='py-1'>Magic Masala</p>
        <p className='text-zinc-500 text-[14px]'>Flavour</p>
        <p className='pt-5 pb-3 font-semibold'>Key Features</p>
        <p className='text-zinc-600 text-[14px] w-[80%]'>The Lay’s India’s Magic Masala spice blend will excite your tastebuds.
Made from the highest quality, farm-grown potatoes.
Lay’s India’s Magic Masala is a 100% vegetarian snack.
A versatile snack that can be enjoyed in any setting.
Lay’s is always on the lookout for the best flavours, cuts, and innovations that are guaranteed to bring a smile to your face.</p>
<p className='pt-5 pb-1 font-semibold'>Unit</p>
<p className='text-zinc-500 text-[14px]'>48g</p>
<p className='pt-5 pb-3 font-semibold'>Ingredients</p>
<p className='text-zinc-600 text-[14px] w-[80%]'>Potato, edible vegetable oil (palmolein, rice bran oil), *seasoning (~spices and condiments, iodized salt, maltodextrin, black salt, sugar, tomato powder, acidity regulators (330, 296, 334), flavour (natural and nature identical flavouring substances), anticaking agent (551), color (160c)).
*As flavouring agent. ~Contains Onion and Garlic.</p>
<p className='pt-5 pb-1 font-semibold'>Type</p>
<p className='text-zinc-500 text-[14px]'>Potato Chips</p>
<p className='pt-5 pb-1 font-semibold'>Country of Origin</p>
<p className='text-zinc-500 text-[14px]'>India</p>
<p className='pt-5 pb-1 font-semibold'>Return Policy</p>
<p className='text-zinc-500 text-[14px] w-[80%]'>This Item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery.
In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.</p>
<p className='pt-5 pb-1 font-semibold'>Description</p>
<p className='text-zinc-500 text-[14px] w-[80%]'>Binge on these exquisite bites of pure Masala magic! With hints of cumin, coriander, chili powder, onion, and garlic, Lay’s India’s Magic Masala is a one-way ticket to a world of exploding flavours. Experience this one-of-a-kind snack and indulge in the boldness of the Masala spice blend. Lay's India’s Magic Masala chips are perfect for any occasion. From the quick snack breaks at work, to the impromptu get-togethers, this snack is perfect to binge on.</p>
<p className='pt-5 pb-1 font-semibold'>Disclaimer</p>
<p className='text-zinc-500 text-[14px] w-[80%]'>Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more or different information. It is recommended not to solely rely on the information presented.</p>
        </div>
        <div className={`  right w-[50%]   border-l-[1px] border-zinc-200  relative py-12  `} >
            <div className={`sticky top-0 pl-10 py-12`}>
            <div className=" border-b-[1px] border-zinc-300 pb-3 mb-5">
        <p className='text-zinc-600 text-[13px] '>Home / Chips & Crisps / Lay's India's Magic Masala Potato Chips</p>
        <h1 className='text-[25px] font-bold py-2'>Lay's India's Magic Masala Potato Chips</h1>
        <span className='text-[12px] font-semibold text-zinc-500'><i class="ri-timer-2-line text-[12px] text-green-600"></i> 10 MINs</span>
        <h1 className='font-semibold py-2 text-blue-500'>View all by Lay's<i class="ri-arrow-right-s-fill "></i>
        </h1>
        </div>
        <p className='text-[12px] text-zinc-500 pb-3'>(Inclusive of all taxes)</p>
        <Btn/>
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
