import Link from 'next/link';
import { Ticket } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen pt-20 px-6 max-w-5xl mx-auto w-full">
      <h1 className="text-3xl font-extrabold mb-10 flex items-center">
        <span className="w-2 h-8 bg-[#e50914] rounded-full mr-3 border-none"></span> 
        My Bookings
      </h1>
      
      <div className="space-y-6">
        <div className="bg-surface/50 border border-white/10 p-6 rounded-xl relative overflow-hidden group hover:border-white/20 transition">
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#e50914]/20 to-transparent mix-blend-screen opacity-0 group-hover:opacity-100 transition duration-500"></div>
          
          <div className="flex flex-col md:flex-row gap-6 md:items-center relative z-10">
            <div className="w-20 h-28 bg-gray-800 rounded-md shrink-0 overflow-hidden">
               {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg" alt="Dune" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold">DUNE: PART TWO</h2>
                  <p className="text-gray-400 mt-1">AMC Empire 25 • Oct 18, 18:00</p>
                </div>
                <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded uppercase tracking-wider">
                  Confirmed
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <div className="bg-black/50 px-4 py-2 rounded-lg border border-white/5 flex items-center">
                   <Ticket className="w-4 h-4 mr-2 text-gray-400" />
                   <span className="text-gray-400 mr-2">Seats:</span>
                   <span className="font-bold text-white">A5, A6</span>
                </div>
                <div className="bg-black/50 px-4 py-2 rounded-lg border border-white/5 flex items-center">
                   <span className="text-gray-400 mr-2">Booking ID:</span>
                   <span className="font-mono font-bold text-white">#CB-9824X</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
