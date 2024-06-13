import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";

import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate, useParams } from "react-router-dom";
import TablePage from "../../components/table/view/table-view";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useDispatch, useSelector } from "react-redux";
import KeepMountedModal from "../../components/Modals/Modal";
import {  getStudents } from "../../store/sessions";
import AddStudent from "./AddStudent";




function SessionStudents() {
  const dispatch = useDispatch();

  const [cover, setCover] = useState(null);
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [update,setUpdate]=useState(false)

  const students = useSelector((state) => state.sessions.students);
  const {id} = useParams()
  
console.log(students,"students")


useEffect(()=>{
  dispatch(getStudents(id))
},[id,dispatch,update])

 


  const columns = [
    { field: "id", headerName: "malek", width: 90 },
    {
      field: "fullName",
      headerName: "Full Name",
      width: 50,
      editable: true,
      valueGetter: (value, row) => {
        return row?.user.fullName;
      },
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 140,
      editable: false,
      valueGetter: (value, row) => {
        return row?.user.phone;
      },
    },

    {
      headerName: "State",
      type: "string",
      width:400,
      editable: true,
      valueGetter: (value, row) => {
        return row?.user.Gouvernorat.name;
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 160,
      getActions: (params) => [
        <GridActionsCellItem icon={<DeleteIcon color="red" />} />,
        <GridActionsCellItem icon={<VisibilityIcon color="red" />} />,
      ],
    },
  ];

 
  return (

    <>
      <TablePage
        goToOne={true}
        btnTitle={"Add Student"}
        icon={<AccountBoxIcon />}
        titlePage={"Students List"}
        setOpen={setOpen}
        programmes={[]}
        columns={columns}
        students = {students}
        
      />
      <KeepMountedModal
        open={open}
        setOpen={setOpen}
        Body={AddStudent}
        update={update}
        setUpdate={setUpdate}
      /> 
    </>
  );
}

export default SessionStudents

