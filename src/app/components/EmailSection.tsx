// import React from 'react'

// function EmailSection() {
//   return (
//     <div className='bg-pink-100 rounded-lg mx-28 my-10 items-center h-[608px]  w-[1110px] text-center px-20 '>
//       <div>
//         <h3 className='font-semibold text-xl pt-28 text-pink-400 text-center'>SUBSCRIBE TO OUR NEWSLETTERS</h3>
//       </div>
//       <div >
//         <h3 className='font-bold  mt-12 px-10 max-w-[928px] h-[132px] text-[45px]  '>
//           Prepare Yourself & lets explore the beauty of the world
//         </h3>
//       </div>
//       <div className='flex gap-8 items-center mt-16 h-[96px] max-w-[928px] '>
//         <div>
//           <input placeholder='Email' type="email" name="" id="" className='h-96px w-[620px] rounded-lg p-6 ' />
//         </div>
//         <div>
//           <button className="bg-customPurple w-[235px] h-[80px] px-6 text-white font-bold text-xl rounded-3xl">
//             Subscribe
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default EmailSection

import React from 'react';

function EmailSection() {
  return (
    <div className="bg-pink-100 rounded-lg mx-5 sm:mx-10 lg:mx-28 my-10 flex flex-col items-center text-center px-5 sm:px-10 lg:px-20 py-16">
      {/* Heading */}
      <h3 className="font-semibold text-lg sm:text-xl text-pink-400">
        SUBSCRIBE TO OUR NEWSLETTERS
      </h3>

      {/* Main Text */}
      <h3 className="font-bold mt-6 sm:mt-12 text-2xl sm:text-4xl lg:text-[45px] max-w-2xl sm:max-w-3xl lg:max-w-[928px] leading-snug">
        Prepare Yourself & let's explore the beauty of the world
      </h3>

      {/* Email Input + Button */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center mt-10 sm:mt-16 w-full max-w-xl sm:max-w-3xl">
        <input
          placeholder="Email"
          type="email"
          className="h-[60px] w-full sm:w-[400px] lg:w-[620px] rounded-lg p-4 border border-gray-300 focus:outline-none"
        />
        <button className="bg-customPurple w-full sm:w-[200px] lg:w-[235px] h-[60px] text-white font-bold text-lg sm:text-xl rounded-3xl">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default EmailSection;
