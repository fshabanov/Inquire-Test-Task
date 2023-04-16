import { Module } from 'src/common/decorators/decorators';
import { CommentController } from 'src/controllers/comment/comment.controller';
import { CommentEntity } from 'src/entities/entities';
import { CommentService } from 'src/services/comment/comment.service';

import { TypeOrmModule } from '../modules';
import { PostModule } from '../post/post.module';

@Module({
  controllers: [CommentController],
  providers: [CommentService],
  imports: [TypeOrmModule.forFeature([CommentEntity]), PostModule],
})
class CommentModule {}

export { CommentModule };
