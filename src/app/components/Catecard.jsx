"use client"
import React, { useState } from 'react'
import { cate_data } from "../../../Data/category";
import Link from 'next/link';

const Catecard = ({id}) => {
  return (

    <div className=' max-w-[1180px]  mx-auto gap-5 my-5 '>
     <h1 className=" max-w-[1180px] mx-auto p-1 mb-5 px-3 text-2xl font-bold ">Category</h1>
       <div  className="max-w-[1180px] rounded-xl overflow-hidden cursor-pointer  flex flex-wrap flex-row justify-around">
          {
            cate_data.map((item) => <Link href={`/categoryproduct/${item.id}`} > <img src={item.img} id={item.id} alt="" className='Category hover:scale-90 transition-all ease-in-out'/></Link>)
          }
      </div>
    </div>
  )
}

export default Catecard
