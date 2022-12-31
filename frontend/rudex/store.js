import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./slices/auth"
// import UsersSlice
const store = configureStore({
    reducer:{
        user: userSlice.reducer,
        // UsersSlice

    }
})

export default store;