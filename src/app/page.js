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

export default function Home() {
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

const location = async (latitude,longitude) =>{
    await  fetch(`https://api.opencagedata.com/geocode/v1/json?key=d2eb98b8df2440e4b815490738983b95&q=${latitude}%2C${longitude}&pretty=1`)
    .then(res => res.json())
    .then(data => setGeo(data.results[0]));
}
//   useEffect( () =>{
//         location();
//     },[]);
    console.log(geo.formatted);
  return (
  <>
<Navbar btnOn={trueFalse}/>
{!overlay?null:<Account />}

{!overlay?null:<Overlay btn={trueFalse} />}
<Banner/>
<Carousel/>
<h1 className=" max-w-[1180px] mx-auto p-1 mb-5 border-l-4 border-orange-500 text-2xl font-bold ">Category</h1>
<div className=" max-w-[1180px] flex flex-wrap mx-auto gap-5 my-5 ">
<Catecard/>
</div>
<ProductCarousel/>
  </>
  );
}
