import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userType: "Patient",
    userDetails: {},
    userToken: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserType: (state, action)=> {
            state.userType = action.payload
        },
        setUserDetails: (state, action)=> {
            state.userDetails = action.payload
        },
        setUserToken: (state, action)=> {
            state.userToken = action.payload
        }
    }
})
export const {setUserType, setUserDetails, setUserToken} = authSlice.actions
export default authSlice.reducer