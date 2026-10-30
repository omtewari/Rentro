import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { healthRouter } from './modules/health/health.routes.js';

export const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '1mb' }));

app.get('/', (_req, res) => {
  res.json({ name: 'Rentro API', status: 'running' });
});

app.use('/health', healthRouter);

app.use((_req, res) => {
  res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Route not found' } });
});
