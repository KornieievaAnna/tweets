import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,

  reducers: {
    filterUsers(state, { payload }) {
      return {
        ...state,
        filter: payload,
      };
    },
  },
});

export const { filterUsers } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
