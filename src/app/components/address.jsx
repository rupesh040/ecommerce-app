import React from 'react'

const address = ({add}) => {
  return (
    <>
    <div className=' w-[250px]  bg-white rounded-2xl absolute  mx-5 my-2 border-[1px] border-zinc-300 flex justify-between flex-col  z-20 p-5'>
        <h1 className='font-semibold'>My Address</h1>
        <p>{add}</p>
    </div>
    <div className="w-[100vw] h-[100vh] bg-black opacity-10 absolute top-0 left-0"></div>
    </>
  )
}

export default address
