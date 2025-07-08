import Image from "next/image";
import React from "react";
type Props = {
  image: string;
  title: string;
  date: string;
};
const NewsCard = ({ image, title, date }: Props) => {
  return (
    <div>
      <div className="h-[300px]">
        <Image
          src={image}
          alt="image"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg "
        />
      </div>
      <h1 className="mt-6 text-lg text-gray-900 font-semibold hover:text-blue-500 transition-all duration-300 cursor-pointer">
        {title}
      </h1>
      <p className="mt-3 text-sm text-gray-600">{date}</p>
    </div>
  );
};

export default NewsCard;
