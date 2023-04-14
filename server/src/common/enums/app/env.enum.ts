import { config } from 'dotenv';

config();

const { DB_TYPE, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, PORT } =
  process.env;

const ENV = {
  APP: {
    PORT: Number(PORT),
  },
  DB: {
    HOST: DB_HOST,
    PORT: Number(DB_PORT),
    USER: DB_USER,
    PASSWORD: DB_PASSWORD,
    NAME: DB_NAME,
    TYPE: DB_TYPE as 'postgres',
  },
} as const;

export { ENV };
