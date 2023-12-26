import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"
import docReducer from "../features/docSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        doctor: docReducer
    }
})