import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  AsyncThunkConfig,
  CommentCreateRequestDto,
  CommentResponseDto,
  PostResponseDto,
  PostWithCommentsResponseDto,
} from 'common/types/types';

import { ActionType } from './common';

const getById = createAsyncThunk<
  PostWithCommentsResponseDto,
  number,
  AsyncThunkConfig
>(ActionType.GET_BY_ID, async (id, { extra }) => {
  const { postApi } = extra;

  const post = await postApi.getById(id);

  return post;
});

const deletePost = createAsyncThunk<PostResponseDto, number, AsyncThunkConfig>(
  ActionType.DELETE,
  async (id, { extra }) => {
    const { postApi } = extra;

    const deletedPost = await postApi.delete(id);

    return deletedPost;
  },
);

const createComment = createAsyncThunk<
  CommentResponseDto,
  CommentCreateRequestDto,
  AsyncThunkConfig
>(ActionType.CREATE_COMMENT, async ({ text, postId }, { extra }) => {
  const { commentApi } = extra;

  const comment = await commentApi.create({ postId, text });

  return comment;
});

export { createComment, deletePost, getById };
