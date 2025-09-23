// src/config/index.ts
import dotenv from 'dotenv';
dotenv.config();

import { AppConfig } from 'src/types/config.types';

const config: AppConfig = {
  server: {
    port: Number(process.env.PORT) || 3000,
  },
  cors: {
    origin:
      process.env.NODE_ENV === 'production'
        ? process.env.FRONTEND_URL || 'http://localhost:4200'
        : 'http://localhost:4200',
    credentials: true,
  },
};

export default config;
