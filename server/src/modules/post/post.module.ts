import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from 'src/controllers/post/post.controller';
import { PostEntity } from 'src/entities/entities';
import { PostService } from 'src/services/post/post.service';

@Module({
  controllers: [PostController],
  providers: [PostService],
  imports: [TypeOrmModule.forFeature([PostEntity])],
})
class PostModule {}

export { PostModule };
