import { createAsyncThunk } from '@reduxjs/toolkit';
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

export { getAll };
