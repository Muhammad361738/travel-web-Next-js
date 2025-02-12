// import React from 'react'
// import Image from 'next/image'
// import loc from "../Assests/loc.png"
// import cal1 from "../Assests/cal1.png"
// import dis1 from "../Assests/dis1.png"
// import first from "../Assests/first.png"
// import second from "../Assests/second.png"
// function KeyFeatuers() {
//     return (
//         <div className='px-28 flex gap-10 my-10'>
//             <div>
//             <div className='w-[540px]'>
//                 <p className='text-pink-500 text-2xl font-semibold'>KEY FEATUERS</p>
//                 <p className='text-3xl font-bold mt-2'>We Offers Best Services </p>
//                 <p className='text-gray-600 text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iusto animi laborum vero consectetur quibusdam incidunt assumenda laudantium ut magnam sint et tempora, fuga necessitatibus odio doloribus rerum iure? Voluptatum.</p>
//             </div>

//             <div className='flex gap-8 mt-10 px-5'>
//                 <div><Image src={loc} alt=""
//                     width={70}
//                     height={70}
//                     className='' />
//                 </div>
//                 <div>
//                     <h3 className='text-xl font-semibold'>We offers Best Services</h3>
//                     <p className='text-xs text-gray-500 mt-2'>Lorem Ipmsam is not simply Text</p>
//                 </div>

//             </div>

//             <div className='flex gap-8 mt-10 px-5'>
//                 <div><Image src={cal1} alt=""
//                     width={70}
//                     height={70}
//                     className='' />
//                 </div>
//                 <div>
//                     <h3 className='text-xl font-semibold'>We offers Best Services</h3>
//                     <p className='text-xs text-gray-500 mt-2'>Lorem Ipmsam is not simply Text</p>
//                 </div>

//             </div>


//             <div className='flex gap-8 mt-10 px-5'>
//                 <div><Image src={dis1} alt=""
//                     width={70}
//                     height={70}
//                     className='' />
//                 </div>
//                 <div>
//                     <h3 className='text-xl font-semibold'>We offers Best Services</h3>
//                     <p className='text-xs text-gray-500 mt-2'>Lorem Ipmsam is not simply Text</p>
//                 </div>

//             </div>
//             </div>
//             <div className='h-[700px] relative mt-20'>
//                 {/* First Image */}
//                 <div className='relative h-[665px] rounded-3xl overflow-hidden'>
//                     <Image
//                         className='h-[665px] w-[433px] object-cover rounded-t-full rounded-b-full'
//                         src={first}
//                         alt=''
//                     />
//                 </div>

//                 {/* Second Image Overlay */}
//                 <div className='absolute top-40 left-40  w-full h-full flex items-center'>
//                     <Image
//                         className='h-[496px] w-[391px] '
//                         src={second}
//                         alt=''
//                     />
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default KeyFeatuers

import React from 'react';
import Image from 'next/image';
import loc from "../Assests/loc.png";
import cal1 from "../Assests/cal1.png";
import dis1 from "../Assests/dis1.png";
import first from "../Assests/first.png";
import second from "../Assests/second.png";

function KeyFeatuers() {
    return (
        <div className='flex flex-col md:flex-row gap-10 my-10 px-5 sm:px-10 md:px-28 items-center'>
            
            {/* Left Section (Text & Features) */}
            <div className='max-w-xl text-center md:text-left'>
                <p className='text-pink-500 text-xl sm:text-2xl font-semibold'>KEY FEATURES</p>
                <p className='text-2xl sm:text-3xl font-bold mt-2'>We Offer the Best Services</p>
                <p className='text-gray-600 text-sm mt-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iusto animi laborum vero consectetur quibusdam incidunt assumenda laudantium ut magnam.
                </p>

                {/* Features Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8'>
                    {[
                        { img: loc, title: "Best Locations", desc: "Lorem Ipsum is not simply text" },
                        { img: cal1, title: "Easy Booking", desc: "Lorem Ipsum is not simply text" },
                        { img: dis1, title: "Great Discounts", desc: "Lorem Ipsum is not simply text" }
                    ].map((feature, index) => (
                        <div key={index} className='flex items-center gap-4'>
                            <Image src={feature.img} alt="" width={60} height={60} className='w-[50px] sm:w-[60px]' />
                            <div>
                                <h3 className='text-lg sm:text-xl font-semibold'>{feature.title}</h3>
                                <p className='text-xs text-gray-500 mt-1'>{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Section (Images) */}
            <div className='relative w-full max-w-sm md:max-w-md lg:max-w-lg h-[500px] sm:h-[600px] md:h-[700px] mt-10 md:mt-0'>
                
                {/* First Image (Background) */}
                <div className='absolute w-full h-full rounded-3xl overflow-hidden'>
                    <Image
                        src={first}
                        alt=''
                        layout='fill'
                        objectFit='cover'
                        className='rounded-t-full rounded-b-full'
                    />
                </div>

                {/* Second Image (Overlay) */}
                <div className='absolute top-1/4 left-1/4 w-[70%] h-[70%] flex items-center'>
                    <Image
                        src={second}
                        alt=''
                        layout='intrinsic'
                        width={300}
                        height={400}
                        className='w-auto h-auto'
                    />
                </div>
            </div>

        </div>
    );
}

export default KeyFeatuers;
