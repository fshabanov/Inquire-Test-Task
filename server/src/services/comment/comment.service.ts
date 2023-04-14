import { InjectRepository, Injectable } from 'src/common/decorators/decorators';
import { CommentEntity } from 'src/entities/comment/comment.entity';
import { Repository } from 'src/common/types/types';
import { PostService } from '../post/post.service';
import { CommentCreateRequestDto } from 'src/common/dtos/dtos';

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
