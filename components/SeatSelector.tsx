// components/SeatSelector.tsx - UPDATED FOR STADIUM LAYOUT

import React from 'react';
import { FaChair } from 'react-icons/fa';

// Seat Component (Jismein koi change nahi hai)
const Seat = ({ status }: { status: 'booked' | 'available' | 'selected' }) => {
    let colorClass;
    // Image ke mutabiq colors:
    // Available (Green) -> Selected (Orange) -> Booked (Grey/Dark Blue)
    if (status === 'booked') colorClass = 'text-[#3B4C69]'; // Dark Blue/Gray for booked
    else if (status === 'available') colorClass = 'text-[#4CAF50] cursor-pointer hover:text-green-600'; // Green for available
    else colorClass = 'text-[#FF9800] cursor-pointer hover:text-orange-600'; // Orange for selected
    
    // Image mein seats thodi chhoti hain, isliye text-xl use kiya gaya hai.
    return <FaChair className={`text-xl ${colorClass}`} />;
};

// Seat Grid Rendering Component
const SeatGrid = ({ layout, columns }: { layout: ('booked' | 'available' | 'selected')[]; columns: number }) => (
    <div 
        className={`grid gap-x-1.5 gap-y-2.5`}
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
        {layout.map((status, i) => (
            <Seat key={i} status={status} />
        ))}
    </div>
);


