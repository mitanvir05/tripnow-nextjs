import { navLinks } from "@/app/constant/constant";
import Link from "next/link";
import React from "react";
import { TbAirBalloon } from "react-icons/tb";

const Nav = () => {
  return (
    <div className="bg-blue-950 transition-all duration-200 h-[12vh] z-[1000]">
      <div className="flex items-center justify-between w-[90%] xl:w-[80%] mx-auto h-full">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 bg-rose-500 rounded-full flex items-center justify-center flex-col">
            <TbAirBalloon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl md:text-2xl text-white font-bold">TripNow</h1>
        </div>
        {/* navlinks */}
        <div className="hidden lg:flex items-center space-x-10 ">
          {navLinks.map((link) => {
            return (
              <Link key={link.id} href={link.url}>
                <p className="relative text-white text-base font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition duration-300 after:origin-right">
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
        {/* btn */}
        <div className="flex items-center space-x-4">
          <button className="md:px-12 md:py-2.5 px-8 py-2 text-black bg-white text-base hover:bg-gray-200 transition-all duration-200 rounded-lg">
            Book Now
          </button>
          {/* Hamburger menu */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
