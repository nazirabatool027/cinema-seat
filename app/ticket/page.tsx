// app/tickets/page.tsx

"use client";

import Image from "next/image";
import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import SeatSelector from "../../components/SeatSelector"; // Path adjust kar lena

// ---------------- Sub Header ----------------
const TicketsSubHeader = () => (
  <div className="flex flex-col md:flex-row md:items-center md:justify-between px-5 py-5 bg-white -mt-8 gap-4">
    
    <h1 className="text-2xl font-bold text-[#F59630]">Tickets</h1>

    {/* Search + Filter */}
    <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
      
      {/* Search Bar */}
      <div className="relative w-full sm:w-64">
        <input
          type="text"
          placeholder="Search"
          className="border border-[#D0D6DE] rounded-lg py-2 pl-10 pr-4 w-full text-gray-800"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
      </div>

      {/* Filter Button */}
      <button className="flex items-center px-4 py-2 border border-[#D0D6DE] rounded-lg text-gray-600 hover:bg-gray-50 w-full sm:w-auto justify-center">
        <FaFilter className="mr-2" /> Filter
      </button>
    </div>
  </div>
);

// ---------------- Main Page ----------------
export default function TicketsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Header */}
      <TicketsSubHeader />

      {/* 2. Content */}
      <div className="p-4 lg:p-6 flex flex-col lg:flex-row gap-6 bg-white w-full">

        {/* LEFT CARD (Sidebar) */}
        <div className="w-full lg:w-[320px] bg-white shadow-xl rounded-2xl border border-[#D0D6DE] p-6 flex flex-col gap-4">

          {/* Select Guest */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Select Guest</label>
            <select className="w-full border border-[#D0D6DE] rounded-2xl p-3 text-gray-700">
              <option>Cody Fisher</option>
            </select>
          </div>

          {/* Select Event */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Select Event</label>
            <select className="w-full border border-[#D0D6DE] rounded-2xl p-3 text-gray-700">
              <option>Football Championships</option>
            </select>
          </div>

          {/* Event Card */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/413360cc9e706a5f104dd2a034d476f909c3aeb8.jpg"
              width={380}
              height={100}
              alt="Event Image"
              className="w-full h-[150px] object-cover"
            />

            <div className="p-4 flex items-center gap-4">
              <div className="text-center">
                <p className="text-xl font-bold text-orange-500">June</p>
                <p className="text-3xl font-bold text-orange-500">17</p>
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-lg leading-tight">
                  FOOTBALL CHAMPIONSHIPS
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  We’ll get you directly excited and inside for you to enjoy the show.
                </p>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="pt-4">
            <h3 className="font-bold text-md mb-2">About the Championship</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              "Welcome to the Football Championship! An unforgettable experience awaits!"
            </p>
          </div>

          {/* Sponsors & Location */}
          <div>
            <h3 className="font-bold text-md mb-2">Sponsors</h3>
            <div className="h-8 bg-gray-100 rounded flex items-center px-2 mb-4 text-sm text-gray-500">
              Sponsor Logos Here
            </div>

            <h3 className="font-bold text-md mb-2">Location</h3>
            <p className="text-sm text-gray-600">Wembley Stadium — London, England</p>
          </div>
        </div>

        {/* RIGHT SIDE (Seat Selector) */}
        <div className="flex-1 bg-white rounded-2xl shadow-xl p-4 border border-[#D0D6DE]">
          <h2 className="text-xl font-semibold">Select Your Seats</h2>
          <p className="text-sm text-gray-500 mb-6">Choose your perfect seat!</p>

          <SeatSelector />
        </div>
      </div>
    </div>
  );
}
