import { IsString } from 'src/common/decorators/decorators';

class CommentCreateRequestDto {
  @IsString()
  text: string;
}

export { CommentCreateRequestDto };
