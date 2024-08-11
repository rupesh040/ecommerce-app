"use client"
import React from 'react'
import Catenavbar from './Catenavbar'
import "./page.css";
import 'remixicon/fonts/remixicon.css';


const page = () => {

  return (
    <>
     <Catenavbar/>
     <div className=" catebanner relative w-full overflow-hidden "><img src="https://t3.ftcdn.net/jpg/06/21/60/62/240_F_621606287_9hjs4rsn1lp8teuMrt969RoQLfyTr37N.jpg" alt="" className='w-full  fisrt'/>
     <img src="https://static.vecteezy.com/system/resources/previews/007/303/767/large_2x/raksha-bandhan-indian-festival-celebration-background-free-vector.jpg" alt="" className='w-full  second'/></div>

    </>
  )
}

export default page
