import { configureStore } from '@reduxjs/toolkit'
import styleReducer from './styleSlice'

export default configureStore({
  reducer: {
    style: styleReducer,
  },
})