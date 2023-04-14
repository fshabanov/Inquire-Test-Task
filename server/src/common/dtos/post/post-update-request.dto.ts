import { IsOptional, IsString } from 'src/common/decorators/decorators';

class PostUpdateRequestDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  content?: string;
}

export { PostUpdateRequestDto };
