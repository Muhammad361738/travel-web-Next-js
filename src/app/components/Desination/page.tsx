import React from 'react';
import Image from 'next/image';
import arrow1 from "../../Assests/arrow1.png"
import arrow2 from "../../Assests/arrow2.png"
import card1 from "../../Assests/card1.png"
import star from "../../Assests/star.png"
const Page = () => {
    return (
    <>      
      <div className='flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between mt-10 px-20 flex-wrap  '>
            <div>
                <p className='text-xl font-bold text-customPink'>TOP DESTINATION </p>
                <h3 className='text-4xl font-sans font-bold text-gray-950 mt-2'>Explore top destination</h3>
            </div>
            <div className='flex mt-10 md:mt-0 '>
                <Image className='w-[60px] h-[60px] mt-1' src={arrow1} alt='' ></Image>
                <Image className='w-28 ' src={arrow2} alt='' ></Image>
            </div>
        </div>

             <div className="h-auto w-full flex   flex-wrap gap-5 justify-center items-center text-center ">

         

                     <div className="w-[350px] h-[575] flex overflow-hidden  flex-col  mb-12 bg-white shadow-2xl rounded-xl ">
                         <Image className="w-full h-80" src={card1} alt=''></Image>
                         <div className='flex gap-10'>
                         <div className='text-xl font-bold text-black p-2  mt-4'>Paradise Beach , Bantayan Isalnd</div>
                         <div>
                            <p className='text-customPink text-xl mt-4 font-bold p-2 '>$550.0</p>
                         </div>
                         </div>
                         
                         <p className='text-gray-500 mt-5 flex ml-10 justify-start '>Rome, Itlay</p>
                         <div className='flex justify-start ml-10 mt-3 mb-3 '>
                        <p className='text-customOrange text-xl font-bold'>4.8</p>
                        <Image className='w-6' src={star} alt=''></Image>
                      </div>
                     </div>

                     <div className="w-[350px] h-[575] flex overflow-hidden  flex-col  mb-12 bg-white shadow-2xl rounded-xl ">
                         <Image className="w-full h-80" src={card1} alt=''></Image>
                         <div className='flex gap-10'>
                         <div className='text-xl font-bold text-black p-2  mt-4'>Paradise Beach , Bantayan Isalnd</div>
                         <div>
                            <p className='text-customPink text-xl mt-4 font-bold p-2 '>$550.0</p>
                         </div>
                         </div>
                         
                         <p className='text-gray-500 mt-5 flex ml-10 justify-start '>Rome, Itlay</p>
                         <div className='flex justify-start ml-10 mt-3 mb-3 '>
                        <p className='text-customOrange text-xl font-bold'>4.8</p>
                        <Image className='w-6' src={star} alt=''></Image>
                      </div>
                     </div>



                     <div className="w-[350px] h-[575] flex overflow-hidden  flex-col  mb-12 bg-white shadow-2xl rounded-xl ">
                         <Image className="w-full h-80" src={card1} alt=''></Image>
                         <div className='flex gap-10'>
                         <div className='text-xl font-bold text-black p-2  mt-4'>Paradise Beach , Bantayan Isalnd</div>
                         <div>
                            <p className='text-customPink text-xl mt-4 font-bold p-2 '>$550.0</p>
                         </div>
                         </div>
                         
                         <p className='text-gray-500 mt-5 flex ml-10 '>Rome, Itlay</p>
                         <div className='flex justify-start ml-10 mt-3 mb-3 '>
                        <p className='text-customOrange text-xl font-bold'>4.8</p>
                        <Image className='w-6' src={star} alt=''></Image>
                      </div>
                     </div>

                    
                 </div>

                 </>

    );
}

export default Page;
