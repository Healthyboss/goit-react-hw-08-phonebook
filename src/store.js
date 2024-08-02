import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './slices/contactsSlice';
import filterReducer from './slices/filterSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
export default store;