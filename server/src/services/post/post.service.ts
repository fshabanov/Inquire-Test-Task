import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostCreateRequestDto } from 'src/common/dtos/dtos';
import { PostErrorMessage } from 'src/common/enums/enums';
import { PostEntity } from 'src/entities/entities';
import { Repository } from 'typeorm';

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
}

export { PostService };
