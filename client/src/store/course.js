import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "./config";

export const fetchcourses = createAsyncThunk("fetch courses", async () => {
  const response = await axios.get("http://localhost:3000/course");
  return response.data;
});
export const addcourses = createAsyncThunk(
  "add courses",
  async (body, { dispatch }) => {
    const response = await axios.post(`${config}/course`, body);
    dispatch(fetchcourses());
    return response.data;
  }
);
export const getAllCourses = createAsyncThunk("getCourses", async id => {
  const response = await axios.get(`${config}/course//getAllCourses/${id}`);

  return response.data;
});
export const deleteCourse = createAsyncThunk(
  "delete/Course",
  async (id, { dispatch }) => {
    try {
      const response = await axios.delete(`${config}/course/${id}`);
      dispatch(fetchcourses());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getCourse = createAsyncThunk("get/course", async id => {
  try {
    const response = await axios.get(`${config}/course/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const updateCourse = createAsyncThunk(
  "update/course",
  async (body, { dispatch }) => {
    const { id, ...rest } = body;
    console.log(body);
    try {
      const response = await axios.patch(`${config}/course/${id}`, rest);
      dispatch(fetchcourses());
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const addCourseContent = createAsyncThunk(
  "create/content",
  async (body, { dispatch }) => {
    try {
      const response = await axios.post(`${config}/course-contents`, body);
      dispatch(fetchcourses());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getCoursesForSession = createAsyncThunk(
  "getCoursesForSession",
  async (id) => {
    try {
      const response = await axios.get(`${config}/course/getAllCourses/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const courseSlice = createSlice({
  name: "course",
  initialState: {
    course: null,
    courses: {
      items: [],
      count: 0
    },
    sessionCourses : []
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchcourses.fulfilled, (state, action) => {
      console.log("adfc", action);
      state.courses.items = action.payload;
      state.courses.count = action.payload.length;
    });
    builder.addCase(getCourse.fulfilled, (state, action) => {
      console.log("adfc", action);
      state.course = action.payload;
    });
    builder.addCase(getCoursesForSession.fulfilled, (state, action) => {
  
      state.sessionCourses = action.payload;
    });
  }
});
export default courseSlice.reducer;
