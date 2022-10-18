import { createSlice } from '@reduxjs/toolkit';
import { logOut, singIn, singUp } from './operations';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    user: {
      email: '',
      name: '',
    },
    auth: null,
    isLoggedIn: false,
  },
  extraReducers: {
    [logOut.fulfilled](state) {
      console.log('🚀 ~ action logOut');
      state.isLoggedIn = false;
      state.user = {};
      state.auth = null;
    },
    [singUp.pending](state, action) {
      console.log('🚀 ~ action singUp.pending', action.payload);
      //   const { user, token } = action.payload;
      //   state.user = user;
      //   state.auth = token;
    },
    [singUp.fulfilled](state, action) {
      console.log('🚀 ~ action singUp.fulfilled', action.payload);
      const { user, token } = action.payload;
      state.isLoggedIn = true;

      state.user = user;
      state.auth = token;
    },
    [singIn.fulfilled](state, action) {
      console.log('🚀 ~ action singIn.fulfilled', action.payload);
      const { user, token } = action.payload;
      state.isLoggedIn = true;
      state.user = user;
      state.auth = token;
    },
  },
});
