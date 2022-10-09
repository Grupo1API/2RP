import * as pg from 'pg';
import { Sequelize } from 'sequelize';

export const db = new Sequelize(
  process.env.DATABASE_NAME || 'dois_rp',
  process.env.DATABASE_USER || 'postgres',
  process.env.DATABASE_PASS || 'postgres',
  {
    dialectModule: pg,
    dialect: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: 5432
  }
);