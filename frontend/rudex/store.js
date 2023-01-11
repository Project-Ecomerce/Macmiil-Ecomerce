import {configureStore} from "@reduxjs/toolkit"
import productSlice from "./slices/product/productSlice"
import userSlice from "./slices/user/userSlice"
import authSlice from "./slices/auth"
const store = configureStore({
    reducer:{
        product: productSlice.reducer,
        auth: authSlice.reducer,
        userSlice: userSlice.reducer
       

    }
})

export default store;