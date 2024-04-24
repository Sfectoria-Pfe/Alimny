import { configureStore } from '@reduxjs/toolkit'
import programmeSlice  from './programme'

export const store = configureStore({
  reducer: {
    programmeSlice: programmeSlice /*key & value  */
  },
})