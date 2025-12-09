"use client";

import React from "react";
// Import next.js dependencies
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image"; // ⬅️ Zaroori for Logo optimization
// Import Icons
import { LuHouse } from "react-icons/lu";
import { FaTicketAlt } from "react-icons/fa";
import { BsCalendarEvent } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { MdAnalytics, MdOutlineLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io"; // ⬅️ NEW: Arrow for nested menu

export default function Sidebar() {
  const pathname = usePathname() || "";

  const links = [
    { href: "/dashboard", label: "Dashboard", icon: <LuHouse /> },
    { href: "/ticket", label: "Ticket", icon: <FaTicketAlt /> }, // ⬅️ Active link in image
    { href: "/events", label: "Events", icon: <BsCalendarEvent />, nested: true }, // ⬅️ Has nested links
    { href: "/guest", label: "Guests", icon: <RxAvatar /> },
    { href: "/analytics", label: "Analytics", icon: <MdAnalytics /> },
  ];



  // Improvement: Use startsWith for better matching on dynamic routes
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    // Sidebar Container: Shadow is subtle in the image
    <aside className=" dark:bg-gray-900 h-[1050px] w-62 flex flex-col px-3 py-3  border-gray-100 dark:border-gray-800 ">
<div className="w-[230px] h-[1100px] bg-white shadow-lg rounded-[12px] border border-gray-200 p-6 flex flex-col gap-6">

      {/* 1. Logo (Using Next.js Image component) */}
      <div className="mb-8 pb-4 border-b border-gray-200 dark:border-gray-700 ">
        <Link href="/" className="flex items-center h-10 relative">
          <Image
            src="/image 6.png" 
            alt="Company Logo"
            width={120} // Adjusted width to fit the logo size
            height={30}
            className="w-auto h-full object-contain"
          />
        </Link>
      </div>

      {/* 2. Navigation Links (Takes available space - flex-1) */}
      <nav className="flex-1">
        <ul className="flex flex-col gap-1"> {/* Gap reduced to match image */}
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`flex items-center justify-between p-1.5 rounded-lg transition-all text-base ${
                  
                  // ⬅️ ACTIVE STYLE MATCHING IMAGE: Orange background, darker text
                  isActive(link.href)
                    ? "bg-orange-400 text-white font-semibold shadow-md" 
                    // ⬅️ INACTIVE STYLE
                    : "text-gray-700 hover:bg-[#F59630] hover:text-white dark:text-gray-300 dark:hover:bg-[#F59630]"
                }`}
              >
                <span className="flex items-center">
                  <span className="text-xl mr-3">{link.icon}</span>
                  {link.label}
                </span>

                {/* Arrow Icon for Nested Links (like 'Events') */}
                {link.nested && (
                    <IoIosArrowForward className="text-gray-400 text-sm" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      </div>

      {/* 3. Bottom Links (Pushed to the bottom using mt-auto) */}
   
    </aside>
  );
}