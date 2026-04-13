const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const now = new Date();

const addHours = (date, hours) => new Date(date.getTime() + hours * 60 * 60 * 1000);

async function main() {
  const existingMovies = await prisma.movie.count();
  if (existingMovies > 0) {
    return;
  }

  const movie1 = await prisma.movie.create({
    data: {
      title: 'DUNE: PART TWO',
      description: 'Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.',
      duration: 166,
      language: 'English',
      genre: 'Action / Sci-Fi',
      posterUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg',
      releaseDate: new Date('2024-03-01T00:00:00.000Z')
    }
  });

  const movie2 = await prisma.movie.create({
    data: {
      title: 'Oppenheimer',
      description: 'The story of J. Robert Oppenheimer and the development of the atomic bomb.',
      duration: 180,
      language: 'English',
      genre: 'Biography / Drama',
      posterUrl: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
      releaseDate: new Date('2023-07-21T00:00:00.000Z')
    }
  });

  const theater1 = await prisma.theater.create({
    data: {
      name: 'AMC Empire 25',
      city: 'New York',
      address: '234 W 42nd St, New York'
    }
  });

  const theater2 = await prisma.theater.create({
    data: {
      name: 'Regal Union Square',
      city: 'New York',
      address: '850 Broadway, New York'
    }
  });

  const screen1 = await prisma.screen.create({
    data: {
      theaterId: theater1.id,
      name: 'IMAX',
      totalSeats: 50
    }
  });

  const screen2 = await prisma.screen.create({
    data: {
      theaterId: theater1.id,
      name: 'Standard',
      totalSeats: 50
    }
  });

  const screen3 = await prisma.screen.create({
    data: {
      theaterId: theater2.id,
      name: 'Dolby Atmos',
      totalSeats: 50
    }
  });

  const screen4 = await prisma.screen.create({
    data: {
      theaterId: theater2.id,
      name: 'Standard',
      totalSeats: 50
    }
  });

  const rows = ['A', 'B', 'C', 'D', 'E'];
  const cols = Array.from({ length: 10 }, (_, i) => i + 1);

  const buildSeats = (screenId) =>
    rows.flatMap((row) =>
      cols.map((col) => ({
        screenId,
        seatNumber: `${row}${col}`,
        type: row < 'C' ? 'premium' : 'regular'
      }))
    );

  await prisma.seat.createMany({ data: buildSeats(screen1.id) });
  await prisma.seat.createMany({ data: buildSeats(screen2.id) });
  await prisma.seat.createMany({ data: buildSeats(screen3.id) });
  await prisma.seat.createMany({ data: buildSeats(screen4.id) });

  await prisma.show.createMany({
    data: [
      { movieId: movie1.id, screenId: screen1.id, startTime: addHours(now, 6), price: 350 },
      { movieId: movie1.id, screenId: screen1.id, startTime: addHours(now, 9), price: 350 },
      { movieId: movie1.id, screenId: screen2.id, startTime: addHours(now, 7), price: 250 },
      { movieId: movie1.id, screenId: screen2.id, startTime: addHours(now, 10), price: 250 },
      { movieId: movie1.id, screenId: screen3.id, startTime: addHours(now, 8), price: 300 },
      { movieId: movie1.id, screenId: screen3.id, startTime: addHours(now, 11), price: 300 },
      { movieId: movie2.id, screenId: screen4.id, startTime: addHours(now, 5), price: 220 },
      { movieId: movie2.id, screenId: screen4.id, startTime: addHours(now, 8), price: 220 }
    ]
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
