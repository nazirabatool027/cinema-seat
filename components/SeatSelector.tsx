// components/SeatSelector.tsx

import React from "react";
import { FaChair } from "react-icons/fa";

type SeatStatus = "booked" | "available" | "selected";

// Single Seat Component
const Seat = ({ status }: { status: SeatStatus }) => {
  let colorClass = "";

  if (status === "booked") colorClass = "text-[#3B4C69]";
  if (status === "available") colorClass = "text-[#4CAF50]";
  if (status === "selected") colorClass = "text-[#FF9800]";

  return <FaChair className={`text-xl ${colorClass}`} />;
};

// Grid Renderer
const SeatGrid = ({
  layout,
  columns,
}: {
  layout: SeatStatus[];
  columns: number;
}) => (
  <div
    className="grid gap-x-1.5 gap-y-2.5"
    style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
  >
    {layout.map((status, i) => (
      <Seat key={i} status={status} />
    ))}
  </div>
);

export default function SeatSelector() {
  // ★ Left staircase layout — explicitly typed
  const leftSeats: SeatStatus[] = [
    "selected", "selected", // Row 1 → 2
    "selected", "selected", "selected", // Row 2 → 3
    "selected", "selected", "selected", "selected", // Row 3 → 4
    "booked", "booked", "booked", "booked", "booked", // Row 4 → 5
    "booked", "booked", "booked", "booked", "booked", "booked", // Row 5 → 6
    "booked", "booked", "booked", "booked", "booked", "booked", // Row 6
    "booked", "booked", "booked", "booked", "booked", "booked", // Row 7
    "booked", "booked", "booked", "booked", "booked", "booked", // Row 8
  ];

  // ★ Center & right: fill with "booked"
  // Use `as SeatStatus[]` to make the type match exactly
  const centerSeats = Array(48).fill("booked") as SeatStatus[];
  const rightSeats = Array(48).fill("booked") as SeatStatus[];

  // Example small changes (still typed correctly)
  // centerSeats[10] = "available"; // ok
  // rightSeats[20] = "selected"; // ok

  return (
    <div className="flex flex-col items-center w-full py-6">
      {/* Top Filters */}
      <div className="flex gap-4 mb-6 text-sm">
        <label className="flex items-center text-gray-700">
          <input type="radio" name="seating" className="mr-2 accent-orange-500" />
          VIP Seating
        </label>
        <label className="flex items-center text-gray-700">
          <input type="radio" name="seating" className="mr-2 accent-orange-500" />
          Family Zone
        </label>
        <label className="flex items-center text-gray-700">
          <input
            type="radio"
            name="seating"
            defaultChecked
            className="mr-2 accent-orange-500"
          />
          Standard Seating
        </label>
      </div>

      {/* Legend */}
      <div className="flex gap-4 mb-8 text-sm text-gray-600 font-medium">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-400 rounded-full" /> Booked
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full" /> Available
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full" /> Selected
        </div>
      </div>

      {/* Main Seat Layout */}
      <div className="flex justify-center gap-10 w-full max-w-5xl">
        <SeatGrid layout={leftSeats} columns={6} />
        <SeatGrid layout={centerSeats} columns={6} />
        <SeatGrid layout={rightSeats} columns={6} />
        <SeatGrid layout={rightSeats} columns={6} />
      </div>

      <div className="flex justify-center gap-10 w-full max-w-5xl">
        <SeatGrid layout={leftSeats} columns={6} />
        <SeatGrid layout={centerSeats} columns={6} />
        <SeatGrid layout={rightSeats} columns={6} />
        <SeatGrid layout={rightSeats} columns={6} />
      </div>

      {/* Bottom Controls */}
      <div className="w-full mt-10 flex flex-col items-center gap-6">
        <div className="w-full flex items-center justify-between px-6">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <label className="text-gray-600">No of Seats</label>
              <select className="border px-6 py-2 rounded-lg text-gray-800 border-[#D0D6DE]">
                <option>06</option>
              </select>
            </div>
            <span className="font-semibold text-gray-800">
              Seats: L1, L2, L3, L4, L5, L6
            </span>
          </div>

          <div className="text-2xl font-bold text-orange-600">90$</div>
        </div>

        <div className="flex gap-6">
          <button className="py-2 px-28 bg-red-200 text-red-600 rounded-lg">
            Cancel
          </button>
          <button className="py-2 px-28 bg-gray-300 text-gray-700 rounded-lg">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
