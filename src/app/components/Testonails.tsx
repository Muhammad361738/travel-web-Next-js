import Image from 'next/image'
import React from 'react'
import testo from "../Assests/testo.png"
import star1 from "../Assests/star1.png"
import arrow1 from "../Assests/arrow1.png"
import arrow2 from "../Assests/arrow2.png"
function Testonails() {
    return (
        <div className=''>
            <div className='flex justify-between items-center '>
                <Image className='w-[60px] h-[60px] mt-1' src={arrow1} alt='' ></Image>
                <Image className='w-28 ' src={arrow2} alt='' ></Image>
            </div>
        <div className=' flex flex-col justify-center items-center'>

            <div className='text-center'>
                <h3 className='text-pink-500 text-xl font-semibold'>TESTIMONIALS</h3>
            </div>
            <div>
                <h2 className='text-center text-3xl mt-5 font-bold'>
                    Trust our clients
                </h2>
            </div>
            <div className='flex  items-center justify-center mt-16' >
                <Image
                    src={testo}
                    alt=''
                    width={128}
                    height={128} />

            </div>
            <div>
                <h3 className='text-xl font-bold text-orange-600 text-center mt-10'>Mark Smith / <span className='text-black text-[15px]'>Travel Enthusiast</span></h3>

            </div>

            <div className='flex justify-center mt-10 items-center gap-4'>
                <Image src={star1} alt='' width={26} height={26}></Image>
                <Image src={star1} alt='' width={26} height={26}></Image>
                <Image src={star1} alt='' width={26} height={26}></Image>
                <Image src={star1} alt='' width={26} height={26}></Image>
                <Image src={star1} alt='' width={26} height={26}></Image>
            </div>
            <div className='flex flex-row justify-center w-[920px]  text-center  text-gray-600 mt-10'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At voluptatibus blanditiis dolor rerum numquam sequi atque? Laudantium dignissimos in recusandae esse.
            </div>

        </div>
        
        </div>
    )
}

export default Testonails
