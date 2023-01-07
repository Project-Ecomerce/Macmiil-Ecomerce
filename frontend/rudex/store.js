import {configureStore} from "@reduxjs/toolkit"
import productSlice from "./slices/product/productSlice"
import userSlice from "./slices/auth"
const store = configureStore({
    reducer:{
        product: productSlice.reducer,
        auth: userSlice.reducer
       

    }
})

export default store;