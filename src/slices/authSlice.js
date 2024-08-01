import{createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://connections-api.goit.global/';

const initialState ={
user: null,
token: null,
status: 'idle',
error: null,
}

export const registerUser = createAsyncThunk(
    '/auth/registerUser', 
    async(userData) => {
    const response = await axios.post(`${BASE_URL}/users/signup`,userData);
    return response.data;
    }
);

export const loginUser = createAsyncThunk(
    '/auth/loginUser', 
    async(credentials) => {
    const response = await axios.post(`${BASE_URL}/users/login`,credentials);
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
