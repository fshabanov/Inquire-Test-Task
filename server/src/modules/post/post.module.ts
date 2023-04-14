import { Module } from 'src/common/decorators/decorators';
import { PostController } from 'src/controllers/post/post.controller';
import { PostEntity } from 'src/entities/entities';
import { TypeOrmModule } from 'src/modules/modules';
import { PostService } from 'src/services/post/post.service';

@Module({
  controllers: [PostController],
  providers: [PostService],
  imports: [TypeOrmModule.forFeature([PostEntity])],
})
class PostModule {}

export { PostModule };
