import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from 'src/common/decorators/decorators';
import {
  PostCreateRequestDto,
  PostUpdateRequestDto,
} from 'src/common/dtos/dtos';
import { ApiPath } from 'src/common/enums/enums';
import { PostEntity } from 'src/entities/entities';
import { sanitizeHtml } from 'src/helpers/helpers';
import { PostService } from 'src/services/post/post.service';

@Controller(ApiPath.POSTS)
class PostController {
  public constructor(private postService: PostService) {}

  @Post()
  public create(
    @Body() { content, title }: PostCreateRequestDto,
  ): Promise<PostEntity> {
    return this.postService.create({
      title,
      content: sanitizeHtml(content),
    });
  }

  @Get()
  public getAll(): Promise<PostEntity[]> {
    return this.postService.getAll();
  }

  @Get('/:id')
  public getById(@Param('id') id: string): Promise<PostEntity> {
    return this.postService.getById(Number(id));
  }

  @Patch('/:id')
  public updatePost(
    @Param('id') id: string,
    @Body() { title, content }: PostUpdateRequestDto,
  ): Promise<PostEntity> {
    return this.postService.update(Number(id), { title, content });
  }

  @Delete('/:id')
  public delete(@Param('id') id: string): Promise<PostEntity> {
    return this.postService.delete(Number(id));
  }
}

export { PostController };
