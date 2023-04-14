import { IsString } from 'class-validator';

class PostCreateRequestDto {
  @IsString()
  title: string;

  @IsString()
  content: string;
}

export { PostCreateRequestDto };
