import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchprogrammes=createAsyncThunk("fetch programmmes",async()=>{
    const response=await axios.get("http://localhost:3000/programme")
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