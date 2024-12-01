import React from 'react';
import group1 from "../../Assests/group1.png"
import group2 from "../../Assests/group2.png"
import group3 from "../../Assests/group3.png"
import group4 from "../../Assests/group4.png"
import group5 from "../../Assests/group5.png"
import Image from 'next/image';
const Page = () => {
    return (
        <div className='flex justify-center items-center flex-wrap gap-20 mt-10'>
            <Image className='w-40' src={group1} alt=''></Image>
            <Image className='w-40' src={group2} alt=''></Image>
            <Image className='w-40' src={group3} alt=''></Image>
            <Image className='w-40' src={group4} alt=''></Image>
            <Image className='w-40' src={group5} alt=''></Image>
        </div>
    );
}

export default Page;
