import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from "./slices/authSlice";
import contactsReducer from "./slices/contactsSlice";
import filterReducer from "./slices/filterSlice";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
  };

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
    reducer: {
      auth: persistedAuthReducer,
      contacts: contactsReducer,
      filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [persistStore.register],
        },
  }),
});
const persistor = persistStore(store);

export { store, persistor };