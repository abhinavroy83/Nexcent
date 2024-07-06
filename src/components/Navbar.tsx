"use client";

import React, { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import icon from "../../public/Icon.png";
import Image from "next/image";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed w-full py-6 bg-green-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-2 top-0 z-50">
      <div className="flex  max-w-screen-sm lg:max-w-7xl justify-between items-center mx-auto">
        <div className="flex items-center">
          <Image src={icon} alt="x" width={40} height={40} />
          <p className="text-3xl font-semibold lg:px-2">Nexcent</p>
        </div>
        <div className="hidden md:flex gap-7">
          <p className="text-xl">Home</p>
          <p className="text-xl">Service</p>
          <p className="text-xl">Feature</p>
          <p className="text-xl">Product</p>
          <p className="text-xl">Testimonial</p>
          <p className="text-xl">FAQ</p>
        </div>
        <div className="hidden md:flex gap-2">
          <button className="py-3 px-5 text-green-500">Login</button>
          <button className="rounded-md py-2 px-7 bg-green-500 text-white">
            Signup
          </button>
          <div className="flex justify-center items-center">
            <ThemeSwitch />
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            ☰
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-green-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-2 py-4">
          <div className="flex flex-col items-center gap-4">
            <p className="text-xl">Home</p>
            <p className="text-xl">Service</p>
            <p className="text-xl">Feature</p>
            <p className="text-xl">Product</p>
            <p className="text-xl">Testimonial</p>
            <p className="text-xl">FAQ</p>
            <button className="py-3 px-5 text-green-500">Login</button>
            <button className="rounded-md py-2 px-7 bg-green-500 text-white">
              Signup
            </button>
            <div className="flex justify-center items-center">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
