import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, TextField, Typography } from "@mui/material";
import {useParams} from "react-router-dom"
import { addedStudent, allStudents } from "../../store/sessions";

function AddStudent({ setOpen ,setUpdate,update}) {
  const dispatch = useDispatch();
  const [addStudent,setAddStudent] = useState({})
  const {id} = useParams()
  console.log(id)

  const students = useSelector(state=>state.sessions.allStudentss)
  console.log(students)

  useEffect(()=>{dispatch(allStudents())},[dispatch]) 
  
  
const handleAdd = ()=> {
    dispatch(addedStudent({...addStudent,sessionId:+id}))
    .then((res)=>{setUpdate(!update);setOpen(false)})
}


  return (
    <div className="">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Autocomplete
          fullWidth
          disablePortal
          id="combo-box-demo"
          getOptionLabel={(option) => option.fullName}
          onChange={(e,value)=>setAddStudent({
            studentId : value.id
          })}
          options={students}
          sx={{ mt: 3 }}
          renderInput={(params) => <TextField {...params} label="students" />}
        />
      </Box>
      <Button
        sx={{
          mt: 5,
          bgcolor: "#6635DF",
          width: "100%",
          borderRadius: "100px",
          color: "white"
        }}
        variant="contained"
        onClick={handleAdd}
      >
        Save
      </Button>
    </div>
  );
}

export default AddStudent;
