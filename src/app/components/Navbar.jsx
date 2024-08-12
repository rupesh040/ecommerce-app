"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Account from './Account';
import Overlay from './Overlay';

const Navbar = () => {
    const [logIn ,setLogIn] = useState(true);
    const [overlay ,setOverlay] = useState(false);
    const trueFalse = () =>{
        setOverlay(prevState => !prevState);
        location();
    }
    const[id,setId]=useState(0);
    const placeholders = [
        'Search "chocolate"',
        'Search "egg"',
        'Search "curd"',
        'Search "milk"',
        'Search "rice"',
        'Search "Salt"',
    ];

    for(let i=0; i <= placeholders.length; i++){
        if(id === placeholders.length){
            setId(0);
        }
        else{
            setTimeout(() => {
                setId(id+1);
            }, 2000);
        }
    }
    const [stickyClass, setStickyClass] = useState('');
    const [logosticky, setLogosticky] = useState('');

    useEffect(() => {
      window.addEventListener('scroll', stickNavbar);
      return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        // window height changed for the demo
        windowHeight > 150 ? setStickyClass('sticky-nav')  : setStickyClass('');
      }
    };
    useEffect(() => {
        window.addEventListener('scroll', stickylogo);
        return () => window.removeEventListener('scroll', stickylogo);
      }, []);

      const stickylogo = () => {
        if (window !== undefined) {
          let windowHeight = window.scrollY;
          // window height changed for the demo
          windowHeight > 150 ? setLogosticky('stickylogo')  : setLogosticky('');
        }
      };


      const [longitude,setLongitude] = useState(null);
      const [latitude,setLatitude] = useState(null);
      const [geo,setGeo] = useState([]);

      useEffect(()=>{
          if(navigator.geolocation){
              navigator.geolocation.getCurrentPosition((position) => {
                  setLatitude(position.coords.latitude);
                  setLongitude(position.coords.longitude);
              }),(err) => {alert("error")}
          }
          else{alert("error")}
      },[]);
  const leta = latitude;
  const long = longitude;
  const location = async (latitude,longitude) =>{
      await  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${leta},+${long}&key=d2eb98b8df2440e4b815490738983b95&language=en&pretty=1`)
      .then(res => res.json())
      .then(data => setGeo(data.results[0]));
  }
  console.log(geo.formatted);



  return (
    <>
    <nav className={` ${stickyClass} bg-white flex justify-between items-center  border-b-[1px] border-zinc-200 z-10`} >
      <div className={` logo`} id={`${logosticky}`}>
        <Link href={"/"} className='text-4xl font-bold text'>Rupesh.</Link>
        <i class="ri-account-circle-fill text-4xl cursor-pointer" onClick={trueFalse}></i>
      </div>
      <div className="address relative cursor-pointer" onClick={location}>
        <h2 className='font-bold text-xl'>Delivery in 10 minutes</h2>
        <p className='overflow-hidden whitespace-nowrap text-ellipsis inline-block w-[240px] font-light'>{geo.formatted}</p>
        <i class="ri-arrow-drop-down-fill absolute top-[40%] left-[95%] text-4xl"></i>
      </div>
      <div className={`search  px-4 py-2 flex gap-2  rounded-lg h-[47] border-[1px] border-zinc-300 bg-zinc-100`} >
        <Link href="/search" className='w-[100%]'>
       <input type="text" className='outline-none w-[100%] bg-transparent border-r-[1px] border-zinc-500' placeholder={placeholders[id]} /></Link>
       <i class="ri-search-2-line text-black cursor-pointer text-xl active:scale-90"></i>
      </div>

      <div className="cart  flex gap-5 items-center justify-center">{!logIn? <div className="login bg-black text-white px-[20px] py-[7px] rounded-lg cursor-pointer">Login</div> : <div className="login bg-black text-white px-[20px] py-[7px] rounded-lg cursor-pointer" onClick={trueFalse}>Account</div> } <i class="ri-shopping-cart-line text-[20px] bg-black text-white px-[20px] py-[10px] rounded-lg cursor-pointer"></i></div>
    </nav>
    {!overlay?null:<Account add={geo.formatted}/>}
    {!overlay?null:<Overlay btn={trueFalse} />}
    </>
  )
}

export default Navbar
