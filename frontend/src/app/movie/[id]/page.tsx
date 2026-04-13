import Link from 'next/link';
import { Calendar, Clock, MapPin, MonitorPlay, Star } from 'lucide-react';

export default function MovieDetails({ params }: { params: { id: string } }) {
  const movie = {
    title: "DUNE: PART TWO",
    description: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
    genre: "Action / Sci-Fi",
    duration: "166 min",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    rating: "8.8"
  };

  const theaters = [
    {
      id: 1, name: "AMC Empire 25", address: "234 W 42nd St, New York",
      shows: [{ id: 101, time: "18:00", type: "IMAX" }, { id: 102, time: "21:30", type: "Standard" }]
    },
    {
      id: 2, name: "Regal Union Square", address: "850 Broadway, New York",
      shows: [{ id: 103, time: "19:15", type: "Dolby Atmos" }, { id: 104, time: "22:45", type: "Standard" }]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative w-full h-[60vh] flex items-end pb-10 justify-start px-6 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={movie.backdropUrl} 
            alt={movie.title}
            className="w-full h-full object-cover opacity-50 blur-sm mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-end md:items-start gap-8 w-full max-w-6xl mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={movie.posterUrl} 
            alt={movie.title}
            className="w-48 md:w-64 rounded-xl shadow-[0_0_40px_rgba(229,9,20,0.3)] border border-white/10 hidden md:block" 
          />
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">{movie.title}</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-300 font-medium pb-2">
              <span className="flex items-center bg-white/10 px-2 py-1 rounded"><Star className="w-4 h-4 mr-1 text-[#e50914]" /> {movie.rating}/10</span>
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1 text-[#e50914]" /> {movie.duration}</span>
              <span className="flex items-center"><MonitorPlay className="w-4 h-4 mr-1 text-[#e50914]" /> {movie.genre}</span>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
              {movie.description}
            </p>
          </div>
        </div>
      </section>

      {/* Showtimes */}
      <section className="py-12 px-6 lg:px-20 max-w-6xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-8 flex items-center">
          <Calendar className="w-6 h-6 mr-3 text-[#e50914]" />
          Select Theater & Showtimes
        </h2>
        <div className="space-y-8">
          {theaters.map(t => (
            <div key={t.id} className="bg-surface/50 border border-white/10 p-6 rounded-xl hover:border-white/20 transition group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold group-hover:text-[#e50914] transition">{t.name}</h3>
                  <p className="text-gray-400 text-sm flex items-center mt-1">
                    <MapPin className="w-4 h-4 mr-1 opacity-70" /> {t.address}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                {t.shows.map(s => (
                  <Link href={`/show/${s.id}`} key={s.id} className="block">
                    <div className="px-6 py-3 border border-white/20 rounded-lg hover:border-[#e50914] hover:bg-[#e50914]/10 transition flex flex-col items-center justify-center cursor-pointer">
                      <span className="text-lg font-bold text-white">{s.time}</span>
                      <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">{s.type}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
