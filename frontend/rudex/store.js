import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./slices/auth"
import productsSlice from "./slices/product/productSlice"
// import UsersSlice
const store = configureStore({
    reducer:{
        user: userSlice.reducer,
        products: productsSlice.reducer,

    }
})

export default store;