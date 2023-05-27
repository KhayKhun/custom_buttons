import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    fontSize : 12,
    fontWeight : 300,
    unit : 'px'
  },
  reducers: {
    updateFontSize: (state,action) => {
      state.fontSize = action.payload
    },
    updateFontWeight: (state,action) => {
      state.fontWeight = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {updateFontSize,updateFontWeight} = counterSlice.actions

export default counterSlice.reducer