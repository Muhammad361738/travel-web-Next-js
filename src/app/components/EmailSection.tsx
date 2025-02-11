import React from 'react'

function EmailSection() {
  return (
    <div className='bg-pink-200 mx-28 items-center w-[1110px] text-center px-20 '>
      <div>
        <h3 className='font-semibold text-xl text-pink-400 text-center'>SUBSCRIBE TO OUR NEWSLETTERS</h3>
        </div>





      <div >
        <h3 className='font-bold px-10 max-w-[928px] h-[132px] text-[45px]  '>
          Prepare Yourself & lets explore the beauty of the world
        </h3>
      </div>
      <div className='flex gap-4 items-center h-[96px] max-w-[928px] '>
        <div>
          <input placeholder='Email' type="email" name="" id="" className='h-96px w-[683px] rounded-lg p-8 ' />
        </div>
        <div>
        <button className="bg-customPurple w-[235px] h-[96px] px-6 text-white text-xs rounded-3xl">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmailSection
