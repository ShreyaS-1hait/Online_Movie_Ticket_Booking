import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CineBook | Premium Movie Tickets',
  description: 'Book your movie tickets with a premium experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased flex flex-col min-h-screen`}>
        <nav className="w-full glass fixed top-0 z-50 px-6 py-4 flex items-center justify-between">
          <div className="text-2xl flex font-bold text-[#e50914]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/></svg>
            CINEBOOK
          </div>
          <div className="space-x-6 text-sm font-medium">
            <a href="/" className="hover:text-[#e50914] transition">Movies</a>
            <a href="#" className="hover:text-[#e50914] transition">Theaters</a>
            <a href="#" className="px-4 py-2 bg-[#e50914] text-white rounded-md hover:bg-[#b80710] transition shadow-lg shadow-red-900/20">Sign In</a>
          </div>
        </nav>
        <main className="flex-1 pt-20">
          {children}
        </main>
        <footer className="w-full p-8 text-center text-sm text-gray-400 border-t border-white/10 mt-20">
          &copy; {new Date().getFullYear()} CineBook MVP. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
