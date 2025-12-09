"use client";

import Image from "next/image";
import React from "react";
import { FaSearch, FaUser, FaTicketAlt } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";

// ---------------- Sub Header ----------------
const GuestsSubHeader = () => (
  <div className="flex flex-col md:flex-row md:items-center md:justify-between px-5 py-5 bg-white -mt-8 gap-4">
    
    <h1 className="text-2xl font-bold text-[#F59630]">Guests</h1>

    {/* Search + Filter */}
    <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">

      {/* Search Bar */}
      <div className="relative w-full sm:w-64">
        <input
          type="text"
          placeholder="Search Guest"
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
export default function GuestsPage() {
  return (
    <div className="flex flex-col w-full">
      
      {/* HEADER */}
      <GuestsSubHeader />

      {/* CONTENT */}
      <div className="p-4 lg:p-6 grid lg:grid-cols-3 gap-6 bg-white w-full">

        {/* LEFT SIDEBAR */}
        <div className="bg-white shadow-xl rounded-2xl border border-[#D0D6DE] p-6 flex flex-col gap-6">

          {/* Profile */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/avatar.png"
              width={90}
              height={90}
              alt="Profile"
              className="rounded-full border border-gray-300"
            />
            <h3 className="font-bold text-xl mt-3">Cody Fisher</h3>
            <p className="text-sm text-gray-600">VIP Guest</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 pt-3">
            
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
              <FaTicketAlt className="text-[#F59630] mx-auto text-xl" />
              <h3 className="font-bold text-lg mt-1">12</h3>
              <p className="text-xs text-gray-600">Tickets Used</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
              <FaUser className="text-blue-500 mx-auto text-xl" />
              <h3 className="font-bold text-lg mt-1">5</h3>
              <p className="text-xs text-gray-600">Events Joined</p>
            </div>

          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-2">Contact Info</h3>
            <p className="text-sm text-gray-700 mb-1"><b>Email:</b> cody@example.com</p>
            <p className="text-sm text-gray-700"><b>Phone:</b> +1 202-555-0183</p>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold mb-2">About</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Cody Fisher is a long-time VIP attendee, known for attending premium sports events worldwide.
            </p>
          </div>

        </div>

        {/* RIGHT SIDE — TABLE */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 border border-[#D0D6DE]">

          <h2 className="text-xl font-semibold">Guest Attendance History</h2>
          <p className="text-sm text-gray-500 mb-6">List of events attended by the guest</p>

          {/* TABLE */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F8F9FB] text-gray-700 text-sm border-b">
                  <th className="py-3 px-4">Event</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Location</th>
                  <th className="py-3 px-4">Ticket Type</th>
                </tr>
              </thead>

              <tbody className="text-sm text-gray-700">

                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Football Championships</td>
                  <td className="py-3 px-4">June 17, 2025</td>
                  <td className="py-3 px-4">Wembley Stadium</td>
                  <td className="py-3 px-4">VIP</td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Basketball Tournament</td>
                  <td className="py-3 px-4">August 12, 2025</td>
                  <td className="py-3 px-4">LA Sports Arena</td>
                  <td className="py-3 px-4">Premium</td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Music Festival</td>
                  <td className="py-3 px-4">October 4, 2025</td>
                  <td className="py-3 px-4">Central Park</td>
                  <td className="py-3 px-4">General</td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}
