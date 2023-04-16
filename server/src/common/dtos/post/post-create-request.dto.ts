import { IsString } from 'src/common/decorators/decorators';

class PostCreateRequestDto {
  @IsString()
  public title: string;

  @IsString()
  public content: string;
}

export { PostCreateRequestDto };
