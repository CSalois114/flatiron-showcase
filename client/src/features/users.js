import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = []

export const usersSlice = createSlice({
  name: "users",
  initialState: { value: initialStateValue },
  reducers: {
    setUsers: (state, action) => {
      state.value = action.payload
    }
  }
})

export const {setUsers} = usersSlice.actions;

export default usersSlice.reducer;