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
import { getTeachers } from "../../store/sessions";
import AddTeacher from "./AddTeacher";

function SessionTeachers() {
  

  const [cover, setCover] = useState(null);
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [update,setUpdate]=useState(false)
const {id} = useParams()
const teachers = useSelector(state=>state.sessions.teachers)
console.log(teachers)



const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getTeachers(id))
},[dispatch,update])



 
 

 

 
  return (

    <>
      <TablePage
        goToOne={true}
        btnTitle={"Add Teacher"}
        icon={<AccountBoxIcon />}
        titlePage={"Teachers List"}
        setOpen={setOpen}
        teachers={teachers}
    
      />
      <KeepMountedModal
        open={open}
        setOpen={setOpen}
        Body={AddTeacher}
        update={update}
        setUpdate={setUpdate}
      /> 
    </>
  );
}

export default SessionTeachers
