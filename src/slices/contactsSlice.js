import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'https://connections-api.goit.global';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, { getState }) => {
  const { token } = getState().auth;
  const response = await axios.get(`${BASE_URL}/contacts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (newContact, { getState }) => {
  const { token } = getState().auth;
  const response = await axios.post(`${BASE_URL}/contacts`, newContact, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, { getState }) => {
  const { token } = getState().auth;
  await axios.delete(`${BASE_URL}/contacts/${contactId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return contactId;
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload);
      });
  },
});

export default contactsSlice.reducer;