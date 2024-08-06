import{createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://connections-api.goit.global';

export const registerUser = createAsyncThunk(
    '/auth/registerUser', 
    async(userData) => {
    const response = await axios.post(`${BASE_URL}/users/signup`,userData);
    return response.data;
    }
);

export const loginUser = createAsyncThunk(
    '/auth/loginUser', 
    async(userData) => {
    const response = await axios.post(`${BASE_URL}/users/login`,userData);
    return response.data;
    }
);

export const logoutUser = createAsyncThunk(
    '/auth/logoutUser',
    async(_, {getState}) => {
    const {token} = getState().auth;
    await axios.post(`${BASE_URL}/users/logout`, null,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
});

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        user: null,
        token: null,
        status: 'idle',
        error: null,
        },
    reducers: {
      setUser: (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      },
      clearUser: (state) => {
        state.user = null;
        state.token = null;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(registerUser.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
        })
        .addCase(logoutUser.fulfilled, (state) => {
          state.user = null;
          state.token = null;
        });
    },
  });
  
  export const { setUser, clearUser } = authSlice.actions;
  export default authSlice.reducer;