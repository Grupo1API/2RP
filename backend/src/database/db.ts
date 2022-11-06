import * as pg from "pg";
import { Sequelize } from "sequelize";
import "dotenv/config";

const database_url = process.env.DATABASE_URL;

export const db = new Sequelize(`${database_url}`, {
  dialectModule: pg,
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
