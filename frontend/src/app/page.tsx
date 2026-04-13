import Link from 'next/link';
import { Clock, Star } from 'lucide-react';

export default function Home() {
  const featuredMovie = {
    id: 1,
    title: "DUNE: PART TWO",
    description: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
    genre: "Action / Sci-Fi",
    duration: "166 min",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg"
  };

  const movies = [
    { id: 2, title: "Oppenheimer", genre: "Biography/Drama", posterUrl: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" },
    { id: 3, title: "Spider-Man: Across the Spider-Verse", genre: "Animation/Action", posterUrl: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg" },
    { id: 4, title: "John Wick: Chapter 4", genre: "Action/Thriller", posterUrl: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg" },
    { id: 5, title: "Schindler's List", genre: "Biography/Drama", posterUrl: "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg" },
    { id: 6, title: "The Godfather", genre: "Crime/Drama", posterUrl: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg" },
    { id: 7, title: "The Godfather Part II", genre: "Crime/Drama", posterUrl: "https://upload.wikimedia.org/wikipedia/en/0/03/Godfather_part_ii.jpg" },
    { id: 8, title: "Inception", genre: "Action/Sci-Fi", posterUrl: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg" },
    { id: 9, title: "Almost Famous", genre: "Comedy/Drama", posterUrl: "https://upload.wikimedia.org/wikipedia/en/d/dd/Almost_famous_poster1.jpg" },
    { id: 10, title: "The Truman Show", genre: "Comedy/Drama", posterUrl: "https://upload.wikimedia.org/wikipedia/en/c/cd/Trumanshow.jpg" },
    { id: 11, title: "The Prestige", genre: "Drama/Mystery", posterUrl: "https://upload.wikimedia.org/wikipedia/en/d/d2/Prestige_poster.jpg" },
    { id: 12, title: "A Beautiful Mind", genre: "Biography/Drama", posterUrl: "https://upload.wikimedia.org/wikipedia/en/b/b8/A_Beautiful_Mind_Poster.jpg" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-end pb-20 justify-start px-6 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={featuredMovie.backdropUrl} 
            alt={featuredMovie.title}
            className="w-full h-full object-cover opacity-60 mix-blend-lighten"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="inline-block px-3 py-1 bg-red-600/20 border border-red-500/50 text-red-500 text-xs font-bold tracking-wider rounded-md uppercase">
            Now Showing
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight">
            {featuredMovie.title}
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-xl line-clamp-3">
            {featuredMovie.description}
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400 font-medium pb-2">
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-[#e50914]" /> {featuredMovie.duration}</span>
            <span className="flex items-center"><Star className="w-4 h-4 mr-2 text-[#e50914]" /> {featuredMovie.genre}</span>
          </div>
          <Link href={`/movie/${featuredMovie.id}`} className="inline-block px-8 py-4 bg-[#e50914] hover:bg-[#b80710] text-white font-semibold rounded-md shadow-lg shadow-red-900/40 transition transform hover:scale-105">
            Book Tickets
          </Link>
        </div>
      </section>

      {/* Trending Movies Grid */}
      <section className="py-16 px-6 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold flex items-center">
            <span className="w-2 h-8 bg-[#e50914] rounded-full mr-3 border-none"></span> Trending This Week
          </h2>
          <a href="#" className="text-[#e50914] hover:text-white transition font-semibold text-sm">View All</a>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {[featuredMovie, ...movies].map((m) => (
            <Link href={`/movie/${m.id}`} key={m.id} className="group flex flex-col space-y-3 relative cursor-pointer">
              <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl bg-gray-900 shadow-xl border border-white/5 transition duration-300 group-hover:border-white/20 group-hover:shadow-[0_0_30px_rgba(229,9,20,0.2)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={m.posterUrl} 
                  alt={m.title}
                  className="w-full h-full object-cover transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                  <div className="px-4 py-2 bg-[#e50914] text-white rounded text-sm font-bold w-full text-center">
                    Get Tickets
                  </div>
                </div>
              </div>
              <div className="px-1">
                <h3 className="font-bold text-lg text-white group-hover:text-[#e50914] transition truncate">
                  {m.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium">{m.genre}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
