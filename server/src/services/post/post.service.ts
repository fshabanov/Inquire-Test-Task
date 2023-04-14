import { Injectable, InjectRepository } from 'src/common/decorators/decorators';
import {
  PostCreateRequestDto,
  PostUpdateRequestDto,
} from 'src/common/dtos/dtos';
import { PostErrorMessage } from 'src/common/enums/enums';
import { Repository } from 'src/common/types/types';
import { PostEntity } from 'src/entities/entities';
import { NotFoundException } from 'src/exceptions/exceptions';

@Injectable()
class PostService {
  public constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) {}

  public create({ content, title }: PostCreateRequestDto): Promise<PostEntity> {
    const post = this.postRepository.create({ content, title });

    return this.postRepository.save(post);
  }

  public getAll(): Promise<PostEntity[]> {
    return this.postRepository.find();
  }

  public async getById(id: number): Promise<PostEntity> {
    const post = await this.postRepository.findOne({
      where: { id },
    });

    if (!post) {
      throw new NotFoundException(PostErrorMessage.POST_NOT_FOUND);
    }

    return post;
  }

  public update(id: number, body: PostUpdateRequestDto): Promise<PostEntity> {
    return this.postRepository.save({
      id,
      ...body,
    });
  }
}

export { PostService };
