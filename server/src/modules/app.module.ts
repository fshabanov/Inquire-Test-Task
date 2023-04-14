import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ENV } from 'src/common/enums/enums';

import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { PostEntity } from 'src/entities/entities';

const { TYPE, HOST, PORT, USER, PASSWORD, NAME } = ENV.DB;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: TYPE,
      host: HOST,
      port: PORT,
      username: USER,
      password: PASSWORD,
      database: NAME,
      logging: true,
      entities: [PostEntity],
      migrations: ['dist/data/migrations/*.js'],
      migrationsTableName: 'migrations',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
