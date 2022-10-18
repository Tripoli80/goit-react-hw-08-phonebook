import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6346937b745bd0dbd380eb71.mockapi.io';

export const fetchAllContacts = createAsyncThunk(
  'fetchAllContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'addContact',
  async (data, thunkAPI) => {
    try {
      const newContact = await axios.post('/contacts', data);
      return newContact.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'removeContact',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const checkExistContact = (dataToCheck, items) => {
  const res = items.filter(
    item => item.name.toLowerCase() === dataToCheck.toLowerCase()
  );
  return res.length;
};
