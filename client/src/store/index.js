import { configureStore } from '@reduxjs/toolkit'
import programmeSlice  from './programme'
import auth from './auth'
import category from './category'
import course from './course'


export const store = configureStore({
  reducer: {
    programmeSlice: programmeSlice ,/*key & value  */
    auth,
    category,
    course
  },
})