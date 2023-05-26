import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    innerText: 'Demo',
    tailwindCode : '',
    borderRadius: {
        onEdit : 4,
        unit : 'px',
        topLeft : 0,
        topRight : 0,
        bottomLeft : 0,
        bottomRight : 0,
    },
  },
  reducers: {
    updateInnerText: (state,action) => {
      state.innerText = action.payload
    },
    updateBorderRadius: (state,action) => {
      state.borderRadius.topLeft = action.payload
      state.borderRadius.bottomLeft = action.payload
      state.borderRadius.topRight = action.payload
      state.borderRadius.bottomRight = action.payload
    },
    updateBorderRadiusT: (state,action) => {
      state.borderRadius.topLeft = action.payload
      state.borderRadius.topRight = action.payload
    },
    updateBorderRadiusR: (state,action) => {
      state.borderRadius.topRight = action.payload
      state.borderRadius.bottomRight = action.payload
    },
    updateBorderRadiusB: (state,action) => {
      state.borderRadius.bottomLeft = action.payload
      state.borderRadius.bottomRight = action.payload
    },
    updateBorderRadiusL: (state,action) => {
      state.borderRadius.topLeft = action.payload
      state.borderRadius.bottomLeft = action.payload
    },
    updateBorderRadiusEditTypes: (state,action) => {
      state.borderRadius.onEdit = action.payload
    },
    updateBorderRadiusUnit: (state,action) => {
      state.borderRadius.unit = action.payload
    },
    updateTailwindCode: (state,action) => {
      state.tailwindCode = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
    updateInnerText,
    updateBorderRadius,
    updateBorderRadiusT,
    updateBorderRadiusR,
    updateBorderRadiusB,
    updateBorderRadiusL,
    updateBorderRadiusEditTypes,
    updateBorderRadiusUnit,
    updateTailwindCode 

} = counterSlice.actions

export default counterSlice.reducer