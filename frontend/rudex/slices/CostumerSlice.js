import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  Costumers: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  Costumer: {},


  // NEW Costumer

  Costumer: {},
  newCostumerLoading: false,
  newCostumerSuccess: false,
  newCostumerError: false,
  newCostumerErrorMsg: '',
};

// API REQUEST

// 1. all users



export const getAllcostumer = createAsyncThunk('costumer/getall', async (_,{rejectWithValue}) =>{
  try {
    const {data} = await axios.get('http://localhost:7000/api/custumers/all')
    console.log(data)
    return data

  } catch (error) {
    console.log(error)
    return rejectWithValue(error)
  }
})

 // 2. POST REQUEST -> NEW Costumer
 export const newCostumer = createAsyncThunk(
  'costumer/create',
  async (CostumerData, { rejectWithValue, getState }) => {
    try {
      // const token = getState().auth.user.token;

      const { data } = await axios.post(
        'http://localhost:7000/api/custumers/',
        {
          Name: CostumerData.Name,
          costumerEmail: CostumerData.costumerEmail,
          costumerPhone: CostumerData.costumerPhone,
          costumerAddress: CostumerData.costumerAddress,

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


export const getOnecostumer = createAsyncThunk(
  'costumer/getOne',
  async (costumerId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `http://localhost:7000/api/custumers/costumer/${costumerId}`
      );

      console.log(data)
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);




const CostumerSlice = createSlice ({
  name:'costumer Slice',
  initialState,
  reducers:{},
  extraReducers:(builder) => {
    builder .addCase(getAllcostumer.pending,(state,action) =>{
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
      state.Costumer = [];
    })

    builder .addCase(getAllcostumer.fulfilled,(state,action) =>{
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.Costumer = action.payload;
    })

    .addCase(getAllcostumer.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.Costumer = [];
      state.errorMessage = 'Something went wrong please try again...';
    })

    .addCase(getOnecostumer.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(getOnecostumer.fulfilled, (state, action) => {
      state.Costumer = action.payload;
      state.isLoading = false;
    })

  }
})

export default CostumerSlice