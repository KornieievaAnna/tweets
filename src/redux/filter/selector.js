import { createSelector } from '@reduxjs/toolkit';
import { selectUsers } from '../user/selector';

export const selectFilter = state => state.filter.filter;

export const visibleContacts = createSelector(
  [selectUsers, selectFilter],
  (users, filter) => {
    switch (filter) {
      case 'follow':
        return users.filter(user => !user.isFollowing);
      case 'following':
        return users.filter(user => user.isFollowing);
      default:
        return users;
    }
  }
);