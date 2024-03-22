import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"
import docReducer from "../features/docSlice"
import symptomsReducer from "../features/symptomsSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        doctor: docReducer,
        symptom: symptomsReducer
    }
})