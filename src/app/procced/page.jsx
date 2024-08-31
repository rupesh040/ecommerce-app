import React from 'react'
import "./procced.css";
import Navbar from '../components/Navbar';
import 'remixicon/fonts/remixicon.css';
const page = () => {
  return (
    <>
      <Navbar/>
      <form className="max-w-[800px] m-auto flex flex-col gap-5 max-[900px]:max-w-[90%]">
      <h1 className='text-2xl font-semibold my-5'>Delivery Information</h1>
      <div className="flex gap-2">
      <input type="text" name='firstname' placeholder='First name' className='p-2 w-[45%] outline-none border-[1px] border-zinc-400 focus:shadow-lg' />
      <input type="text" name='lasttname' placeholder='Last name' className='p-2 w-[45%] outline-none border-[1px] border-zinc-400 focus:shadow-lg' /></div>
      <input type="Email" name='email' placeholder='email' className='p-2 w-[91%] outline-none border-[1px] border-zinc-400 focus:shadow-lg' />
      <input type="text" name='street' placeholder='Street' className='p-2 w-[91%] outline-none border-[1px] border-zinc-400 focus:shadow-lg' />
      <div className="flex gap-2">
      <input type="text" name='city' placeholder='City' className='p-2 w-[45%] outline-none border-[1px] border-zinc-400 focus:shadow-lg' />
      <input type="text" name='State' placeholder='State' className='p-2 w-[45%] outline-none border-[1px] border-zinc-400 focus:shadow-lg' /></div>
      <div className="flex gap-2">
      <input type="number" name='Zipcode' placeholder='Zipcode' className='p-2 w-[45%] outline-none border-[1px] border-zinc-400 focus:shadow-lg' />
      <input type="text" name='Country' placeholder='Country' className='p-2 w-[45%] outline-none border-[1px] border-zinc-400 focus:shadow-lg' /></div>
      <input type="number" name='number' placeholder='Phone No.' className='p-2 w-[91%] outline-none border-[1px] border-zinc-400 focus:shadow-lg' />
      <button type='submit' className='bg-blue-500 text-white w-[91%] py-3 shadow-md'>Proceed To Payment</button>
      </form>
    </>
  )
}


export default page
