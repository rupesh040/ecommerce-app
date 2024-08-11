import React, { useState } from 'react'
import { carousel_data } from "../../../Data/carousel";
const Carousel = () => {
  return (
    <div className=' cro max-w-[1180px]   mx-auto flex gap-5 flex-nowrap  overflow-x-scroll p-5'>
        {
            carousel_data.map((item) => {
                return <div className="min-w-[350px] h-[200px] bg-black rounded-xl cursor-pointer"><img src={item} alt="" /></div>
            })
        }
    </div>
  )
}

export default Carousel
