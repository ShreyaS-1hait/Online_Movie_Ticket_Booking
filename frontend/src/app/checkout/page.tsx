"use client";
import Link from 'next/link';

export default function Checkout() {
  return (
    <div className="flex flex-col min-h-screen pt-20 px-6 max-w-xl mx-auto w-full items-center">
      <h1 className="text-4xl font-extrabold mb-10 w-full text-center">Secure Checkout</h1>
      <div className="bg-surface border border-white/10 rounded-xl p-8 w-full shadow-2xl glass">
        <h2 className="text-xl font-bold mb-6 text-gray-200">Payment Details (Mock)</h2>
        <p className="text-sm text-gray-400 mb-8 border-b border-white/10 pb-6">
          This is an MVP mock checkout. Click pay to complete the booking.
        </p>
        <div className="flex justify-between text-lg font-medium mb-10">
          <span>Amount due</span>
          <span className="text-[#e50914] font-bold text-2xl">₹600.00</span>
        </div>
        <Link 
          href="/dashboard"
          className="w-full block text-center py-4 bg-[#e50914] text-white font-bold rounded-lg hover:bg-[#b80710] transition shadow-lg shadow-red-900/40"
        >
          Pay ₹600.00 & Book
        </Link>
      </div>
    </div>
  );
}
