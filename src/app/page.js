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
        fetch(`https://geocode.maps.co/reverse?${latitude}&${longitude}&api_key=66b3975fa6904022042036iwv2f903c`)
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
  </>
  );
}
