import { Injectable, InjectRepository } from 'src/common/decorators/decorators';
import { CommentCreateRequestDto } from 'src/common/dtos/dtos';
import { Repository } from 'src/common/types/types';
import { CommentEntity } from 'src/entities/comment/comment.entity';

import { PostService } from '../post/post.service';

@Injectable()
class CommentService {
  public constructor(
    @InjectRepository(CommentEntity)
    private commentRepository: Repository<CommentEntity>,
    private postService: PostService,
  ) {}

  public async create(
    postId: number,
    { text }: CommentCreateRequestDto,
  ): Promise<CommentEntity> {
    const post = await this.postService.getById(postId);
    const comment = this.commentRepository.create({ text, post });

    return this.commentRepository.save(comment);
  }
}

export { CommentService };
