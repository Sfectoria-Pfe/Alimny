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

export const getStudents = createAsyncThunk("get/students", async id => {
  const response = await axios.get(
    "http://www.localhost:3000/session/getstudents/" + id
  );
  return response.data;
});
export const getTeachers = createAsyncThunk("get teachers", async id => {
  const response = await axios.get(
    "http://localhost:3000/session/getTeachers/" + id
  );
  return response.data;
});

export const addTeacher = createAsyncThunk(
  "add teacher",
  async (body, { dispatch }) => {
    try {
      const response = await axios.post(`${config}/teachers`, body);
      dispatch(fetchSessionsTeachers(body.sessionId));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addedStudent = createAsyncThunk(
  "add student",
  async (body, { dispatch }) => {
    try {
      const response = await axios.post(`${config}/session-student`, body);
      dispatch(fetchSessionsStudents(body.sessionId));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getWeeks = createAsyncThunk("get/weeks", async id => {
  try {
    const response = await axios.get(`${config}/weeks/week/session/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const addedWeek = createAsyncThunk("add/week", async (body, { dispatch }) => {
    try {
        const response = await axios.post(`${config}/weeks`, body);
        dispatch(getWeeks(body.sessionId));
    } catch (error) {
        console.log(error);
    }
});

export const allStudents = createAsyncThunk("get/all/students",async()=>{
  try {
    const response = await axios.get("http://localhost:3000/students")
    return response.data
  } catch (error) {
    console.log(error)
  }
})

export const allTeachers = createAsyncThunk("get/all/teachers",async()=>{
  try {
    const response = await axios.get("http://localhost:3000/teachers")
return response.data
  } catch (error) {
    console.log(error);
  }
})
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
    weeks: [],
    allStudentss : [],
    allTeachers : []
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
    builder.addCase(getStudents.fulfilled, (state, action) => {
      state.students = action.payload;
    });
    builder.addCase(getTeachers.fulfilled, (state, action) => {
      state.teachers = action.payload;
    });
    builder.addCase(allStudents.fulfilled, (state, action) => {
      state.allStudentss = action.payload;
    });
    builder.addCase(allTeachers.fulfilled, (state, action) => {
      state.allTeachers = action.payload;
    });
  }
});
export default sessionSlice.reducer;
