import {
  Body,
  Controller,
  Param,
  Post,
} from 'src/common/decorators/decorators';
import { CommentCreateRequestDto } from 'src/common/dtos/dtos';
import { ApiPath } from 'src/common/enums/enums';
import { CommentEntity } from 'src/entities/comment/comment.entity';
import { CommentService } from 'src/services/comment/comment.service';

@Controller(ApiPath.POSTS_$ID_COMMENTS)
class CommentController {
  public constructor(private commentService: CommentService) {}

  @Post()
  public create(
    @Param('postId') postId: string,
    @Body() { text }: CommentCreateRequestDto,
  ): Promise<CommentEntity> {
    return this.commentService.create(Number(postId), { text });
  }
}

export { CommentController };
