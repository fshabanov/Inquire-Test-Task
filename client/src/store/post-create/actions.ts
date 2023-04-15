import { createAsyncThunk } from '@reduxjs/toolkit';
import { NotificationMessage } from 'common/enums/enums';
import {
  AsyncThunkConfig,
  PostCreateRequestDto,
  PostResponseDto,
} from 'common/types/types';

import { ActionType } from './common';

const create = createAsyncThunk<
  PostResponseDto,
  PostCreateRequestDto,
  AsyncThunkConfig
>(ActionType.CREATE, async ({ content, title }, { extra }) => {
  const { notification, postApi } = extra;

  const post = await postApi.create({ content, title });

  notification.success(NotificationMessage.POST_CREATED);

  return post;
});

export { create };
