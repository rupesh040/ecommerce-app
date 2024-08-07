"use client"
import React, { useState } from 'react'

const Navbar = ({btnOn}) => {
    const [logIn ,setLogIn] = useState(true);
  return (
    <nav className='flex justify-between items-center  border-b-[1px] border-zinc-200 '>
      <div className="logo">
        <h1 className='text-4xl font-bold'>LOGO</h1>
        <i class="ri-account-circle-fill text-4xl cursor-pointer" onClick={btnOn}></i>
      </div>
      <div className="address relative cursor-pointer">
        <h2 className='font-bold text-xl'>Delivery in 10 minutes</h2>
        <p className='overflow-hidden whitespace-nowrap text-ellipsis font-light'>Lorem ipsum dolor sit amet...</p>
        <i class="ri-arrow-drop-down-fill absolute top-[40%] left-[95%] text-4xl"></i>
      </div>
      <div className="search  px-4 py-2 flex gap-2  rounded-lg h-[47] border-[1px] border-zinc-300 bg-zinc-100">
       <input type="text" className='outline-none w-[95%] bg-transparent border-r-[1px] border-zinc-500' placeholder='Search Anything you want'/>
       <i class="ri-search-2-line text-black cursor-pointer text-xl active:scale-90"></i>
      </div>

      <div className="cart  flex gap-5 items-center justify-center">{!logIn? <div className="login bg-black text-white px-[20px] py-[7px] rounded-lg cursor-pointer">Login</div> : <div className="login bg-black text-white px-[20px] py-[7px] rounded-lg cursor-pointer" onClick={btnOn}>Account</div> } <i class="ri-shopping-cart-line text-[20px] bg-black text-white px-[20px] py-[10px] rounded-lg cursor-pointer"></i></div>
    </nav>
  )
}

export default Navbar
