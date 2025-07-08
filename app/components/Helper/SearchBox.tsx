import React from "react";
import { FaMap } from "react-icons/fa";
import { FaCalendarWeek, FaUserGroup } from "react-icons/fa6";

const SearchBox = () => {
  return (
    <div className="bg-white rounded-lg p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-6 mt-6 sm:mt-12 w-[95%] sm:w-[80%] mx-auto">
      {/* 1st search input */}
      <div className="flex items-center space-x-4 w-full">
        <FaMap className="w-5 h-5 text-blue-600 shrink-0" />
        <div className="w-full">
          <p className="text-base font-medium mb-1 text-start">Location</p>
          <input
            type="text"
            placeholder="Where are you going ?"
            className="w-full outline-none border-none focus:border-blue-600 bg-transparent placeholder:text-gray-600"
          />
        </div>
      </div>
      {/* 2nd search input */}
      <div className="flex items-center space-x-6">
        <FaCalendarWeek className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-base font-medium mb-1 text-start">Start Date</p>
          <input type="date" className="outline-none border-none" />
        </div>
      </div>
      {/* 3rd search input */}
      <div className="flex items-center space-x-6">
        <FaCalendarWeek className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-base font-medium mb-1 text-start">End Date</p>
          <input type="date" className="outline-none border-none" />
        </div>
      </div>
      {/* 4trh search */}
      <div className="flex items-center space-x-6">
        <FaUserGroup className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-base font-medium mb-1 text-start">Guest</p>
          <p className="text-base font-normal">1 Guest , 1 Room</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
