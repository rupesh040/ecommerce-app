import React from 'react'

const Carousel = () => {
  return (
    <div className=' cro max-w-[1180px]   mx-auto flex gap-5 flex-nowrap  overflow-x-scroll p-5'>
        <div className="min-w-[350px] h-[200px] bg-black rounded-xl cursor-pointer"></div>
        <div className="min-w-[350px] h-[200px] bg-black rounded-xl cursor-pointer"></div>
        <div className="min-w-[350px] h-[200px] bg-black rounded-xl cursor-pointer"></div>
        <div className="min-w-[350px] h-[200px] bg-black rounded-xl cursor-pointer"></div>
        <div className="min-w-[350px] h-[200px] bg-black rounded-xl cursor-pointer"></div>
        <div className="min-w-[350px] h-[200px] bg-black rounded-xl cursor-pointer"></div>
    </div>
  )
}

export default Carousel
