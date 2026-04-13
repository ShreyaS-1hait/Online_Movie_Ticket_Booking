import { Router } from 'express';
import prisma from '../db';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { city } = req.query;
    const theaters = await prisma.theater.findMany({
      where: city ? { city: city as string } : undefined
    });
    res.json(theaters);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
