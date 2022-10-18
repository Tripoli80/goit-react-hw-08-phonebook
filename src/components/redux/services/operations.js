import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { NotificationManager } from 'react-notifications';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = ``;
  },
};
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchAllContacts = createAsyncThunk(
  'fetchAllContacts',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    console.log("🚀 ~ state.users.auth", state.users.auth)

    if(!state.users.auth){
      return
    }
    token.set(state.users.auth);

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

export const singUp = createAsyncThunk('singUp', async (data, thunkAPI) => {
  try {
    const newUser = await axios.post('/users/signup', data);
    token.set(newUser.data.token);
    NotificationManager.success(
      'Success singUp',
      `Hello, ${newUser.data.user.name}`
    );
    return newUser.data;
  } catch (e) {
    NotificationManager.warning('Try again', 'Somthing went wrong');
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const singIn = createAsyncThunk('singIn', async (data, thunkAPI) => {
  try {
    const user = await axios.post('/users/login', data);
    token.set(user.data.token);
    NotificationManager.success(
      'Success login',
      `Hello, ${user.data.user.name}`
    );
    return user.data;
  } catch (e) {
    NotificationManager.warning('Try again', 'Somthing went wrong');
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logOut = createAsyncThunk('logOut', async (data, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unSet();
    NotificationManager.success('Success message', 'Sucsess logOut');
  } catch (e) {
    NotificationManager.warning('Warning message', 'Error');
    return thunkAPI.rejectWithValue(e.message);
  }
});
