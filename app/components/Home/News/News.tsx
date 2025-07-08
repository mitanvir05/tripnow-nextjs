import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className="pt-16 pb-16">
      {/* secxtion heading */}
      <SectionHeading
        heading="Latest News"
        subHeading="Stay updated with the latest news and updates from our community."
      />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
        <div
          data-aos="fade-up"
          data-aos-placement="top-center "
          data-aos-delay="300"
        >
          <NewsCard
            image="/images/n1.jpg"
            title="Discover the Great Barrier Reef: A Guide for 2025"
            date="November 5, 2024"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-placement="top-center "
          data-aos-delay="300"
        >
          <NewsCard
            image="/images/n2.jpg"
            title="Sydney's Icons: Must-See Sights for Your Next Trip"
            date="December 18, 2024"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-placement="top-center "
          data-aos-delay="300"
        >
          <NewsCard
            image="/images/n3.jpg"
            title="Uluru & The Red Centre: Experiencing Australia's Heart"
            date="January 22, 2025"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-placement="top-center "
          data-aos-delay="300"
        >
          <NewsCard
            image="/images/n4.jpg"
            title="Melbourne's Hidden Gems: Exploring Its Vibrant Laneways"
            date="February 14, 2025"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
