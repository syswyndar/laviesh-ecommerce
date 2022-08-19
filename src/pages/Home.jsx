import React from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../assets/Hero-Image.png";
import HeroOrnamentImage from "../assets/Text-Ornament-Hero-Image.png";

const Home = () => {
  return (
    <>
      <div className="h-screen bg-cream overflow-hidden relative">
        <Navbar />
        <div className="lg:py-[1rem] sm:py-[1.5rem] lg:px-[4.375rem] sm:px-[1.2rem] md:px-[2.375rem] lg:w-2/3">
          <h1 className="lg:text-[60px] xl:text-[110px] text-black ">
            Bring out the confidence in you.
          </h1>
          <p className="text-gray poppins font-light lg:text-[14px] xl:text-[24px] lg:w-5/6 xl:w-9/12 lg:my-5">
            Best quality fashion products are available in our website. Never go
            out of the style with our new featured collections. Discover our
            fashion collections and be the best, confident you.
          </p>
          <button className="xl:py-[22px] lg:py-[18px] xl:px-[52px] lg:px-[40px] poppins bg-brown lg:mt-3 xl:mt-8 text-white font-bold lg:text-[14px] xl:text-[20px] rounded">
            Discover Now
          </button>
        </div>

        {/* hero image */}
        <div className="absolute top-0 right-0 opacity-30 lg:w-5/6 md:w-auto lg:h-auto md:h-full">
          <img src={HeroImage} className="w-full" alt="hero-img" />
        </div>
        <div className="absolute bottom-0 left-0 lg:w-1/2 md:w-full lg:px-[4.375rem] sm:px-[1.2rem] md:px-[2.375rem]">
          <img
            src={HeroOrnamentImage}
            className="w-full"
            alt="hero-ornament-img"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
