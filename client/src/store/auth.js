import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const me = createAsyncThunk("auth/me", async () => {
  try {
    const tokenn = await localStorage.getItem("token");
    const token = JSON.parse(tokenn);

    const config = {
      headers: {
        Authorization: "Bearer " + token
      }
    };

    const response = await axios.get("http://localhost:3000/auth/me", config);
    return response.data;
  } catch (e) {
    console.log(e);
  }
});

export const login = createAsyncThunk("login", async (body, { dispatch }) => {
  try {
    const res = await axios.post("http://localhost:3000/auth/login", body);
    await localStorage.setItem("token", JSON.stringify(res.data));
    dispatch(me(res.data.authorization));
    console.log(res.data, "from login store");
    return res.data;
  } catch (e) {
    console.log(e, "error");
    throw error;
  }
});

export const logout = createAsyncThunk("logout", async () => {
  await localStorage.removeItem("token");
});

export const updateUser = createAsyncThunk("update/user", async (body,{ dispatch }) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/auth/update/${body.id}`,
      body
    );
    await localStorage.setItem("token", JSON.stringify(res.data));
    dispatch(me(res.data.authorization));
    return response.data;
  } catch (e) {
    console.log(e);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    me: null
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(me.fulfilled, (state, action) => {
      state.me = action.payload;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.me = null;
    });
  }
});

export default authSlice.reducer;
