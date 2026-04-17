# Online Movie Ticket Booking System

## 🚀 Overview
A console-based movie ticket booking system developed in C that simulates real-world ticket booking operations.

## 📌 Features
- Movie selection  
- Theatre selection  
- Show timings  
- Ticket booking system  

## 🧠 System Design
The application uses structured programming with modular functions to handle user interaction and booking logic.

## 🛠 Technologies Used
- C Programming  
- Structured Programming  

## ▶️ How to Run
1. Compile the code:
   gcc file.c -o output
2. Run:
   ./output

## 📷 Sample Output
(Add screenshots if possible)

## 🔮 Future Improvements
- Convert into web application  
- Add database support  
- Add user authentication  
# CineBook

CineBook is a movie ticket booking MVP with a TypeScript/Express backend, Prisma ORM, SQLite, and a Next.js frontend.

## Tech Stack

- Backend: Node.js, Express, TypeScript, Prisma, SQLite, JWT, bcryptjs, Zod
- Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion, Lucide React

## Project Structure

- `backend/` contains the API server, Prisma schema, and seed data.
- `frontend/` contains the Next.js app and shared API client.

## Prerequisites

- Node.js 18+ recommended
- npm

## Setup

### Backend

1. Install dependencies:

   ```bash
   cd backend
   npm install
   ```

2. Create a local `.env` file from the example:

   ```bash
   cp .env.example .env
   ```

3. Prepare Prisma and seed the database if needed:

   ```bash
   npx prisma generate
   npm run seed
   ```

4. Start the backend:

   ```bash
   npm run dev
   ```

### Frontend

1. Install dependencies:

   ```bash
   cd frontend
   npm install
   ```

2. Create a local `.env.local` file from the example:

   ```bash
   cp .env.example .env.local
   ```

3. Start the frontend:

   ```bash
   npm run dev
   ```

## Default URLs

- Frontend: http://localhost:3000
- Backend: http://localhost:5001

## Notes

- The backend uses `backend/prisma/dev.db` for local SQLite storage.
- Keep secrets in local `.env` files and out of Git.

