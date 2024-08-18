"use client"
import React from 'react'
import Catenavbar from './Catenavbar'
import "./page.css";
import 'remixicon/fonts/remixicon.css';


const page = () => {

  return (
    <>
     <Catenavbar/>
     <div className=" catebanner relative w-full overflow-hidden "><img src="https://img.freepik.com/free-vector/happy-raksha-bandhan-cultural-festival-classic-banner-design-vector_1055-18362.jpg?size=626&ext=jpg&ga=GA1.1.1061875891.1723555472&semt=ais_hybrid" alt="" className='w-full  fisrt'/>
     <img src="https://static.vecteezy.com/system/resources/previews/007/303/767/large_2x/raksha-bandhan-indian-festival-celebration-background-free-vector.jpg" alt="" className='w-full  second'/></div>

    </>
  )
}

export default page
