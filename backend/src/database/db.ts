import * as pg from 'pg';
import { Sequelize } from 'sequelize';

export const db = new Sequelize(
  process.env.DATABASE_NAME || 'vfgkjuei',
  process.env.DATABASE_USER || 'vfgkjuei',
  process.env.DATABASE_PASS || 'nQ172B-WGZ53icOV7ILC0Qb7lbmXoctV',
  {
    dialectModule: pg,
    dialect: 'postgres',
    host: process.env.DATABASE_HOST || 'babar.db.elephantsql.com',
    port: 5432
  }
);