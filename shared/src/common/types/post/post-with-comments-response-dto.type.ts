import { CommentResponseDto, PostResponseDto } from '../types';

type PostWithCommentsResponseDto = PostResponseDto & {
  comments: CommentResponseDto[];
};

export { type PostWithCommentsResponseDto };
