// import React from 'react'
// import tra from "../Assests/tra.png"
// import Image from 'next/image'
// function TravelPoint() {
//   return (
//     <div className='flex flex-col md:flex-row justify-center items-center overflow-hidden gap-5 my-12'>
//       <div className='w-1/2'>
//         <Image src={tra} alt=''></Image>
//       </div>
//       <div className='w-[445px]'>
//         <h3 className='text-2xl text-pink-500 font-semibold'>
//             TRAVEL POINT
//         </h3>
//         <p className='text-4xl font-bold px-2 mt-3'>
//             We helping you find your dream location
//         </p>
//         <p className='text-gray-500 mt-8'>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa nisi ipsum inventore, libero fugit consequuntur suscipit similique dolorum voluptas sunt aliquid ex aspernatur porro quis. Consequatur ipsam autem officiis.
//         </p>
//         <div className='mt-20 grid grid-cols-2 '>
//         <div className='border-gray-200 border-2 w-[200px] h-[151px] text-center pt-5 rounded-2xl'>
//             <p className='text-orange-500 font-bold text-3xl'>500 +</p>
//             <p className='mt-5'>Holidays package</p>
//         </div>
//         <div className='border-gray-200 border-2 w-[200px] h-[151px] text-center pt-5 rounded-2xl'>
//             <p className='text-orange-500 font-bold text-3xl'>100 +</p>
//             <p className='mt-5'>Luxury Hotails</p>
//         </div>
//         <div className='border-gray-200 mt-5 border-2 w-[200px] h-[151px] text-center pt-5 rounded-2xl'>
//             <p className='text-orange-500 font-bold text-3xl'>7 +</p>
//             <p className='mt-5'>Premium Airlines</p>
//         </div>
//         <div className='border-gray-200 mt-5 border-2 w-[200px] h-[151px] text-center pt-5 rounded-2xl'>
//             <p className='text-orange-500 font-bold text-3xl'>200 +</p>
//             <p className='mt-5'>Happy Customers</p>
//         </div>
//       </div>

//       </div>

//           </div>
//   )
// }

// export default TravelPoint


import React from 'react'
import tra from "../Assests/tra.png"
import Image from 'next/image'

function TravelPoint() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center overflow-hidden gap-10 my-12 px-4 sm:px-6'>
      
      {/* Image Section */}
      <div className='w-full md:w-1/2 flex justify-center'>
        <Image src={tra} alt='Travel' className='w-full max-w-sm md:max-w-md' />
      </div>

      {/* Text & Stats Section */}
      <div className='w-full md:w-1/2 max-w-lg'>
        <h3 className='text-lg sm:text-2xl text-pink-500 font-semibold text-center md:text-left'>
          TRAVEL POINT
        </h3>
        <p className='text-2xl sm:text-4xl font-bold px-2 mt-3 text-center md:text-left'>
          We help you find your dream location
        </p>
        <p className='text-gray-500 mt-6 text-center md:text-left'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa nisi ipsum inventore, libero fugit consequuntur suscipit similique dolorum voluptas sunt aliquid ex aspernatur porro quis.
        </p>

        {/* Statistics Section */}
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center md:place-items-start'>
          {[
            { value: "500 +", text: "Holidays package" },
            { value: "100 +", text: "Luxury Hotels" },
            { value: "7 +", text: "Premium Airlines" },
            { value: "200 +", text: "Happy Customers" },
          ].map((item, index) => (
            <div key={index} className='border-gray-200 border-2 w-[180px] sm:w-[200px] h-[140px] text-center pt-5 rounded-2xl'>
              <p className='text-orange-500 font-bold text-3xl'>{item.value}</p>
              <p className='mt-3 text-sm sm:text-base'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default TravelPoint;
