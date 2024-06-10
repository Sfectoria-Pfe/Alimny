import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import TableRow from "../../components/table/user-table-row";
import TablePage from "../../components/table/view/table-view";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import { useSelector, useDispatch } from "react-redux";
import { deleteCourse, fetchcourses } from "../../store/course";
import AddCourse from "./AddCourse";
import KeepMountedModal from "../../components/Modals/Modal";

function Courses() {
  const courses = useSelector((state) => state?.course?.courses?.items);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [update,setUpdate]=useState(false)
  useEffect(() => {
    dispatch(fetchcourses());
  }, [dispatch]);
  const [id, setId] = useState("");


  const handleDeleteCourse = async () => {
    try {
      if (id ) {
        dispatch(deleteCourse(id));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleDeleteCourse();
  }, [id]);
  return (
    <>
      <TablePage
        goToOne={true}
        btnTitle={"Add Course"}
        icon={<CategoryOutlinedIcon />}
        titlePage={"Courses"}
        courses={courses}
        setOpen={setOpen}
        setId={setId}
        update = {update}
        setUpdate = {setUpdate}
      />
      <KeepMountedModal open={open} setOpen={setOpen} Body={AddCourse} />
    </>
  );
}

export default Courses;
