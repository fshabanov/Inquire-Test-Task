import { IsString } from 'src/common/decorators/decorators';

class CommentCreateRequestDto {
  @IsString()
  public text: string;
}

export { CommentCreateRequestDto };
