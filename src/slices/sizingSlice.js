import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    paddingX : 20 ,
    paddingY : 14,
    unit : 'px',
    editType : 1
  },
  reducers: {
    updatePaddingX: (state,action) => {
      state.paddingX = action.payload
    },
    updatePaddingY: (state,action) => {
      state.paddingY = action.payload
    },
    updatePadding: (state,action) => {
      state.paddingX = action.payload
      state.paddingY = action.payload
    },
    updatePaddingEditType: (state,action) => {
      state.editType = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {updatePaddingX,updatePaddingY ,updatePadding ,updatePaddingEditType} = counterSlice.actions

export default counterSlice.reducer