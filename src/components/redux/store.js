import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  persistStore,
  persistReducer,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { reduces } from './services/Slice';

const persistConfig = {
  key: 'root',
  storage,

  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, reduces);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
