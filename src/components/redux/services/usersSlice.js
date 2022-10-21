import { createSlice } from '@reduxjs/toolkit';
import { fetchAllContacts, logOut, singIn, singUp } from './operations';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    user: {
      email: '',
      name: '',
    },
    auth: null,
    isLoggedIn: false,

    isRefreshing: false,
  },
  extraReducers: {
    [fetchAllContacts.rejected](state, action) {
      if (action.payload === 401) {
        state.isLoggedIn = false;
        state.user = {};
        state.auth = null;
      }
    },
    [logOut.pending](state) {
      state.isLoggedIn = false;

      state.isRefreshing = true;
    },
    [logOut.rejected](state) {
      state.isRefreshing = false;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.isRefreshing = false;
      state.isLoggedIn = false;
      state.user = {};
      state.auth = null;
    },

    [singUp.fulfilled](state, action) {

      const { user, token } = action.payload;
      state.isLoggedIn = true;

      state.user = user;
      state.auth = token;
    },
    [singIn.fulfilled](state, action) {
      const { user, token } = action.payload;
      state.isLoggedIn = true;
      state.user = user;
      state.auth = token;
    },
  },
});
