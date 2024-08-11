"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import "./page.css";
import 'remixicon/fonts/remixicon.css';

const Catenavbar = ({category}) => {
    const [stickyClass, setStickyClass] = useState('');
    useEffect(() => {
      window.addEventListener('scroll', stickNavbar);
      return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 0 ? setStickyClass('sticky-nav')  : setStickyClass('');
      }
    };
  return (
<nav className={`${stickyClass} w-full flex flex-row items-center justify-between fixed top-0 left-0 z-10 bg-white`}>
    <div   className=" flex flex-row gap-3 items-center"><i class="ri-arrow-left-line py-1 px-2 text-xl bg-white rounded-full cursor-pointer" onClick={()=> window.history.back()}></i>
    <h2 className='text-[15px] font-bold text-zinc-800 name '>{category}</h2>
    </div>

<div className="flex flex-row gap-3 items-center">
<Link href="/search" className='w-[100%]'><i class="ri-search-line py-2 px-2 text-xl bg-white rounded-full cursor-pointer"></i></Link>
<i class="ri-shopping-cart-line py-1 px-2 text-xl bg-white rounded-full cursor-pointer"></i></div>

</nav>
  )
}

export default Catenavbar
