import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-24">
      {/* section heading */}
      <SectionHeading
        heading="Why Choose Us"
        subHeading="We are the best in this sector"
      />
      <div className="grid w-[80%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-26 items-center mt-20 mx-auto">
        {/* whychoose */}
        <div
          data-aos="fade-up"
          data-aos-placement="top-center"
          data-aos-delay="100"
        >
          <WhyChooseCard
            image="/images/c1.svg"
            title="Best Price Guarantee"
            subTitle="We assure you the best prices available. If you find a lower price elsewhere, we'll match it or beat it."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-placement="top-center "
          data-aos-delay="200"
        >
          <WhyChooseCard
            image="/images/c2.svg"
            title="Easy & Quick Booking"
            subTitle="Book your perfect trip in just a few clicks! Our streamlined process makes planning your adventure effortless."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-placement="top-center "
          data-aos-delay="300"
        >
          <WhyChooseCard
            image="/images/c3.svg"
            title="24/7 Customer Care"
            subTitle="Our dedicated support team is available around the clock to assist you with any questions or concerns."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
