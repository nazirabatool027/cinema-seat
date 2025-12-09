"use client";

import React from "react";
import Image from "next/image";
import { FaSearch, FaFilter } from "react-icons/fa";

// ---------------- Sub Header ----------------
const EventsSubHeader = () => (
  <div className="flex flex-col md:flex-row md:items-center md:justify-between px-5 py-5 bg-white -mt-8 gap-4">

    <h1 className="text-2xl font-bold text-[#F59630]">Events</h1>

    {/* Search + Filter */}
    <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">

      {/* Search Bar */}
      <div className="relative w-full sm:w-64">
        <input
          type="text"
          placeholder="Search Events"
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
const Events = () => {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Header */}
      <EventsSubHeader />

      {/* 2. Content */}
      <div className="p-4 lg:p-6 bg-white">

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Event Card 1 */}
          <div className="border border-gray-200 rounded-2xl shadow-lg overflow-hidden bg-white">
            <Image
              src="/413360cc9e706a5f104dd2a034d476f909c3aeb8.jpg"
              width={400}
              height={160}
              alt="Event"
              className="w-full h-[160px] object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">Football Championships</h3>
              <p className="text-gray-500 text-sm mt-1">
                June 17 — Wembley Stadium
              </p>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="border border-gray-200 rounded-2xl shadow-lg overflow-hidden bg-white">
            <Image
              src="/event2.jpg"
              width={400}
              height={160}
              alt="Event"
              className="w-full h-[160px] object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">Basketball Tournament</h3>
              <p className="text-gray-500 text-sm mt-1">
                August 12 — LA Arena
              </p>
            </div>
          </div>

          {/* Event Card 3 */}
          <div className="border border-gray-200 rounded-2xl shadow-lg overflow-hidden bg-white">
            <Image
              src="/event3.jpg"
              width={400}
              height={160}
              alt="Event"
              className="w-full h-[160px] object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">Music Festival</h3>
              <p className="text-gray-500 text-sm mt-1">
                October 4 — Central Park
              </p>
            </div>
          </div>

          {/* Event Card 4 */}
          <div className="border border-gray-200 rounded-2xl shadow-lg overflow-hidden bg-white">
            <Image
              src="/event4.jpg"
              width={400}
              height={160}
              alt="Event"
              className="w-full h-[160px] object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">Cricket Premier League</h3>
              <p className="text-gray-500 text-sm mt-1">
                November 22 — Dubai Stadium
              </p>
            </div>
          </div>

          {/* Event Card 5 */}
          <div className="border border-gray-200 rounded-2xl shadow-lg overflow-hidden bg-white">
            <Image
              src="/event5.jpg"
              width={400}
              height={160}
              alt="Event"
              className="w-full h-[160px] object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">Tech Conference 2025</h3>
              <p className="text-gray-500 text-sm mt-1">
                March 11 — San Francisco
              </p>
            </div>
          </div>

          {/* Event Card 6 */}
          <div className="border border-gray-200 rounded-2xl shadow-lg overflow-hidden bg-white">
            <Image
              src="/event6.jpg"
              width={400}
              height={160}
              alt="Event"
              className="w-full h-[160px] object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">Award Ceremony</h3>
              <p className="text-gray-500 text-sm mt-1">
                December 2 — London Hall
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Events;

