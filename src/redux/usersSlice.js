import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, updateUser } from './operations';

const usersSlice = createSlice({
  name: 'tweets',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, state => {
        state.error = null;
        state.isLoading = false;
      })
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.users = state.users.map(user => {
          if (user.id === payload.id) {
            return {
              ...user,
              followers: payload.followers,
              isFollowing: payload.isFollowing,
            };
          }
          return user;
        });
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = null;
        state.isLoading = false;
      }),
});

export const usersReducer = usersSlice.reducer;
