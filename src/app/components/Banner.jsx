import Link from 'next/link'
import React from 'react'
import { banner_data } from "../../../Data/banner";
const Banner = () => {
  return (
    <div  className=' banner max-w-[1180px] max-[1080px]:max-w-[90%]  overflow-hidden   bg-orange-400 '>
        <Link Link href="/categories">
<img src={banner_data} className='w-full' alt="" /></Link>
    </div>
  )
}

export default Banner
