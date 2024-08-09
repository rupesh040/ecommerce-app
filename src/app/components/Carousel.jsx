import React, { useState } from 'react'

const Carousel = () => {
const[carouselimg,setCarouselimg] = useState([
    "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2022-06/morning-banner.jpg",
    "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg",
   "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg",
    "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg",
]);
console.log(carouselimg);
  return (
    <div className=' cro max-w-[1180px]   mx-auto flex gap-5 flex-nowrap  overflow-x-scroll p-5'>
        {
            carouselimg.map((item) => {
                return <div className="min-w-[350px] h-[200px] bg-black rounded-xl cursor-pointer"><img src={item} alt="" /></div>
            })
        }
    </div>
  )
}

export default Carousel
