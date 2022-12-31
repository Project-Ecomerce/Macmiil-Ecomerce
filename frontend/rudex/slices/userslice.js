import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    user: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
  };


  // API REQUEST

// 1. all users

export const getAllUser = createAsyncThunk('user/getAll',async(_,{rejectWithValue}) =>{
   
    try {
        const{data} = await axios.get('http://localhost:6000/api/user/all')
        console.log(data)
    } catch (error) {
        console.log(error)
        return rejectWithValue(error)
    }
})


const UsersSlice = createSlice({
    name:'user Slice',
    initialState,
    reducers:{},
    // extraReducers:(builder) => {}
})

export default UsersSlice

