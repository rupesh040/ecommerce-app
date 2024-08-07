"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import 'remixicon/fonts/remixicon.css';
import Overlay from "./components/Overlay";
import { useState } from "react";
import Account from "./components/Account";
import Banner from "./components/Banner";

export default function Home() {
    const [overlay ,setOverlay] = useState(false);
    const trueFalse = () =>{
        setOverlay(prevState => !prevState);
    }
  return (
  <>
<Navbar btnOn={trueFalse}/>
{!overlay?null:<Account />}

{!overlay?null:<Overlay btn={trueFalse} />}
<Banner/>
  </>
  );
}