export default function SeatSelector() {
    // 1. LEFT BLOCK (Narrow, Curved Top)
    const leftSeats = [
        ...Array(2).fill('booked'), 
        ...Array(2).fill('booked'), ...Array(2).fill('booked'),
        ...Array(2).fill('booked'), ...Array(2).fill('booked'),
        ...Array(2).fill('booked'), ...Array(2).fill('booked'),
        ...Array(2).fill('booked'), ...Array(2).fill('booked'),
        ...Array(4).fill('booked'), 
        ...Array(4).fill('booked'), 
        ...Array(4).fill('booked'), 
        ...Array(4).fill('booked'), 
        ...Array(4).fill('booked'), 
        ...Array(4).fill('booked'), 
        ...Array(4).fill('booked'), 
        ...Array(4).fill('booked'), 
        ...Array(4).fill('booked'), 
        ...Array(4).fill('booked'), 
    ];

    // 2. CENTER BLOCK (Wide, Multiple rows)
    const centerSeats = [
        ...Array(16).fill('booked'), // Row 1
        ...Array(16).fill('booked'), // Row 2
        ...Array(16).fill('booked'), // Row 3
        ...Array(16).fill('booked'), // Row 4
        ...Array(4).fill('booked'), ...Array(8).fill('booked'), ...Array(4).fill('booked'), // Row 5
        ...Array(4).fill('booked'), ...Array(8).fill('booked'), ...Array(4).fill('booked'), // Row 6 (With Orange section)
        ...Array(4).fill('booked'), ...Array(8).fill('booked'), ...Array(4).fill('booked'), // Row 7
        ...Array(16).fill('booked'), // Row 8
        ...Array(4).fill('booked'), ...Array(8).fill('available'), ...Array(4).fill('booked'), // Row 9 (Green Selected)
        ...Array(16).fill('booked'), // Row 10
        ...Array(16).fill('booked'), // Row 11
        ...Array(16).fill('booked'), // Row 12
        ...Array(16).fill('booked'), // Row 13
        ...Array(16).fill('booked'), // Row 14
        ...Array(16).fill('booked'), // Row 15
        ...Array(16).fill('booked'), // Row 16
    ];

    // 3. RIGHT BLOCK (Very Wide, Stacked)
    const rightSeats = [
        ...Array(8).fill('booked'), // R1
        ...Array(8).fill('booked'), // R2
        ...Array(8).fill('booked'), // R3
        ...Array(8).fill('booked'), // R4
        ...Array(8).fill('booked'), // R5
        ...Array(8).fill('booked'), // R6
        ...Array(8).fill('booked'), // R7
        ...Array(8).fill('booked'), // R8
        ...Array(8).fill('booked'), // R9
        ...Array(8).fill('booked'), // R10
        ...Array(8).fill('booked'), // R11
        ...Array(8).fill('booked'), // R12
        ...Array(8).fill('booked'), // R13
        ...Array(8).fill('booked'), // R14
        ...Array(8).fill('booked'), // R15
        ...Array(8).fill('booked'), // R16
        ...Array(8).fill('booked'), // R17
        ...Array(8).fill('booked'), // R18
    ];
    
    // Customizing the statuses to match the specific image pattern:
    // Left Block adjustments
    leftSeats[0] = 'selected'; leftSeats[1] = 'selected';
    leftSeats[4] = 'selected'; leftSeats[5] = 'selected';
    leftSeats[6] = 'selected'; leftSeats[7] = 'selected';
    // Center Block adjustments
    for (let i = 64 + 4; i < 64 + 12; i++) { // Row 6 Orange block
        centerSeats[i] = 'selected';
    }
    for (let i = 128 + 4; i < 128 + 12; i++) { // Row 9 Green block
        centerSeats[i] = 'available'; // Green is 'Available' in your legend
    }
    // Right Block adjustments (Bottom right corner seems entirely selected/booked orange)
    for (let i = 0; i < rightSeats.length; i++) {
        if (i < 40) rightSeats[i] = 'booked'; // Dark blue (booked)
        else rightSeats[i] = 'selected'; // Orange (selected/premium)
    }

    return (
        <div className="flex flex-col items-center w-full">
            
            {/* 1. Toggles (VIP/Family/Standard) */}
            <div className="flex gap-4 mb-6 text-sm">
                 {/* ... Toggles code remains same ... */}
                <label className="flex items-center text-gray-700"><input type="radio" name="seating" className="mr-2 accent-orange-500"/> VIP Seating</label>
                <label className="flex items-center text-gray-700"><input type="radio" name="seating" className="mr-2 accent-orange-500"/> Family Zone</label>
                <label className="flex items-center text-gray-700"><input type="radio" name="seating" defaultChecked className="mr-2 accent-orange-500"/> Standard Seating</label>
            </div>

            {/* 2. Legend / Key */}
            <div className="flex gap-4 mb-8 text-sm text-gray-600 font-medium">
                {/* Image ke mutabiq legend colors */}
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-400 rounded-full"></div> Booked</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-green-500 rounded-full"></div> Available</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-orange-500 rounded-full"></div> Selected</div>
            </div>


            {/* 3. Simulated Stadium Screen (Image mein yeh visible nahi hai, isliye hata diya gaya hai ya chhota kar diya gaya hai) */}
            
            {/* 4. Actual Seat Grid Container */}
            {/* Seats teen blocks mein divided hain jaisa ki image mein hai */}
            <div className="flex justify-center gap-4 w-full max-w-4xl pt-6">
                
                {/* Left Section - 4 Columns Wide */}
                <div className="mt-8">
                    <SeatGrid layout={leftSeats} columns={4} />
                </div>

                  <div className="mt-8">
                    <SeatGrid layout={leftSeats} columns={4} />
                </div>

                {/* Center Section - 16 Columns Wide */}
                <div className="mx-4">
                    <SeatGrid layout={centerSeats} columns={6} />
                </div>

                {/* Right Section - 8 Columns Wide (Stacked/Dense) */}
                <div className="mt-20">
                    <SeatGrid layout={rightSeats} columns={8} />
                </div>
            </div>

            {/* 5. Stand Selectors (Centenary/Anfield etc.) */}
            <div className="flex gap-4 mt-12 mb-8">
                <button className="flex items-center px-4 py-1 border border-[#D0D6DE] rounded-xl bg-gray-700 text-white shadow-md text-sm">Centenary Stand</button>
                <button className="flex items-center px-4 py-1 border border-[#D0D6DE] rounded-xl hover:bg-gray-100 shadow-md text-sm">Anfield Road Stand</button>
                <button className="flex items-center px-4 py-1 border border-[#D0D6DE] rounded-xl hover:bg-gray-100 shadow-md text-sm">Main Stand</button>
                <button className="flex items-center px-4 py-1 border border-[#D0D6DE] rounded-xl hover:bg-gray-100 shadow-md text-sm">KOP Stand</button>
            </div>


            {/* 6. Bottom Panel (Qty, Price, Buttons) */}
          {/* TOP PANEL (Seats + Quantity + Price) */}
<div className="w-full mt-6 pt-4  border-gray-200 flex items-center justify-between px-4">

  {/* Quantity + Selected Seats */}
  <div className="flex items-center gap-6 text-sm">
      <div className='flex items-center gap-2'>
          <label className='text-gray-600'>No of Seats</label>
          <select className="border px-6 py-2 rounded-lg text-gray-800 border-[#D0D6DE]">
              <option>06</option>
          </select>
      </div>

      <span className='font-semibold text-gray-800'>
          Seat: L1, L2, L3, L4, L5, L6
      </span>

      {/* Price */}
      <div className="text-2xl font-bold text-orange-600 ml-28">
          90$
      </div>
  </div>

</div>


{/* BOTTOM BUTTON PANEL */}
<div className="w-full mt-4 flex items-center justify-center  gap-6 px-4 pb-4 ">

    <button className=" py-2 px-24  rounded-xl bg-red-200 text-red-600 font-medium transition hover:bg-red-200">
        Cancel
    </button>

    <button className=" py-2 px-24  rounded-xl bg-gray-300 text-gray-600 font-medium transition hover:bg-gray-300">
        Confirm
    </button>

</div>

        </div>
    );
}