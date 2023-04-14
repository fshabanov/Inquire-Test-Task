import { DataSource } from 'typeorm';

import { ENV } from './common/enums/enums';

const { TYPE, HOST, PORT, USER, PASSWORD, NAME } = ENV.DB;

export default new DataSource({
  type: TYPE,
  host: HOST,
  port: PORT,
  username: USER,
  password: PASSWORD,
  database: NAME,
  logging: true,
  entities: [],
  migrations: ['dist/data/migrations/*.js'],
});
