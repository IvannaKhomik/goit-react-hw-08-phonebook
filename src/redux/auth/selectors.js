import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectAuth = createSelector(
  [selectIsLoggedIn, selectUser, selectIsRefreshing],
  (isLoggedIn, user, isRefreshing) => {
    return {
      isLoggedIn,
      user,
      isRefreshing,
    };
  }
);
