import { createSlice, current } from "@reduxjs/toolkit";

const initialStateValue = {filters: [], filteredSkills: []}
const filterArray = (array, elm) => array.filter(e => e != elm)

export const skillsSlice = createSlice({
  name: "skills",
  initialState: { value: initialStateValue },
  reducers: {
    setSkills: (state, action) => {
      state.value = initialStateValue
      state.value.filteredSkills = action.payload
    },
    addFilter: (state, action) => {
      state.value.filters.push(action.payload)
      state.value.filteredSkills = filterArray(current(state.value).filteredSkills, action.payload)
    },
    removeFilter: (state, action) => {
      state.value.filteredSkills.push(action.payload)
      state.value.filters = filterArray(current(state.value).filters, action.payload)
    },
    clearFilters: (state) => {
      state.value.filteredSkills.push(state.value.filters)
      state.value.filters = []
    }
  }
})

export const { setSkills, addFilter, removeFilter, clearFilters } = skillsSlice.actions;

export default skillsSlice.reducer;