import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiPath } from 'src/common/enums/enums';
import { sanitizeHtml } from 'src/helpers/helpers';
import { PostCreateRequestDto } from 'src/common/dtos/dtos';
import { PostEntity } from 'src/entities/entities';
import { PostService } from 'src/services/post/post.service';

@Controller(ApiPath.POSTS)
class PostController {
  public constructor(private postService: PostService) {}

  @Post()
  create(
    @Body() { content, title }: PostCreateRequestDto,
  ): Promise<PostEntity> {
    return this.postService.create({
      title,
      content: sanitizeHtml(content),
    });
  }

  @Get()
  getAll(): Promise<PostEntity[]> {
    return this.postService.getAll();
  }
}

export { PostController };
