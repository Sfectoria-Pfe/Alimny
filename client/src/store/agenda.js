import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "./config";

export const fetchDates = createAsyncThunk("agenda", async () => {
  try {
  const response = await axios.get(`${config}/agenda`)
    return response.data;
  } catch (e) {
    console.log(e);
  }
});

export const createEvent = createAsyncThunk("event", async (event,{dispatch}) => {
  try {
    const response = await axios.post(`${config}/agenda`, event)
    dispatch(fetchDates())
    return response.data;
  } catch (e) {
    console.log(e);
  }
});



const agendaSlice = createSlice({
  name: "agenda",
  initialState: {
    agenda: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchDates.fulfilled, (state, action) => {
      state.agenda = action.payload;
    });
   
  },
});

export default agendaSlice.reducer;