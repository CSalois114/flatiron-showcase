import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = []

export const contentSlice = createSlice({
  name: "content",
  initialState: { value: initialStateValue },
  reducers: {
    setContent: (state, action) => {
      state.value = action.payload
    }
  }
})

export const {setContent} = contentSlice.actions;

export default contentSlice.reducer;