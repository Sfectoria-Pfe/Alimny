import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "./config";

export const fetchusers=createAsyncThunk("fetch users",async()=>{
    const response=await axios.get("http://localhost:3000/users")
    return response.data;
})
export const addUser = createAsyncThunk("add user",async(body,{dispatch})=>{
 const response = await axios.post(`${config}/users`,body)
 dispatch(fetchusers())
 return response.data;
})


 const userSlice = createSlice({
    name: "users",
    initialState:{
     user:null,
     users:{
        items:[],
        count:0,
     },
    },
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchusers.fulfilled,(state, action)=>{console.log("adfc",action);
            state.users.items=action.payload;
            state.users.count = action.payload.length;
        });
    }
})
export default userSlice.reducer;