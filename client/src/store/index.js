import { configureStore } from '@reduxjs/toolkit'
import programmeSlice  from './programme'
import auth from './auth'


export const store = configureStore({
  reducer: {
    programmeSlice: programmeSlice ,/*key & value  */
    auth
  },
})