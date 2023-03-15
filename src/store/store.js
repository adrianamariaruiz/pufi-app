import { configureStore } from '@reduxjs/toolkit'
import { pufiSlice } from './slices/pufi/pufiSlice'

export const store = configureStore({
  reducer: {
        pufi: pufiSlice.reducer
  },
})