import { Router } from 'express';
import prisma from '../db';
import { authenticate } from './auth';

const router = Router();

// Get seats for a specific show
router.get('/', async (req, res) => {
  try {
    const { showId } = req.query;
    if (!showId) return res.status(400).json({ error: 'showId is required' });
    
    const show = await prisma.show.findUnique({ where: { id: parseInt(showId as string) } });
    if (!show) return res.status(404).json({ error: 'Show not found' });

    const seats = await prisma.seat.findMany({
      where: { screenId: show.screenId }
    });

    const bookedSeats = await prisma.bookingSeat.findMany({
      where: {
        booking: {
          showId: show.id
        }
      }
    });

    const bookedSeatIds = bookedSeats.map(bs => bs.seatId);

    const availableSeats = seats.map(seat => ({
      ...seat,
      status: bookedSeatIds.includes(seat.id) ? 'booked' : 'available'
    }));

    res.json(availableSeats);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Soft-lock seats
router.post('/lock', authenticate, async (req, res) => {
  // Very minimal soft lock simulation for the MVP
  const { seatIds, showId } = req.body;
  if (!seatIds || !showId) return res.status(400).json({ error: 'seatIds and showId are required' });
  
  res.json({ message: 'Seats locking simulated successfully.' });
});

export default router;
