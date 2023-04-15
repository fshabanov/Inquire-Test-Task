import { createAsyncThunk } from '@reduxjs/toolkit';
import { NotificationMessage } from 'common/enums/enums';
import {
  AsyncThunkConfig,
  PostResponseDto,
  PostUpdateRequestDto,
  PostWithCommentsResponseDto,
} from 'common/types/types';

import { ActionType } from './common';

const update = createAsyncThunk<
  PostResponseDto,
  PostUpdateRequestDto,
  AsyncThunkConfig
>(ActionType.UPDATE, async ({ id, content, title }, { extra }) => {
  const { notification, postApi } = extra;

  const post = await postApi.update({ id, content, title });

  notification.success(NotificationMessage.POST_UPDATED);

  return post;
});

const getById = createAsyncThunk<
  PostWithCommentsResponseDto,
  number,
  AsyncThunkConfig
>(ActionType.GET_BY_ID, async (id, { extra }) => {
  const { postApi } = extra;

  const post = await postApi.getById(id);

  return post;
});

export { getById, update };
