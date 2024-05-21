import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "./config";

export const fetchmodules=createAsyncThunk("fetch modules",async()=>{
    const response=await axios.get("http://localhost:3000/modules")
    return response.data;
})
export const addModule = createAsyncThunk("add modules",async(body,{dispatch})=>{
 const response = await axios.post(`${config}/course`,body)
 dispatch(fetchmodules())
 return response.data;
})


export const moduleSlice = createSlice({
    name: "module",
    initialState:{
     module:null,
     modules:{
        items:[],
        count:0,
     },
    },
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchmodules.fulfilled,(state, action)=>{
            state.modules.items=action.payload;
            state.modules.count=action.payload.length;
        });
    }
})
export default moduleSlice.reducer;