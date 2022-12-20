import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user:{},
    loginLoading: false,
    loginSuccess: false,
    loginError: false,
    loginErrMsg: '',
}

// api --> login
export const login = createAsyncThunk(
    'auth/login',async(datas,{rejectWithValue}) =>{
        try {
            const {data} = await axios.post('http://localhost:5000/api/user/login',{
                Email:datas.Email,
                Password: datas.Password
            })
        } catch (error) {
            
        }
    }
)

// SLICE

const authSlice = createSlice({
    name:'Auth',
    initialState,
    reducers:{}
})

export default authSlice;
