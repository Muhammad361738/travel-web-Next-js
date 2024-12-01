import React from "react";
import Image from "next/image";
import icon1 from "../../Assests/icon1.png";
import home from "../../Assests/home.png";

const Page = () => {
  return (
    <div className="pt-20 flex flex-col md:flex-row max-w-[1200px] overflow-hidden justify-center items-center gap-10 md:gap-16 px-4 md:px-8 mx-auto">
      {/* Text and Buttons Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
        {/* Explore Button */}
        <button className="text-customPink bg-gray-100 px-6 py-2 text-xs font-bold rounded-3xl shadow-sm">
          Explore The World
        </button>

        {/* Heading Section */}
        <div className="pt-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
            Travel <span className="text-customPink">top</span>
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-customPink">
            destination
          </h2>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold">
            of the world
          </h2>
        </div>

        {/* Description */}
        <p className="pt-8 text-sm sm:text-lg text-gray-500 max-w-[400px]">
          We always make our customers happy by providing as many choices as
          possible.
        </p>

        {/* Buttons Section */}
        <div className="flex gap-4 pt-8">
          <button className="bg-customPurple h-12 px-6 text-white text-xs rounded-3xl">
            Get Started
          </button>
          <div className="flex items-center border-2 rounded-3xl overflow-hidden">
            <Image src={icon1} alt="Demo Icon" width={40} height={40} />
            <button className="bg-white text-xs px-4 py-2 rounded-2xl text-black">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full flex justify-center">
        <Image
          src={home}
          alt="Home Image"
          className="w-full max-w-md sm:max-w-lg lg:max-w-xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
    </div>
  );
};

export default Page;
