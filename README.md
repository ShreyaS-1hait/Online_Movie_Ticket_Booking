# CineBook

CineBook is a full-stack movie ticket booking MVP with a TypeScript/Express API, Prisma ORM, SQLite, and a Next.js frontend.

## Highlights

- Browse movies, theaters, shows, and seats
- Authenticate with JWT and manage user bookings
- Seeded database with realistic demo data
- Clean separation between API and UI layers

## Tech Stack

- Backend: Node.js, Express, TypeScript, Prisma, SQLite, JWT, bcryptjs, Zod
- Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion, Lucide React

## Project Structure

- backend/ contains the API server, Prisma schema, and seed data
- frontend/ contains the Next.js app and shared API client

## Prerequisites

- Node.js 18+ recommended
- npm

## Quick Start

1. Install dependencies in both apps:

   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

2. Configure environment files:

   ```bash
   cd ../backend
   cp .env.example .env
   cd ../frontend
   cp .env.example .env.local
   ```

3. Initialize the database and seed data:

   ```bash
   cd ../backend
   npx prisma db push
   npm run seed
   ```

4. Start the backend and frontend in separate terminals:

   ```bash
   cd backend
   npm run dev
   ```

   ```bash
   cd frontend
   npm run dev
   ```

## Default URLs

- Frontend: http://localhost:3000
- Backend: http://localhost:5001
- Health check: http://localhost:5001/health

## Environment Variables

Backend (.env):

- DATABASE_URL (default: file:./dev.db)
- JWT_SECRET (required for auth)
- PORT (default: 5001)
- PRISMA_CLIENT_ENGINE_TYPE (default: binary)
- PRISMA_CLI_QUERY_ENGINE_TYPE (default: binary)

Frontend (.env.local):

- NEXT_PUBLIC_API_BASE_URL (default: http://localhost:5001)

## Scripts

Backend:

- npm run dev: start the API with nodemon
- npm run build: compile TypeScript
- npm run start: run compiled output
- npm run seed: seed demo data

Frontend:

- npm run dev: start Next.js dev server
- npm run build: production build
- npm run start: serve production build
- npm run lint: run ESLint

## API Overview

Base URL: http://localhost:5001

Auth:

- POST /auth/register
- POST /auth/login
- GET /auth/me (Authorization: Bearer <token>)

Movies:

- GET /movies
- GET /movies/:id
- POST /movies

Theaters:

- GET /theaters?city=CityName

Shows:

- GET /shows?movieId=1&city=CityName
- GET /shows/:id

Seats:

- GET /seats?showId=1
- POST /seats/lock (Authorization: Bearer <token>)

Bookings:

- POST /bookings (Authorization: Bearer <token>)
- GET /bookings/user (Authorization: Bearer <token>)

## Data Notes

- SQLite database is stored at backend/prisma/dev.db by default
- The seed script creates movies, theaters, screens, seats, and shows
- Seat availability is derived from bookings for a show

## Troubleshooting

- If Prisma cannot connect, verify DATABASE_URL in backend/.env
- If the UI cannot reach the API, verify NEXT_PUBLIC_API_BASE_URL in frontend/.env.local
- If seeding fails, run npx prisma db push to sync the schema

## Security Notes

- Keep JWT_SECRET and any credentials out of Git
- The movie creation endpoint is open for the MVP and should be protected for production
