import React, { useState } from "react";
import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";

import Link from "next/link";
const Navbar = () => {
  const [open, setOpen] = useState(true);

  const handleShow = () => {
    setOpen(!open);
  };

  return (
    <div className=" bg-sky-600 ">
      <nav className=" flex justify-between h-16 px-4 xl:px-0 max-w-screen-xl m-auto  shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]    text-white   ">
        <Link href="/">
          <div className="my-3 text-2xl font-medium h-fit w-[195px] border-4 px-1 border-white">
            <h1>Cabs in Amritsar</h1>
          </div>
        </Link>
        <div className="flex items-center lg:hidden">
          <button onClick={handleShow}>{open?<Image alt="icon" width={35} height={35} src="/icons/nav-menu.png"></Image>:<Image alt="close icon" width={35} height={35} src="/icons/nav-close.png"></Image>}</button>
        </div>
        <div
          className={`lg:space-x-6 gap-y-4 font-medium   justify-between flex flex-col items-center lg:flex-row  z-20  lg:static absolute bg-sky-600 lg:w-auto lg:py-0 pb-6  w-full left-0 ${
            open ? "hidden lg:flex" : "top-[64px]"
          }`}
        >
          <Link onClick={handleShow} href="/">Home</Link>
          <Link onClick={handleShow} href="/Taxi_service">Services</Link>
          <Link onClick={handleShow} href="/Tour_packages">Tour Packages</Link>
          <Link onClick={handleShow} href="/About">About us</Link>
          <Link onClick={handleShow} href="/Contact">Contact us</Link>
          <div className="hidden lg:flex space-x-3">
            <Link
              href="/Taxi_service"
              class="relative inline-block text-lg group"
            >
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-blue-300 rounded-3xl group-hover:text-black">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-3xl bg-sky-600"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
                <span className="relative">Book now</span>
              </span>
              <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-white rounded-3xl group-hover:mb-0 group-hover:mr-0"></span>
            </Link>
            <Link
              href="tel:+918727989814"
              class="relative inline-block text-lg group"
            >
              <span className="relative z-10 block px-5 py-1.5 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-blue-300 rounded-3xl group-hover:text-black">
                <span className="absolute inset-0 w-full h-full px-5 py-1.5 rounded-3xl bg-sky-600"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
                <span className="relative flex gap-1 ">
                  <Player
                    autoplay
                    loop
                    src="https://assets8.lottiefiles.com/private_files/lf30_ad0z9wuy.json"
                    style={{
                      backgroundColor: "white",
                      height: "36px",
                      width: "36px",
                      borderRadius: "50%",
                    }}
                  ></Player>
                  <span className="m-auto">Call now</span>
                </span>
              </span>
              <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-white rounded-3xl group-hover:mb-0 group-hover:mr-0"></span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

