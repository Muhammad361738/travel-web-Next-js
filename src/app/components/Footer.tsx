// import React from 'react'
// import Image from 'next/image'
// import logo from "../Assests/logo.png"
// import { FaFacebook, FaTwitter, FaCamera } from "react-icons/fa";

// function Footer() {
//     return (
//         <div className='flex flex-col  sm:flex-row flex-wrap justify-center  sm:gap-10 px-32 md:justify-between  mb-20'>
//             <div className=''>
//                 <Image src={logo}
//                     alt=""
//                     width={100}
//                     height={100} />
//                 <div className='w-40 mt-5'>
//                     <p className='text-gray-500 py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, autem molestias. Vel, autem molestias.</p>
//                 </div>
//                 <div className="flex gap-4 my-8 text-blue-900 text-xl">
//                     <FaFacebook />
//                     <FaTwitter />
//                     <FaCamera />
//                 </div>

//             </div>
//             <div>
//                 <h2 className='font-bold'>Company</h2>
//                 <p className='text-gray-500 mt-5 '>About</p>
//                 <p className='text-gray-500 mt-5'>Career</p>
//                 <p className='text-gray-500 mt-5'>Mobile</p>
//             </div>
//             <div>
//                 <h2 className='font-bold'>Contact</h2>
//                 <p className='text-gray-500 mt-5 '>Why TRavlog ?</p>
//                 <p className='text-gray-500 mt-5'>Partner with us</p>
//                 <p className='text-gray-500 mt-5'>FAQ</p>
//                 <p className='text-gray-500 mt-5'>Blog</p>

//             </div>
//             <div>
//                 <h2 className='font-bold'>Meet Us </h2>
//                 <p className='text-gray-500 mt-5 '>+0092 123456789</p>
//                 <p className='text-gray-500 mt-5'>info@travel.com</p>
//                 <p className='text-gray-500 mt-5'>205 R street , New York BD23200</p>

//             </div>
//         </div>
//     )
// }

// export default Footer

import React from 'react';
import Image from 'next/image';
import logo from "../Assests/logo.png";
import { FaFacebook, FaTwitter, FaCamera } from "react-icons/fa";

function Footer() {
    return (
        <div className="bg-gray-100 px-6 md:px-12 lg:px-24 py-10 ">
            <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between space-y-10 md:space-y-0">
                {/* Left Section - Logo & Description */}
                <div className="text-center md:text-left flex flex-col items-center md:items-start">
                    <Image src={logo} alt="Logo" width={100} height={100} />
                    <p className="text-gray-500 mt-3 max-w-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, autem molestias.
                    </p>
                    {/* Social Icons */}
                    <div className="flex gap-4 my-4 text-blue-900 text-2xl">
                        <FaFacebook className="hover:text-blue-700 transition duration-200" />
                        <FaTwitter className="hover:text-blue-500 transition duration-200" />
                        <FaCamera className="hover:text-gray-600 transition duration-200" />
                    </div>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
                    {/* Company */}
                    <div>
                        <h2 className="font-bold text-lg">Company</h2>
                        <p className="mt-3 text-gray-500">About</p>
                        <p className="mt-3 text-gray-500">Career</p>
                        <p className="mt-3 text-gray-500">Mobile</p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h2 className="font-bold text-lg">Contact</h2>
                        <p className="mt-3 text-gray-500">Why Travlog?</p>
                        <p className="mt-3 text-gray-500">Partner with us</p>
                        <p className="mt-3 text-gray-500">FAQ</p>
                        <p className="mt-3 text-gray-500">Blog</p>
                    </div>

                    {/* Meet Us */}
                    <div>
                        <h2 className="font-bold text-lg">Meet Us</h2>
                        <p className="mt-3 text-gray-500">+0092 123456789</p>
                        <p className="mt-3 text-gray-500">info@travel.com</p>
                        <p className="mt-3 text-gray-500">205 R Street, New York BD23200</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
