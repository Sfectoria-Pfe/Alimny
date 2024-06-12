import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "./config";

export const fetchsessions = createAsyncThunk("fetch sessions", async () => {
  const response = await axios.get("http://localhost:3000/session");
  return response.data;
});

export const fetchSessionsTeachers = createAsyncThunk(
  "fetch/teacher",
  async id => {
    const response = await axios.get(
      "http://localhost:3000/session/getTeachersBySession/" + id
    );
    return response.data;
  }
);
export const fetchSessionsStudents = createAsyncThunk(
  "fetch/sessions",
  async id => {
    const response = await axios.get(
      "http://localhost:3000/session/getStudentsBySession/" + id
    );
    return response.data;
  }
);
export const addSession = createAsyncThunk(
  "add session",
  async (body, { dispatch }) => {
    const response = await axios.post(`${config}/session`, body);
    dispatch(fetchsessions());
    return response.data;
  }
);

export const getStudents = createAsyncThunk("get students", async id => {
  const response = await axios.get(
    "http://localhost:3000/session/getStudentsBySession/" + id
  );
  return response.data;
});
export const getTeachers = createAsyncThunk("get teachers", async id => {
  const response = await axios.get(
    "http://localhost:3000/session/getTeachersBySession/" + id
  );
  return response.data;
});

export const addTeacher = createAsyncThunk(
  "add teacher",
  async (body, { dispatch }) => {
    try {
      const response = await axios.post(`${config}/session/teacher`, body);
      dispatch(fetchSessionsTeachers(body.sessionId));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addStudent = createAsyncThunk(
  "add student",
  async (body, { dispatch }) => {
    try {
      const response = await axios.post(`${config}/session/student`, body);
      dispatch(fetchSessionsStudents(body.sessionId));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getWeeks = createAsyncThunk("get weeks", async id => {
  try {
    const response = await axios.get(`${config}/weeks/week/session/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    session: null,
    sessions: {
      items: [],
      count: 0
    },
    teachers: [],
    students: [],
    weeks: []
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchsessions.fulfilled, (state, action) => {
      state.sessions.items = action.payload;
      state.sessions.count = action.payload.length;
    });
    builder.addCase(fetchSessionsStudents.fulfilled, (state, action) => {
      state.sessions.items = action.payload;
      state.sessions.count = action.payload.length;
    });
    builder.addCase(fetchSessionsTeachers.fulfilled, (state, action) => {
      state.sessions.items = action.payload;
      state.sessions.count = action.payload.length;
    });
    builder.addCase(getWeeks.fulfilled, (state, action) => {
      state.weeks = action.payload;
    });
  }
});
export default sessionSlice.reducer;
