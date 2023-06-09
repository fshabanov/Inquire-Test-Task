import { DataSource } from 'typeorm';

import { ENV } from './common/enums/enums';
import { CommentEntity } from './entities/comment/comment.entity';
import { PostEntity } from './entities/entities';

const { TYPE, HOST, PORT, USER, PASSWORD, NAME } = ENV.DB;

export default new DataSource({
  type: TYPE,
  host: HOST,
  port: PORT,
  username: USER,
  password: PASSWORD,
  database: NAME,
  logging: true,
  entities: [PostEntity, CommentEntity],
  migrations: ['dist/data/migrations/*.js'],
});
