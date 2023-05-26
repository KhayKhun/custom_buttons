import { configureStore } from '@reduxjs/toolkit'
import styleReducer from './slices/styleSlice'
export default configureStore({
  reducer: {
    styles : styleReducer
  },
})