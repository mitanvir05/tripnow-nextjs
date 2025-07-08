import React from "react";
import { FaStar } from "react-icons/fa";
import ReviewSlider from "./ReviewSlider";

const Review = () => {
  return (
    <div className="pt-20 pb-20 flex items-center justify-center flex-col bg-blue-800">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
        {/* text */}
        <div>
          <h1 className="text-2xl font-semibold text-white">
            What our customer says ?
          </h1>
          <p className="mt-6 text-gray-100">
            Book your perfect trip in just a few clicks! Our streamlined process
            makes planning your adventure effortless.
          </p>
          {/* rating */}
          <div className="mt-6 flex items-center space-x-6">
            <div>
              <p className="text-2xl font-bold text-white">4.89</p>
              <p className="text-white mb-2">Overall Rating</p>
              <div className="flex items-center">
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
              </div>
            </div>
          </div>
        </div>
        {/* slider */}
        <div className="overflow-hidden">
          <ReviewSlider/>
        </div>
      </div>
    </div>
  );
};

export default Review;
