import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostCreateRequestDto } from 'src/common/dtos/dtos';
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
}

export { PostService };
