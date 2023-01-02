import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
    product: {},
    updateLoading: false,
    updateSuccess: false,


    createProductLoading: false,
    createProductSuccess: false,
    createdProducts: {},
}

// API REQUEST

// 1. all product

export const getAllProducts = createAsyncThunk('product/getall', async (_,{rejectWithValue}) =>{
    try {
      const {data} = await axios.get('http://localhost:6000/api/product/all')
      console.log(data)
      return data.product
    } catch (error) {
      console.log(error)
      return rejectWithValue(error)
    }
  })



const productSlice = createSlice({
    name: 'Products slice',
    initialState,
    reducers:{
        reset:(state,action) =>{
      state.updateSuccess = false;
      state.createProductSuccess = false;
      state.createdProducts = {};
        }
    },

    extraReducers:(builder) => {
        builder .addCase(getAllProducts.pending,(state,action) =>{
          state.isLoading = true;
          state.isError = false;
          state.isSuccess = false;
          state.product = [];
        })
    
        builder .addCase(getAllProducts.fulfilled,(state,action) =>{
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.product = action.payload;
        })
    
        .addCase(getAllProducts.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.product = [];
          state.errorMessage = 'Something went wrong please try again...';
        });
    
      }
})

export const { reset } = productSlice.actions;
export default productSlice;