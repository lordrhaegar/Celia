import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    doctor: {},
    schedule: {}
}
const docSlice = createSlice({
    name: "doc",
    initialState,
    reducers: {
        setSelectedDoctor: (state, action)=>{
            state.doctor = action.payload
        },
        setSchedule: (state, action)=>{
            state.schedule = action.payload
        }
    }
})

export const {setSelectedDoctor} = docSlice.actions
export default docSlice.reducer
