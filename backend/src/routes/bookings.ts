import { Router } from 'express';
import prisma from '../db';
import { authenticate } from './auth';

const router = Router();

router.post('/', authenticate, async (req: any, res) => {
  try {
    const { showId, seatIds, totalPrice } = req.body;
    
    const existingBookings = await prisma.bookingSeat.findMany({
      where: {
        seatId: { in: seatIds },
        booking: { showId: parseInt(showId) }
      }
    });

    if (existingBookings.length > 0) {
      return res.status(400).json({ error: 'One or more seats are already booked' });
    }

    const booking = await prisma.booking.create({
      data: {
        userId: req.user.id,
        showId: parseInt(showId),
        totalPrice,
        status: 'confirmed',
        bookingSeats: {
          create: seatIds.map((seatId: number) => ({ seatId }))
        }
      }
    });

    res.json({ message: 'Booking successful!', bookingId: booking.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/user', authenticate, async (req: any, res) => {
  try {
    const bookings = await prisma.booking.findMany({
      where: { userId: req.user.id },
      include: {
        show: {
          include: { movie: true, screen: { include: { theater: true } } }
        },
        bookingSeats: {
          include: { seat: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
