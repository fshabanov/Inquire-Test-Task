import { Module } from 'src/common/decorators/decorators';
import { ENV } from 'src/common/enums/enums';
import { AppController } from 'src/controllers/app/app.controller';
import { PostEntity } from 'src/entities/entities';
import { TypeOrmModule } from 'src/modules/modules';
import { AppService } from 'src/services/app/app.service';

import { PostModule } from '../post/post.module';
import { CommentEntity } from 'src/entities/comment/comment.entity';
import { CommentModule } from '../comment/comment.module';

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
      entities: [PostEntity, CommentEntity],
      migrations: ['dist/data/migrations/*.js'],
      migrationsTableName: 'migrations',
    }),
    PostModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
