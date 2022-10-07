import { combineReducers, createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      return [...state, action.payload];
    },
    removeContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(_, action) {
      return action.payload;
    },
  },
});

export const reduces = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});
