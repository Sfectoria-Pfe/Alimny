import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "./config";

export const fetchsessions=createAsyncThunk("fetch sessions",async()=>{
    const response=await axios.get("http://localhost:3000/session")
    return response.data;
})

export const fetchSessionsTeachers = createAsyncThunk("fetch/teacher", async (id) => {
    const response = await axios.get("http://localhost:3000/session/getTeachersBySession/" + id);
    return response.data
})
export const fetchSessionsStudents = createAsyncThunk("fetch/sessions", async (id) => {
    const response = await axios.get("http://localhost:3000/session/getStudentsBySession/" + id);
    return response.data
})
export const addSession = createAsyncThunk("add session",async(body,{dispatch})=>{
 const response = await axios.post(`${config}/session`,body)
 dispatch(fetchsessions())
 return response.data;
})

 const sessionSlice = createSlice({
    name: "session",
    initialState:{
     session:null,
     sessions:{
        items:[],
        count:0,
     },
    },
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchsessions.fulfilled,(state, action)=>{
            state.sessions.items=action.payload;
            state.sessions.count=action.payload.length;
        });
        builder.addCase(fetchSessionsStudents.fulfilled,(state, action)=>{
            state.sessions.items=action.payload;
            state.sessions.count=action.payload.length;
        });
        builder.addCase(fetchSessionsTeachers.fulfilled,(state, action)=>{
            state.sessions.items=action.payload;
            state.sessions.count=action.payload.length;
        });
    }
    })
export default sessionSlice.reducer;