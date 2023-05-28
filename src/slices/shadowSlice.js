import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    shadow : 'none',
  },
  reducers: {
    updateShadow: (state,action) => {
      state.shadow = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {updateShadow} = counterSlice.actions

export default counterSlice.reducer