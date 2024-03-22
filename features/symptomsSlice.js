import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    symptomsList: []
}
const symptomSlice = createSlice({
    name: "symptoms",
    initialState,
    reducers: {
        setSymptomList: (state, action) => {
            state.symptomsList = action.payload
        }
    }
})

export const {setSymptomList} = symptomSlice.actions
export default symptomSlice.reducer