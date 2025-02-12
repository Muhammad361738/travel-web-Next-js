

// import Image from 'next/image'
// import React from 'react'
// import testo from "../Assests/testo.png"
// import star1 from "../Assests/star1.png"
// import arrow1 from "../Assests/arrow1.png"
// import arrow2 from "../Assests/arrow2.png"

// function Testonails() {
//     return (
//         <div className='relative flex flex-col items-center  py-10 w-full'>
//             {/* Left Arrow */}
//             <Image 
//                 className='absolute top-1/2 left-10 transform -translate-y-1/2 ' 
//                 src={arrow1} 
//                 alt=''
//                 width={80} 
//                 height={80}
//             />

//             {/* Right Arrow */}
//             <Image 
//                 className='absolute top-1/2 mt-10 right-10 transform -translate-y-1/2 ' 
//                 src={arrow2} 
//                 alt=''
                
//                 width={130} 
//                 height={130} 
//             />

//             {/* Testimonials Content */}
//             <div className='flex flex-col justify-center items-center text-center'>
//                 <h3 className='text-pink-500 text-xl font-semibold'>TESTIMONIALS</h3>
//                 <h2 className='text-3xl mt-5 font-bold'>Trust our clients</h2>
//                 <div className='mt-16'>
//                     <Image src={testo} alt='' width={128} height={128} />
//                 </div>
//                 <h3 className='text-xl font-bold text-orange-600 mt-10'>
//                     Mark Smith / <span className='text-black text-[15px]'>Travel Enthusiast</span>
//                 </h3>
//                 <div className='flex justify-center mt-10 gap-4'>
//                     {[...Array(5)].map((_, i) => (
//                         <Image key={i} src={star1} alt='' width={26} height={26} />
//                     ))}
//                 </div>
//                 <div className='w-[920px] text-gray-600 mt-10'>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. At voluptatibus blanditiis dolor rerum numquam sequi atque? Laudantium dignissimos in recusandae esse.
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Testonails;


import Image from 'next/image'
import React from 'react'
import testo from "../Assests/testo.png"
import star1 from "../Assests/star1.png"
import arrow1 from "../Assests/arrow1.png"
import arrow2 from "../Assests/arrow2.png"

function Testonails() {
    return (
        <div className='relative flex flex-col items-center py-10 w-full px-4'>
            {/* Left Arrow */}
            <Image 
                className='absolute top-1/2 left-4 md:left-10 transform -translate-y-1/2 ' 
                src={arrow1} 
                alt=''
                width={80}
                height={80}
            />

            {/* Right Arrow */}
            <Image 
                className='absolute top-1/2 right-4 md:right-10 transform -translate-y-1/2 mt-14' 
                src={arrow2} 
                alt=''
                width={150}
                height={150}
            />

            {/* Testimonials Content */}
            <div className='flex flex-col justify-center items-center text-center max-w-lg md:max-w-2xl'>
                <h3 className='text-pink-500 text-lg md:text-xl font-semibold'>TESTIMONIALS</h3>
                <h2 className='text-2xl md:text-3xl mt-5 font-bold'>Trust our clients</h2>
                <div className='mt-10 md:mt-16'>
                    <Image src={testo} alt='' width={100} height={100} className='w-[100px] md:w-[128px]' />
                </div>
                <h3 className='text-lg md:text-xl font-bold text-orange-600 mt-6 md:mt-10'>
                    Mark Smith / <span className='text-black text-sm md:text-[15px]'>Travel Enthusiast</span>
                </h3>
                <div className='flex justify-center mt-6 md:mt-10 gap-2 md:gap-4'>
                    {[...Array(5)].map((_, i) => (
                        <Image key={i} src={star1} alt='' width={20} height={20} className='w-[20px] md:w-[26px]' />
                    ))}
                </div>
                <div className='text-gray-600 mt-6 md:mt-10 max-w-[90%] md:max-w-2xl'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At voluptatibus blanditiis dolor rerum numquam sequi atque? Laudantium dignissimos in recusandae esse.
                </div>
            </div>
        </div>
    )
}

export default Testonails;
