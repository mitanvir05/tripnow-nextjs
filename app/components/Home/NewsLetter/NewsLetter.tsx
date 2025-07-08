import React from "react";
import { BsEnvelope } from "react-icons/bs";

const NewsLetter = () => {
  return (
    <div className="bg-black pt-5 py-15 flex items-center w-full flex-col">
      <BsEnvelope className="w-16 h-16 mt-20 text-white" />
      <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold mt-10  tracking-widest ">
        Your Travel Journey Satrts Here
      </h1>
      <p className="mt-3 text-white text-xs sm:text-sm">
        Subscribe Us and We Will Send the Best Deals to You
      </p>
      {/* subscription */}
      <div className="w-full">
        <input
          type="text"
          className="px-6 py-3.5 bg-white mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none"
          placeholder="Enter Your Email"
        />
        <button className="px-6 py-3.5 text-white bg-blue-800 hover:bg-blue-950 transition-all duration-200 mt-3 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
