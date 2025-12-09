"use client";

import React from "react";
import { motion } from "framer-motion";
import { Ticket, Search, Filter, CheckCircle2, Clock, XCircle } from "lucide-react";

// ---------------- PAGE START ----------------
export default function TicketsPage() {
  return (
    <div className="p-6">

      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-[#F59630] mb-8 flex items-center gap-2"
      >
        <Ticket className="text-blue-600" size={28} />
        Ticket Management
      </motion.h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <TicketCard title="Total Tickets" value="4,320" color="blue" />
        <TicketCard title="Sold" value="3,910" color="green" />
        <TicketCard title="Pending" value="210" color="orange" />
        <TicketCard title="Refunded" value="32" color="red" />
      </div>

      {/* SEARCH + FILTER */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Search Tickets..."
            className="border border-gray-300 w-full rounded-xl px-10 py-2 text-gray-700"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>

        {/* Filter Btn */}
        <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-xl hover:bg-gray-50">
          <Filter size={18} /> Filter
        </button>
      </div>

      {/* TICKET TABLE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-2xl shadow-md p-6 overflow-x-auto"
      >
        <h2 className="text-lg font-semibold text-gray-700 mb-4">All Tickets</h2>

        <table className="w-full text-left min-w-[700px]">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              <th className="py-2">Event</th>
              <th>Status</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {ticketData.map((ticket, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition">
                <td className="py-3 font-medium">{ticket.event}</td>
                <td className="flex items-center gap-2 py-3">
                  {statusIcon(ticket.status)}
                  <span>{ticket.status}</span>
                </td>
                <td className="py-3">{ticket.price}</td>
                <td className="py-3">{ticket.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}

/* ---------------------- Components ---------------------- */

const TicketCard = ({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: "blue" | "green" | "orange" | "red";
}) => {
  const colors = {
    blue: "text-blue-600 bg-blue-100",
    green: "text-green-600 bg-green-100",
    orange: "text-orange-600 bg-orange-100",
    red: "text-red-600 bg-red-100",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4"
    >
      <div className={`p-3 rounded-xl ${colors[color]}`}>
        <Ticket size={22} />
      </div>
      <div>
        <h3 className="text-sm text-gray-500">{title}</h3>
        <p className="text-xl font-bold text-gray-800">{value}</p>
      </div>
    </motion.div>
  );
};

/* -------- Status Icon Logic -------- */

const statusIcon = (status: string) => {
  switch (status) {
    case "Completed":
      return <CheckCircle2 className="text-green-600" size={18} />;
    case "Pending":
      return <Clock className="text-orange-600" size={18} />;
    case "Cancelled":
      return <XCircle className="text-red-600" size={18} />;
    default:
      return null;
  }
};

/* -------- Ticket Dummy Data -------- */

const ticketData = [
  { event: "Football Championship", status: "Completed", price: "$120", date: "Oct 12, 2024" },
  { event: "Basketball Finals", status: "Pending", price: "$80", date: "Nov 03, 2024" },
  { event: "Music Festival", status: "Completed", price: "$150", date: "Sep 22, 2024" },
  { event: "Racing Event", status: "Cancelled", price: "$60", date: "Jul 15, 2024" },
];
