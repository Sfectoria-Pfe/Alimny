import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import TableRow from "../components/table/user-table-row";
import TablePage from "../components/table/view/table-view";
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import {useSelector,useDispatch} from "react-redux"
import { fetchcourses } from "../store/course";
function Courses() {
  const courses = useSelector(state=>state?.course?.courses?.items)
  const dispatch = useDispatch()

useEffect(()=>{
  dispatch(fetchcourses())
},[dispatch])


  return (
 
    <TablePage btnTitle={"Add Course"}  icon={<CategoryOutlinedIcon/>} titlePage={"Courses"} courses={courses}/>
  );
}

export default Courses;





 
   
  