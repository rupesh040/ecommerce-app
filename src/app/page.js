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
import { cate_data } from "../../Data/category";
import LoginForm from "./components/LoginForm";


export default function Home() {

  return (
  <>
<Navbar/>
<Banner/>
<Carousel/>
<Catecard/>
{
    cate_data.map((item) => {
        return <ProductCarousel id={item.id} category={item.category_name}/>
    })
}
<Footer/>
  </>
  );
}
