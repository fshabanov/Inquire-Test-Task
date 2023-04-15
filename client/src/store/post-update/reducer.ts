import { createReducer } from '@reduxjs/toolkit';
import { DataStatus } from 'common/enums/enums';
import { PostResponseDto } from 'common/types/types';

import { getById, update } from './actions';

type State = {
  dataStatus: DataStatus;
  post: PostResponseDto | null;
};

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  post: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getById.pending, (state) => {
    state.dataStatus = DataStatus.PENDING;
  });
  builder.addCase(getById.fulfilled, (state, { payload }) => {
    state.dataStatus = DataStatus.FULFILLED;
    state.post = payload;
  });
  builder.addCase(getById.rejected, (state) => {
    state.dataStatus = DataStatus.REJECTED;
  });

  builder.addCase(update.pending, (state) => {
    state.dataStatus = DataStatus.PENDING;
  });
  builder.addCase(update.fulfilled, (state, { payload }) => {
    state.dataStatus = DataStatus.FULFILLED;
    state.post = payload;
  });
  builder.addCase(update.rejected, (state) => {
    state.dataStatus = DataStatus.REJECTED;
  });
});

export { reducer };
