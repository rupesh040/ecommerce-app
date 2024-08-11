"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import 'remixicon/fonts/remixicon.css';
import Overlay from "./components/Overlay";
import { useEffect, useState } from "react";
import Account from "./components/Account";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import Catecard from "./components/Catecard";
import ProductCarousel from "./components/ProductCarousel";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home({name}) {
    const [overlay ,setOverlay] = useState(false);
    const [longitude,setLongitude] = useState(null);
    const [latitude,setLatitude] = useState(null);
    const [geo,setGeo] = useState([]);
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

// const location = async (latitude,longitude) =>{
//     await  fetch(`https://api.opencagedata.com/geocode/v1/json?key=d2eb98b8df2440e4b815490738983b95&q=${latitude}%2C${longitude}&pretty=1`)
//     .then(res => res.json())
//     .then(data => setGeo(data.results[0]));
// }
console.log(name);
  return (
  <>
<Navbar btnOn={trueFalse}/>
{!overlay?null:<Account />}

{!overlay?null:<Overlay btn={trueFalse} />}

<Banner/>
<Carousel/>
<Catecard/>
<ProductCarousel/>
<ProductCarousel/>
<ProductCarousel/>
<Footer/>

  </>
  );
}
