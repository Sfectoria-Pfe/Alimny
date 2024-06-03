import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "./config";


export const fetchModules = createAsyncThunk("fetch/modules", async () => {
  const response = await axios.get(`${config}/module`);
  return response.data;
});


export const addModules = createAsyncThunk("add/modules", async (body, { dispatch }) => {
  const response = await axios.post(`${config}/module`, body);
  dispatch(fetchModules());
  return response.data;
});


export const deleteModule = createAsyncThunk("delete/module", async (id, { dispatch }) => {
  try {
    const response = await axios.delete(`${config}/module/${id}`);
    dispatch(fetchModules());
    return response.data;
  } catch (error) {
    console.error(error);
  }
});


export const updateModule = createAsyncThunk("update/module", async (body, { dispatch }) => {
  const { id, ...rest } = body;
  try {
    const response = await axios.patch(`${config}/module/${id}`, rest);
    dispatch(fetchModules());
    return response.data;
  } catch (error) {
    console.error(error);
  }
});


export const moduleSlice = createSlice({
  name: "module",
  initialState: {
    module: null,
    modules: {
      items: [],
      count: 0,
    },
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchModules.fulfilled, (state, action) => {
      state.modules.items = action.payload;
    });
  },
});

export default moduleSlice.reducer;
