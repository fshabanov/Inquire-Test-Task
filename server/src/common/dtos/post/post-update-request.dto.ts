import { IsOptional, IsString } from 'src/common/decorators/decorators';

class PostUpdateRequestDto {
  @IsOptional()
  @IsString()
  public title?: string;

  @IsOptional()
  @IsString()
  public content?: string;
}

export { PostUpdateRequestDto };
