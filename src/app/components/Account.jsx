"use client"
import Link from 'next/link';
import React, { useContext, useState } from 'react'
import LoginForm from './LoginForm';
import { StoreContext } from '../context/StoreContext';

const Account = ({add,cart,logout}) => {
    const {token,setToken} = useContext(StoreContext);
    const [trues,setTrues] = useState(false);
    const [showLogIn ,setShowLogIn] = useState(false);
    const Show = () =>{
        setShowLogIn(prevState => !prevState);
    }
    const logOut = () => {
        localStorage.removeItem("token");
        setToken("");
    }
  return (
    <div className=' account w-[250px]  bg-white rounded-2xl absolute  mx-5 my-2 border-[1px] border-zinc-300 flex justify-between flex-col  z-20'>
        {!trues?<h2 className='py-3 px-4 border-b-[1px] border-zinc-300 font-bold cursor-pointer' >My Account</h2>:<h2 className='py-3 px-4 border-b-[1px] border-zinc-300 font-bold cursor-pointer'>My Address</h2>}
       {!trues? <div className=' flex flex-col'>
            <h2 className='hover:bg-zinc-100 py-2 px-4 cursor-pointer hover:px-6 transition-all ease-in-out'><i class="ri-shopping-cart-line"></i> My order</h2>
            <h2 className='hover:bg-zinc-100 py-2 px-4 cursor-pointer hover:px-6 transition-all ease-in-out' onClick={() => setTrues(true)}><i class="ri-map-pin-line"></i> Address</h2>
            <h2 className='hover:bg-zinc-100 py-2 px-4 cursor-pointer hover:px-6 transition-all ease-in-out'><i class="ri-settings-2-line"></i> Setting</h2>

        </div> : <h2 className='hover:bg-zinc-100 py-2 px-4 cursor-pointer hover:px-6 transition-all ease-in-out'>{add} </h2>}
        {!token?<h2 className=' logout py-2  px-4 border-t-[1px] border-zinc-300 font-bold cursor-pointer hover:bg-zinc-200  text-zinc-700 hover:px-6 transition-all ease-in-out ' onClick={Show}><i class="ri-login-box-line mr-2"></i>Login</h2>:<h2 className=' logout py-2  px-4 border-t-[1px] border-zinc-300 font-bold cursor-pointer hover:bg-zinc-200  text-zinc-700 hover:px-6 transition-all ease-in-out ' onClick={logOut}><i class="ri-logout-box-r-line mr-2"></i>Logout</h2>}
        {showLogIn?
    <LoginForm close={Show}/>:""
    }
    </div>
  )
}

export default Account
