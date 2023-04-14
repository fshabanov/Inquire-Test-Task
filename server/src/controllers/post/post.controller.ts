import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get('/:id')
  getById(@Param('id') id: string): Promise<PostEntity> {
    return this.postService.getById(Number(id));
  }
}

export { PostController };
