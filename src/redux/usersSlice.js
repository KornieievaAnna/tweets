import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, updateUser } from './operations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
          state.items = action.payload;
          console.log(action.payload);
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, state => {
        state.error = null;
        state.isLoading = false;
      })
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
       
      })
      .addCase(updateUser.rejected, state => {
        state.error = null;
        state.isLoading = false;
      }),
});

export const usersReducer = usersSlice.reducer;
