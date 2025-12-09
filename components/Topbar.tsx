"use client";

import React from "react";
// Import next.js dependencies
import Image from "next/image";
// Import icons
import { FaSearch } from "react-icons/fa";
import { MdOutlineNotificationsNone } from "react-icons/md"; // Using a different icon for flat design
import { IoSettingsOutline } from "react-icons/io5"; // Using a setting icon as shown in the image structure

export default function Topbar() {
  return (
    // Header container: Minimal shadow, fixed height
    <header className="bg-white dark:bg-gray-900 h-20 flex items-center justify-between px-8  dark:border-gray-800">
      
      {/* ⬅️ LEFT: Primary Search Bar (Takes up most space - flex-1) */}
      <div className="flex items-center flex-1 h-12 relative border border-[#D0D6DE] rounded-2xl ">
       
        
        <input
          type="text"
          placeholder="Search"
          // Styling the input to look like the image: full width, large radius, light background
          className="w-full h-full  bg-white dark:bg-gray-800 border-none rounded-2xl px-12 text-lg outline-none 
                     text-gray-700 dark:text-gray-200 placeholder-gray-500 transition focus:ring-2 focus:ring-blue-500"
        />
         <FaSearch className="absolute left-4 text-gray-700 text-lg " />
      </div>

      {/* ➡️ RIGHT: Icons and Avatar (Fixed space) */}
      <div className="flex items-center space-x-4 ml-8">
        
        {/* Notification Icon Button (Circle button style) */}
        <button className="w-12 h-12 rounded-2xl border border-[#D0D6DE] flex items-center justify-center bg-white dark:bg-gray-800 
                           text-gray-600 dark:text-gray-300 transition hover:bg-gray-100 dark:hover:bg-gray-700">
            {/* The image shows a bell icon, using MdOutlineNotificationsNone for cleaner look */}
            <MdOutlineNotificationsNone className="text-2xl" /> 
        </button>

        {/* Settings/Search Icon Button (Circle button style) */}
        {/* Note: The image has a second icon, often used for Settings or another search/filter */}
        <button className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white border border-[#D0D6DE] dark:bg-gray-800 
                           text-gray-600 dark:text-gray-300 transition hover:bg-gray-100 dark:hover:bg-gray-700">
            <IoSettingsOutline className="text-xl" /> 
        </button>

        {/* User Avatar */}
        <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-gray-300 dark:border-gray-700 cursor-pointer transition hover:shadow-lg">
          <Image
            src="/img_1676727756292 (2).jpg" // Place avatar in /public folder
            alt="User Avatar"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
}