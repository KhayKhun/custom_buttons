import { configureStore } from '@reduxjs/toolkit'
import borderReducer from './slices/borderSlice'
import sizingReducer from './slices/sizingSlice'
import fontReducer from './slices/fontSlice'
import shadowReducer from './slices/shadowSlice'

export default configureStore({
  reducer: {
    borderReducer : borderReducer,
    sizingReducer : sizingReducer,
    fontReducer : fontReducer,
    shadowReducer : shadowReducer
  },
})