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

export default function Home() {

  return (
  <>
<Navbar/>
<Banner/>
<Carousel/>
<Catecard/>
<ProductCarousel/>
<ProductCarousel/>
<Footer/>
  </>
  );
}
