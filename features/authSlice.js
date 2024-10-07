import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userType: "Patient",
    userDetails: {},
    userToken: "",
    appointments: [],
    otpData: {
        email: "",
        otp: ""
    }
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
        },
        setAppointments: (state, action)=> {
            state.appointments = action.payload 
        },
        setOtpData: (state, action)=> {
            state.otpData = action.payload
        }
    }
})
export const {setUserType, setUserDetails, setUserToken, setAppointments, setOtpData} = authSlice.actions
export default authSlice.reducer