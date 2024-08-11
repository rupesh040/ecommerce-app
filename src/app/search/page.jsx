"use client"
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css';
import Product from '../components/Product';
import ProductCarousel from '../components/ProductCarousel';
import { product_data } from "../../../Data/data";
import ProductCarouselsrc from '../components/ProductCarouselsrc';

const page = ({product}) => {
    const[id,setId]=useState(0);
    const [search,setSearch] = useState("");
    const [result , setResult] = useState(product_data);

    const placeholders = [
        'Search "chocolate"',
        'Search "egg"',
        'Search "curd"',
        'Search "milk"',
        'Search "rice"',
        'Search "Salt"',
    ];
    const searchData =  (search) => {
        console.log(search);
        let filterData = product_data;
        if(search){
            filterData = product_data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
            setResult(filterData);
        }
        else{
            setResult(product_data)
        }
    }

    // for(let i=0; i <= placeholders.length; i++){
    //     if(id === placeholders.length){
    //         setId(0);
    //     }
    //     else{
    //         setTimeout(() => {
    //             setId(id+1);
    //         }, 2000);
    //     }
    // }


    console.log(result);
  return (
    <>
    <div className="max-w-[1180px] mx-auto bg-white p-2  max-[600px]:shadow-lg max-[600px]:w-full max-[600px]:fixed">
    <div className={`search  px-4 py-2 flex gap-2  rounded-lg h-[47] border-[1px] border-zinc-300 bg-zinc-100 justify-around items-center `}>
        <Link href="/">
    <i class="ri-arrow-left-line cursor-pointer text-2xl"></i></Link>
       <input type="text" className='outline-none w-[95%] bg-transparent border-r-[1px] border-zinc-500' placeholder={placeholders[id]} onChange={(e) => searchData(e.target.value)} autoFocus/>
       <i class="ri-search-2-line text-black cursor-pointer text-xl active:scale-90" ></i>
      </div>
    </div>

{/* search result  */}
<div className=" pt-5 flex flex-wrap max-w-[1180px] mx-auto  gap-4  justify-start  max-[600px]:pt-24 max-[600px]:justify-around">
  {
    result.map((item) => <ProductCarouselsrc img={item.img} name={item.name} weight={item.weight} price={item.price}/> )
  }
</div>


    </>
  )
}

export default page
