import { IsString } from 'src/common/decorators/decorators';

class PostCreateRequestDto {
  @IsString()
  title: string;

  @IsString()
  content: string;
}

export { PostCreateRequestDto };
