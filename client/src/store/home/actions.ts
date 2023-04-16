import { createAsyncThunk } from '@reduxjs/toolkit';
import { NotificationMessage } from 'common/enums/enums';
import { AsyncThunkConfig, PostResponseDto } from 'common/types/types';

import { ActionType } from './common';

const getAll = createAsyncThunk<PostResponseDto[], void, AsyncThunkConfig>(
  ActionType.GET_ALL,
  async (_, { extra }) => {
    const { postApi } = extra;

    const posts = await postApi.getAll();

    return posts;
  },
);

const deletePost = createAsyncThunk<number, number, AsyncThunkConfig>(
  ActionType.DELETE,
  async (id, { extra }) => {
    const { notification, postApi } = extra;

    await postApi.delete(id);

    notification.success(NotificationMessage.POST_DELETED);

    return id;
  },
);

export { deletePost, getAll };
