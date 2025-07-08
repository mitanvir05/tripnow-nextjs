import React from "react";
import SearchBox from "../../Helper/SearchBox";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh] overflow-hidden">
      {/* Background video */}
      <video
        src="/images/hero1.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-full h-full object-cover z-0"
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70 z-[10]"></div>

      {/* Text & Search */}
      <div className="absolute inset-0 z-[100] flex flex-col justify-center items-center px-4 text-center">
        <div data-aos="fade-up">
          <h1 className="uppercase text-white font-bold text-[25px] md:text-[35px] lg:text-[45px] tracking-[0.7rem]">
            Let’s Explore the World
          </h1>
          <p className="text-lg md:text-base text-white font-normal tracking-wide mt-2">
            Get the best price on over 20k+ properties
          </p>
        </div>
        {/* Search bar */}
        <SearchBox />
        <Link
          href="#"
          className="rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group bg-rose-600 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative font-bold">Search</span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
