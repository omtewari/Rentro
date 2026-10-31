
import { Router } from 'express';
import { prisma } from '@rentro/database/src/client.js';

export const healthRouter = Router();

healthRouter.get('/', async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.json({
      status: 'ok',
      service: 'rentro-api',
      database: 'connected',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Database health check failed:', error);

    res.status(503).json({
      status: 'error',
      service: 'rentro-api',
      database: 'disconnected',
      timestamp: new Date().toISOString(),
    });
  }
});
