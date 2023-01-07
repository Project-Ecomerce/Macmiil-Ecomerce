import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
    updateLoading: false,
    updateSuccess: false,


    // NEW PRODUCT

    product: {},
    newProductLoading: false,
    newProductSuccess: false,
    newProductError: false,
    newProductErrorMsg: '',


    
}

// API REQUEST

// 1. all product

export const getAllProducts = 
createAsyncThunk('product/getall', async (_,{rejectWithValue}) =>{
    try {
      const {data} = await axios.get('http://localhost:5000/api/product/all')
      console.log(data)
      return data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error)
    }
  })

  // 2. POST REQUEST -> NEW PRODUCTS
  export const newProduct = createAsyncThunk(
    'product/create',
    async (productData, { rejectWithValue, getState }) => {
      try {
        // const token = getState().auth.user.token;
  
        const { data } = await axios.post(
          'http://localhost:5000/api/product/n',
          {
            title: productData.title,
            Price: productData.Price,
            Store: productData.Store,
            subId: productData.subId,
            subId: productData.image,
          },
  
          // {
          //   headers: {
          //     Authorization: `Bearer ${token}`,
          //   },
          // }
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  );




 const productSlice = createSlice({
    name: 'Products slice',
    initialState,
    reducers:{},

    extraReducers:(builder) => {
        builder .addCase(getAllProducts.pending,(state,action) =>{
          state.isLoading = true;
          state.isError = false;
          state.isSuccess = false;
          state.products = [];
        })
    
        builder .addCase(getAllProducts.fulfilled,(state,action) =>{
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.products = action.payload;
        })
    
        .addCase(getAllProducts.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.products = [];
          state.errorMessage = 'Something went wrong please try again...';
        });
    
      }
})

// export const { reset } = productSlice.actions;
export default productSlice;