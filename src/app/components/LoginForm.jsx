"use client"
import React, { useState } from 'react'

const loginForm = ({close}) => {
    const[logIn,setLogIn] = useState(false);
    const[hide,setHide] = useState(false);
    const show = () =>{
        setHide(prevState => !prevState);
    }
  return (
    <div className='w-full h-full z-50 bg-[rgba(0,0,0,40%)] fixed top-0 left-0 flex justify-center items-center '>{
        logIn?<form className=" flex flex-col bg-white p-7 max-w-[700px] gap-3 rounded-lg">
            <div className="flex justify-between font-bold text-xl pb-3">
            <h1>Sign up</h1> <h1 className='cursor-pointer' onClick={close}>X</h1></div>
            <input type="text" placeholder='Name' className='outline-none border-[1px] border-zinc-400  text-[18px] p-2 rounded-md ' required />
            <input type="email" placeholder='Email address'  className='outline-none border-[1px] border-zinc-400  text-[18px] p-2 rounded-md ' required/>
            <div className="border-[1px] border-zinc-400  text-[18px] p-2 rounded-md flex justify-between">
            <input type={hide?"text":"password"} placeholder='Password'  className='outline-none  ' required/>{hide?<i class="ri-eye-line cursor-pointer" onClick={show}></i>:<i class="ri-eye-off-line cursor-pointer" onClick={show}> </i>}</div>
            <button type='submit' className='bg-blue-600 py-2 rounded-md text-white'>Create Account</button>
            <div className=" flex gap-2">
            <input type="checkbox" name='privacy' id='privacy' className='cursor-pointer'  required/>
            <label for="privacy"  className='text-[14px] w-80 text-zinc-500'>  By continuing, i agree of the terms of us & privacy policy</label></div>
            <p className='text-zinc-600 text-[15px] pt-3'>Already have an Account? <span className='text-blue-600 cursor-pointer' onClick={(e) => setLogIn(false)}>Click Here</span> </p>
        </form> :
        <form className=" flex flex-col bg-white p-7 max-w-[700px] gap-3 rounded-lg">
            <div className="flex justify-between font-bold text-xl pb-3">
            <h1>Login</h1> <h1 className='cursor-pointer' onClick={close}>X</h1></div>
            <input type="email" placeholder='Email address'  className='outline-none border-[1px] border-zinc-400  text-[18px] p-2 rounded-md ' required/>
            <div className="border-[1px] border-zinc-400  text-[18px] p-2 rounded-md flex justify-between">
            <input type={hide?"text":"password"} placeholder='Password'  className='outline-none  ' required/>{hide?<i class="ri-eye-line cursor-pointer" onClick={show}></i>:<i class="ri-eye-off-line cursor-pointer" onClick={show}> </i>}</div>
            <button type='submit' className='bg-blue-600 py-2 rounded-md text-white'>Create Account</button>
            <div className=" flex gap-2">
            <input type="checkbox" name='privacy' id='privacy' className='cursor-pointer'  required/>
            <label for="privacy"  className='text-[14px] w-80 text-zinc-500'>  By continuing, i agree of the terms of us & privacy policy</label></div>
            <p className='text-zinc-600 text-[15px] pt-3'>Create a new Account? <span className='text-blue-600 cursor-pointer' onClick={(e) => setLogIn(true)}>Click Here</span> </p>
        </form>
    }


    </div>
  )
}

export default loginForm
