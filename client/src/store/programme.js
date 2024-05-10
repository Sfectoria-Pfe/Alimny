import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "./config";

export const fetchprogrammes=createAsyncThunk("fetch programmmes",async()=>{
    const response=await axios.get("http://localhost:3000/programme")
    return response.data;
})
export const addprogrammes = createAsyncThunk("add programmmes",async(body,{dispatch})=>{
 const response = await axios.post(`${config}/programme`,body)
 dispatch(fetchprogrammes())
 return response.data;
})


export const programmeSlice = createSlice({
    name: "programme",
    initialState:{
     programme:null,
     programmes:{
        items:[],
        count:0,
     },
    },
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchprogrammes.fulfilled,(state, action)=>{console.log("adfc",action);
            state.programmes.items=action.payload;
        });
    }
})
export default programmeSlice.reducer;