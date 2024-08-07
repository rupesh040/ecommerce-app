import React from 'react'

const Account = () => {
  return (
    <div className=' account w-[250px]  bg-white rounded-2xl absolute  mx-5 my-2 border-[1px] border-zinc-300 flex justify-between flex-col  z-20'>
        <h2 className='py-3 px-4 border-b-[1px] border-zinc-300 font-bold cursor-pointer'>My Account</h2>
        <div className=' flex flex-col'>
            <h2 className='hover:bg-zinc-100 py-2 px-4 cursor-pointer hover:px-6 transition-all ease-in-out'><i class="ri-user-line"></i> Profile</h2>
            <h2 className='hover:bg-zinc-100 py-2 px-4 cursor-pointer hover:px-6 transition-all ease-in-out'><i class="ri-draggable"></i> My order</h2>
            <h2 className='hover:bg-zinc-100 py-2 px-4 cursor-pointer hover:px-6 transition-all ease-in-out'><i class="ri-bill-line"></i> Billing</h2>
            <h2 className='hover:bg-zinc-100 py-2 px-4 cursor-pointer hover:px-6 transition-all ease-in-out'><i class="ri-settings-2-line"></i> Setting</h2>

        </div>
        <h2 className=' logout py-2  px-4 border-t-[1px] border-zinc-300 font-bold cursor-pointer hover:bg-zinc-200  text-zinc-700 hover:px-6 transition-all ease-in-out '><i class="ri-logout-box-r-line mr-2"></i>Logout</h2>
    </div>
  )
}

export default Account