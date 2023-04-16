import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppRoute, NotificationMessage } from 'common/enums/enums';
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
    const { navigation, notification, postApi } = extra;

    const deletedPost = await postApi.delete(id);

    notification.success(NotificationMessage.POST_DELETED);

    navigation.push(AppRoute.HOME);

    return deletedPost;
  },
);

const createComment = createAsyncThunk<
  CommentResponseDto,
  CommentCreateRequestDto,
  AsyncThunkConfig
>(ActionType.CREATE_COMMENT, async ({ text, postId }, { extra }) => {
  const { commentApi, notification } = extra;

  const comment = await commentApi.create({ postId, text });

  notification.success(NotificationMessage.COMMENT_ADDED);

  return comment;
});

export { createComment, deletePost, getById };
