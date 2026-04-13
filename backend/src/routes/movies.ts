import { Router } from 'express';
import prisma from '../db';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const movies = await prisma.movie.findMany();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const movie = await prisma.movie.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        shows: {
          include: {
            screen: {
              include: {
                theater: true
              }
            }
          }
        }
      }
    });
    if (!movie) return res.status(404).json({ error: 'Movie not found' });
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    // For MVP, we skip admin JWT verification
    const movie = await prisma.movie.create({
      data: req.body
    });
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
