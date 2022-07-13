import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = []

export const showcasesSlice = createSlice({
  name: "showcases",
  initialState: { value: initialStateValue },
  reducers: {
    setShowcases: (state, action) => {
      state.value = action.payload
    }
  }
})

export const {setShowcases} = showcasesSlice.actions;

export default showcasesSlice.reducer;