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
        bottomRight : 'px',
        topLeftUnit : 'px',
        topRightUnit : 'px',
        bottomLeftUnit : 'px',
        bottomRightUnit : 'px',
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

      state.borderRadius.topLeftUnit = state.borderRadius.unit
      state.borderRadius.bottomLeftUnit = state.borderRadius.unit
      state.borderRadius.topRightUnit = state.borderRadius.unit
      state.borderRadius.bottomRightUnit = state.borderRadius.unit
    },
    updateBorderRadiusTL: (state,action) => {
      state.borderRadius.topLeft = action.payload
    },
    updateBorderRadiusTR: (state,action) => {
      state.borderRadius.topRight = action.payload
    },
    updateBorderRadiusBL: (state,action) => {
      state.borderRadius.bottomLeft = action.payload
    },
    updateBorderRadiusBR: (state,action) => {
      state.borderRadius.bottomRight = action.payload
    },
    updateBorderRadiusTLUnit: (state,action) => {
      state.borderRadius.topLeftUnit = action.payload
    },
    updateBorderRadiusTRUnit: (state,action) => {
      state.borderRadius.topRightUnit = action.payload
    },
    updateBorderRadiusBLUnit: (state,action) => {
      state.borderRadius.bottomLeftUnit = action.payload
    },
    updateBorderRadiusBRUnit: (state,action) => {
      state.borderRadius.bottomRightUnit = action.payload
    },
    updateBorderRadiusEditTypes: (state,action) => {
      state.borderRadius.onEdit = action.payload
    },
    updateBorderRadiusUnit: (state,action) => {
      state.borderRadius.unit = action.payload
      
      state.borderRadius.topLeftUnit = state.borderRadius.unit
      state.borderRadius.bottomLeftUnit = state.borderRadius.unit
      state.borderRadius.topRightUnit = state.borderRadius.unit
      state.borderRadius.bottomRightUnit = state.borderRadius.unit
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
    updateBorderRadiusTL,
    updateBorderRadiusTR,
    updateBorderRadiusBL,
    updateBorderRadiusBR,
    updateBorderRadiusTLUnit,
    updateBorderRadiusTRUnit,
    updateBorderRadiusBLUnit,
    updateBorderRadiusBRUnit,
    updateBorderRadiusEditTypes,
    updateBorderRadiusUnit,
    updateTailwindCode 

} = counterSlice.actions

export default counterSlice.reducer