import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess() {
      state.isLoading = false;
      state.error = null;
      state.adverts = action.payload;
    },
    fetchingError() {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const { getAdverts } = tasksSlice.actions;

const tasksReducer = tasksSlice.reducer;
