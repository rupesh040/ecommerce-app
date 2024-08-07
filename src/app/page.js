"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import 'remixicon/fonts/remixicon.css';
import Overlay from "./components/Overlay";
import { useEffect, useState } from "react";
import Account from "./components/Account";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";

export default function Home() {
    const [overlay ,setOverlay] = useState(false);
    const [longitude,setLongitude] = useState(null);
    const [latitude,setLatitude] = useState(null);
    const [geo,setGeo] = useState();
    const trueFalse = () =>{
        setOverlay(prevState => !prevState);
    }
    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            }),(err) => {alert("error")}
        }
        else{alert("error")}
    },[]);
    useEffect(()=>{
        fetch(`https://us1.locationiq.com/v1/reverse?key=pk.d65daa148cda8080fcaf739ab8440f65&lat=${latitude}&lon=-${longitude}&format=json&`)
        .then(res => res.json())
        .then(data => setGeo(data));
    },[]);
    console.log(geo);
  return (
  <>
<Navbar btnOn={trueFalse}/>
{!overlay?null:<Account />}

{!overlay?null:<Overlay btn={trueFalse} />}
<Banner/>
<Carousel/>
<h1>{geo.display_name}</h1>
  </>
  );
}
