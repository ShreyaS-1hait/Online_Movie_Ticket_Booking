"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function SeatSelection({ params }: { params: { showId: string } }) {
  const rows = ['A', 'B', 'C', 'D', 'E'];
  const cols = Array.from({length: 10}, (_, i) => i + 1);
  
  const bookedSeatIds = ['A3', 'A4', 'C5', 'C6', 'D10'];
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSeatClick = (seatId: string) => {
    if (bookedSeatIds.includes(seatId)) return;
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const totalPrice = selectedSeats.length * 300;

  return (
    <div className="flex flex-col min-h-screen pt-10 px-6 lg:px-20 max-w-6xl mx-auto w-full">
      <h1 className="text-3xl font-bold mb-2">Seat Selection</h1>
      <p className="text-gray-400 mb-10">DUNE: PART TWO • AMC Empire 25 • 18:00</p>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1 overflow-x-auto pb-4">
          <div className="min-w-[600px] flex flex-col items-center">
            <div className="w-full max-w-3xl h-24 mb-16 relative flex items-start justify-center">
              <div className="w-full h-full border-t-8 border-[#e50914]/50 rounded-[50%] blur-[2px] absolute top-[-10px]"></div>
              <div className="w-full h-full bg-gradient-to-b from-[#e50914]/20 to-transparent rounded-[50%]"></div>
              <span className="absolute top-4 text-xs font-bold text-[#e50914] tracking-[0.5em] uppercase">Screen</span>
            </div>

            <div className="flex flex-col gap-4">
              {rows.map(row => (
                <div key={row} className="flex items-center gap-4 justify-center">
                  <span className="w-6 text-center text-gray-500 font-bold">{row}</span>
                  <div className="flex gap-2">
                    {cols.map(col => {
                      const seatId = `${row}${col}`;
                      const isBooked = bookedSeatIds.includes(seatId);
                      const isSelected = selectedSeats.includes(seatId);

                      let classes = "w-8 h-8 rounded-t-md rounded-b-sm font-medium text-xs flex items-center justify-center transition cursor-pointer ";
                      if (isBooked) {
                        classes += "bg-gray-800 text-gray-600 cursor-not-allowed border border-gray-700/50";
                      } else if (isSelected) {
                        classes += "bg-[#e50914] text-white shadow-[0_0_15px_rgba(229,9,20,0.5)]";
                      } else {
                        classes += "bg-surface border border-white/20 text-gray-300 hover:border-[#e50914] hover:bg-[#e50914]/20";
                      }

                      const marginClass = col === 5 ? "mr-6" : "";

                      return (
                        <div 
                          key={seatId} 
                          className={`${classes} ${marginClass}`}
                          onClick={() => handleSeatClick(seatId)}
                        >
                          {col}
                        </div>
                      );
                    })}
                  </div>
                  <span className="w-6 text-center text-gray-500 font-bold">{row}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-8 mt-12 text-sm font-medium text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-surface border border-white/20 rounded-t-md"></div> Available
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#e50914] shadow-[0_0_15px_rgba(229,9,20,0.5)] rounded-t-md"></div> Selected
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-800 border border-gray-700/50 rounded-t-md"></div> Booked
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-80 shrink-0">
          <div className="bg-surface glass border border-white/10 rounded-xl p-6 sticky top-28">
            <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Booking Summary</h3>
            <div className="space-y-4 text-sm mb-6 pb-6 border-b border-white/10">
              <div className="flex justify-between">
                <span className="text-gray-400">Seats</span>
                <span className="font-semibold">{selectedSeats.length > 0 ? selectedSeats.join(', ') : '-'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Class</span>
                <span className="font-semibold">Standard (₹300)</span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg text-gray-300">Total</span>
              <span className="text-3xl font-bold text-white">₹{totalPrice}</span>
            </div>
            
            <Link 
              href={selectedSeats.length > 0 ? "/checkout" : "#"}
              className={`block w-full py-4 text-center font-bold rounded-lg transition ${
                selectedSeats.length > 0 
                  ? "bg-[#e50914] hover:bg-[#b80710] text-white shadow-lg shadow-red-900/30" 
                  : "bg-gray-800 text-gray-500 cursor-not-allowed"
              }`}
            >
              Confirm Seats
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
