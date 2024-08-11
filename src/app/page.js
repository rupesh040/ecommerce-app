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
import { product_data } from "../../Data/data";
import Product from "./components/Product";

export default function Home({name}) {
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
<Navbar address={geo.formatted} btnOn={location}/>
<Banner/>
<Carousel/>
<Catecard/>
<ProductCarousel/>
<ProductCarousel/>
<Footer/>

  </>
  );
}
