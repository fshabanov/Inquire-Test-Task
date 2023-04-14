import { CommentResponseDto } from '../types';

type PostWithCommentsResponseDto = {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
  comments: CommentResponseDto[];
};

export { type PostWithCommentsResponseDto };
