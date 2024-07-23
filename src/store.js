import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./slices/contactsSlice";
import filtersReducer from "./slices/filterSlice";

const store = configureStore({
    reducer:{
        contacts: contactsReducer,
        filter: filtersReducer,
    },
});

export default store;