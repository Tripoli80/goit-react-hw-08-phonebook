import { combineReducers, createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact(state, action) {
      return { state, items: [...state.items, action.payload] };
    },
    removeContact(state, action) {
      return {
        state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    },
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    // Выполнится если HTTP-запрос завершился успешно
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    // Выполнится если HTTP-запрос завершился с ошибкой
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    isLoadingDisanable(state){
      state.isLoading = false;
    }
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

export const { addContact, removeContact,  fetchingInProgress, fetchingSuccess, fetchingError, isLoadingDisanable } = contactsSlice.actions;
export const { changeFilter } = filterSlice.actions;
