"use client"
import React, { useContext } from 'react'
import Catenavbar from './Catenavbar'
import "./page.css";
import 'remixicon/fonts/remixicon.css';
import { StoreContext } from '../context/StoreContext';
import Product from '../components/Product';


const page = () => {
    const {product_data} = useContext(StoreContext)
  return (
    <>
     <Catenavbar/>
     <div className="  relative w-full overflow-hidden bg-[#053a30] h-80 flex items-center justify-center flex-col gap-3">
<img src="deco1.png" alt=""  className='absolute top-[-10px] left-[-50px] w-52 scale-x-[-1] deco1 z-[1]'/>

<h1 className=' text-5xl text-[#feb801] font-extrabold font2'>Happy </h1>
<h1 className=' text-5xl text-white font-extrabold text-center relative'>Raksha bandhan <span className='font1 absolute top-[-15px] font-extralight text-3xl right-[20%] rotate-[-15deg] text-[#feb801]'>Special</span> </h1>
<p className='text-white font-thin text-center max-w-[700px] max-[600px]:text-[13px]'>Raksha Bandhan is one of the cultural festivals of India, celebrated primarily in North India. Schools organise cultural activities and competitions for students to show their creativity and learn about this special day. One such activity is the essay writing competition on Raksha Bandhan.</p>
<img src="deco1.png" alt=""  className='absolute top-[-5px] w-52 right-[-50px] deco2'/>
     </div>
     <h1 className='pt-5 px-3 text-xl'>Raksha Bandhan Essentials </h1>
     <div className=" flex flex-wrap p-3   justify-around gap-2">
{
    product_data.map((item) => {
        return <Product img={item.img} name={item.name} weight={item.weight} price={item.price} id={item.id}/>
    })
}</div>
    </>
  )
}

export default page
