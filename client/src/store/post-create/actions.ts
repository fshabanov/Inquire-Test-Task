import { createAsyncThunk } from '@reduxjs/toolkit';
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
  const { postApi } = extra;

  const post = await postApi.create({ content, title });

  return post;
});

export { create };
