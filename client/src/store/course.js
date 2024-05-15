import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "./config";

export const fetchcourses=createAsyncThunk("fetch courses",async()=>{
    const response=await axios.get("http://localhost:3000/course")
    return response.data;
})
export const addcourses = createAsyncThunk("add courses",async(body,{dispatch})=>{
 const response = await axios.post(`${config}/course`,body)
 dispatch(fetchcourses())
 return response.data;
})


export const courseSlice = createSlice({
    name: "course",
    initialState:{
     course:null,
     courses:{
        items:[],
        count:0,
     },
    },
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchcourses.fulfilled,(state, action)=>{console.log("adfc",action);
            state.courses.items=action.payload;
            state.courses.count=action.payload.length;
        });
    }
})
export default courseSlice.reducer;