import {Client} from 'pg';
import 'dotenv/config';

export const getClient = () => {
  const options = {
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    database: process.env.PGDATABASE,
    user: process.env.PGUSERNAME,
    password: process.env.PGPASSWORD,
  }

  return new Client(options);
};