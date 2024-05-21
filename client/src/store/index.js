import { configureStore } from '@reduxjs/toolkit'
import programmeSlice  from './programme'
import auth from './auth'
import category from './category'
import course from './course'
import users from './users'
import sessions from './sessions'
import modules from './modules'


export const store = configureStore({
  reducer: {
    programmeSlice: programmeSlice ,/*key & value  */
    auth,
    category,
    course,
    users,
    sessions,
    modules
  },
})