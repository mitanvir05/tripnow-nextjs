"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };
  return <div className="fixed bottom-4 animate-pulse right-4">
    {isVisible && (
      <button
        onClick={scrollToTop}
        className="bg-rose-700 text-white p-2 rounded-full w-12 h-12 hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center cursor-pointer"
      >
     <FaArrowUp/>
      </button>
    )}
  </div>;
};

export default ScrollToTop;
