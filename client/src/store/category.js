import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "./config";

export const fetchcategories=createAsyncThunk("fetch categories",async()=>{
    const response=await axios.get(`${config}/categories`)
    return response.data;
})


export const categorySlice = createSlice({
    name: "category",
    initialState:{
     category:null,
     categories:{
        items:[],
        count:0,
     },
    },
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchcategories.fulfilled,(state, action)=>{console.log("adfc",action);
            state.categories.items=action.payload;
        });
    }
})
export default categorySlice.reducer;