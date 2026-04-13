import { Router } from 'express';
import prisma from '../db';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { movieId, city } = req.query;
    const shows = await prisma.show.findMany({
      where: {
        ...(movieId ? { movieId: parseInt(movieId as string) } : {}),
        screen: city ? {
          theater: { city: city as string }
        } : undefined
      },
      include: {
        movie: true,
        screen: { include: { theater: true } }
      }
    });
    res.json(shows);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const show = await prisma.show.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        movie: true,
        screen: { include: { theater: true } }
      }
    });
    if (!show) return res.status(404).json({ error: 'Show not found' });
    res.json(show);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
