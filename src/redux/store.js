import { configureStore } from '@reduxjs/toolkit'
import {persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import HeadlineReducer from "./reducer/headline-reducer"

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, HeadlineReducer);


export const store = configureStore({
  reducer: {
    headline: persistedReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
})


export const persistor = persistStore(store);