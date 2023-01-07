
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const User = JSON.parse(localStorage.getItem('User'))
const initialState = {
    user:  {},
    isLoading: false,
    isError: false,
    errorMessage: '',
    isSuccess: false,
  };

  // api --> login

  export const login = createAsyncThunk('auth/login', async (data,{rejectWithValue})=>{
    try {
        const {datas} = await axios.post('http://localhost:5000/api/user/login',{
            Password:data.Password,
            Email: data.Email
        });
        if (datas?.status === 'ERROR') {
            return rejectWithValue(data.errorMessage || 'something went wrong')
        }

        localStorage.setItem('userData',JSON.stringify(data));
        console.log(data)
    } catch (error) {
        return rejectWithValue(error)
    }
  })

  const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        logout:(state,action)=>{
            state.user ={};
            localStorage.removeItem('userData');
        }
    },
    extraReducers :(builder) => {
        builder
        .addCase(login.pending,(state,action)=>{
            state.isLoading = true;
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.user = action.payload;
        })

        .addCase(login.rejected,(state,action) =>{
            state.isError = true;
            state.errorMessage = 'Something went wrong';
            state.isLoading = false;
        })
    }
})
export const { logout } = userSlice.actions;
export default userSlice;
