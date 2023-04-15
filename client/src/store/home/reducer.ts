import { createReducer } from '@reduxjs/toolkit';
import { DataStatus } from 'common/enums/enums';
import { PostResponseDto } from 'common/types/types';

import { getAll } from './actions';

type State = {
  dataStatus: DataStatus;
  posts: PostResponseDto[];
};

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  posts: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getAll.pending, (state) => {
    state.dataStatus = DataStatus.PENDING;
  });
  builder.addCase(getAll.fulfilled, (state, { payload }) => {
    state.dataStatus = DataStatus.FULFILLED;
    state.posts = payload;
  });
  builder.addCase(getAll.rejected, (state) => {
    state.dataStatus = DataStatus.REJECTED;
  });
});

export { reducer };
