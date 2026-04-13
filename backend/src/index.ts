import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok', time: new Date() });
});

import authRoutes from './routes/auth';
import movieRoutes from './routes/movies';
import theaterRoutes from './routes/theaters';
import showRoutes from './routes/shows';
import seatRoutes from './routes/seats';
import bookingRoutes from './routes/bookings';

app.use('/auth', authRoutes);
app.use('/movies', movieRoutes);
app.use('/theaters', theaterRoutes);
app.use('/shows', showRoutes);
app.use('/seats', seatRoutes);
app.use('/bookings', bookingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
