import { Router } from 'express';

export const healthRouter = Router();

healthRouter.get('/', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'rentro-api',
    timestamp: new Date().toISOString(),
  });
});
