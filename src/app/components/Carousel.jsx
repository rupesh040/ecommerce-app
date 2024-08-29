import React, { useState } from 'react'
import { carousel_data } from "../../../Data/carousel";
import Link from 'next/link';
const Carousel = () => {
  return (
    <div className=' cro max-w-[1180px]   mx-auto flex gap-5 flex-nowrap  overflow-x-scroll p-5'>
        {
            carousel_data.map((item) => {
                return <Link href={`/cro/${item.id}`} className="min-w-[350px] h-[200px] bg-black rounded-xl cursor-pointer"><img src={item.img} alt="" /></Link>
            })
        }
    </div>
  )
}

export default Carousel
