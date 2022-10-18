import { combineReducers, createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  removeContact,
  addContact,
  logOut,
} from './operations';
import { usersSlice } from './usersSlice';
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,

  extraReducers: {
    [fetchAllContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchAllContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchAllContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    //remove
    [removeContact.fulfilled](state, action) {
      state.isLoading = false;
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    [removeContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    //add
    [addContact.fulfilled](state, action) {
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [logOut.fulfilled](state) {
      state.items = [];
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    changeFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const reduces = combineReducers({
  users: usersSlice.reducer,
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
  // notify: notifySlice.reducer,
});

export const { changeFilter } = filterSlice.actions;
