"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { reviewData } from "@/app/data/data";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
const ReviewSlider = () => {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="md:w-[450px] md:h-[350px] w-[90%] h-[300px]"
      >
        {reviewData.map((review) => {
          return (
            <SwiperSlide key={review.id} className="bg-white rounded-3xl block">
              <div className="w-[80%] mx-auto mt-16">
                {/* review text */}
                <p className="text-xs sm:text-sm md:text-base font-semibold ">
                  {review.review}
                </p>
                <div className="flex items-center mt-4">
                  <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-500" />
                  <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-500" />
                  <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-500" />
                  <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-500" />
                  <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-500" />
                </div>
                <div className="mt-10">
                  <div className="flex items-center space-x-4 ">
                    <Image
                      src={review.image}
                      alt="img"
                      width={60}
                      height={60}
                      className="rounded-full w-10 h-10 md:w-16 md:h-16 object-cover"
                    />
                    <div>
                      <p className="text-sm sm:text-lg font-semibold">
                        {review.name}
                      </p>
                      <p className="text-gray-600 text-xs sm:text-base">
                        {review.profession}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
