"use client"
import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import logo from "../../Assests/logo.png"

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-white max-w-[1200px] w-full z-10 mx-auto h-16 mt-5 text-center text-black">
        <div className="flex justify-between items-center">
          <div className=" text-lg md:text-xl px-8 font-serif lg:px-24 md:px-16 sm:px-12  pt-2 ">
            <Image className='w-28 lg:w-36 lg:h-10 ' src={logo} alt=''></Image>
          </div>

          {/* Desktop Menu */}
          <div className="hidden pt-2 md:block w-[428px] text-sm ">
            <ul className="outline-none flex  lg:gap-[50px] md:gap-[20px] ">
            <li><Link className='font-bold' href="/ProductInfo">Home</Link></li>
              <li><Link href="/ProductInfo">Discover</Link></li>
              <li><Link href="/Contact">Special Deals</Link></li>
              <li><Link href="/Contact">Contact</Link></li>

            </ul>
          </div>
          <div className='hidden pt-2 md:block pr-8 text-xs'>
            <ul className='outline-none flex gap-2 '>
                <li className='pt-2'>Log In</li>
                <li className='bg-customPurple  w-16  lg:w-28 p-2 rounded-2xl text-white'>Sign Up </li>
            </ul>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="block md:hidden ">
            <button onClick={toggleMenu} className="text-4xl text-black p-3">&#8801;</button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center">
          <button onClick={toggleMenu} className="absolute top-5 right-5 text-4xl text-black">&#10006;</button>
          <ul className=" text-black text-2xl space-y-6">
            <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/ProductInfo" onClick={toggleMenu}>Discover</Link></li>
            <li><Link href="/Contact" onClick={toggleMenu}>Special Deals</Link></li>
            <li><Link href="/MultipleAcc" onClick={toggleMenu}>Contact</Link></li>

            <li><Link href="" onClick={toggleMenu}>Log In</Link></li>
            <li><Link className='bg-customPurple  p-3 rounded-2xl  text-white' href="" onClick={toggleMenu}>Sign Up</Link></li>
          </ul>   
        </div>
        
      )}
    </div>
  );
};

export default Page;