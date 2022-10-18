import { combineReducers, createSlice } from '@reduxjs/toolkit';
import { fetchAllContacts, removeContact, addContact } from './operations';
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

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
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

export const { changeFilter } = filterSlice.actions;
