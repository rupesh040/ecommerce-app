"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import 'remixicon/fonts/remixicon.css';
import Overlay from "./components/Overlay";
import { useState } from "react";
import Account from "./components/Account";

export default function Home() {
    const [overlay ,setOverlay] = useState(false);
    const trueFalse = () =>{
        setOverlay(prevState => !prevState);
    }
  return (
  <>
<Navbar />
{!overlay?null:<Account/>}

{!overlay?null:<Overlay btn={trueFalse} />}

<h1 className="z-10" onClick={trueFalse} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae placeat et! Harum quidem dolorum nam, quia accusantium molestias repellendus?</h1>
  </>
  );
}
