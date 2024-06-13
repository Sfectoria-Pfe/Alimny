import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, TextField, Typography } from "@mui/material";
import { addTeacher, allTeachers } from "../../store/sessions";
import  {useParams} from "react-router-dom"
function AddTeacher({setOpen,setUpdate,update}) {
  const dispatch = useDispatch();
  const teachers = useSelector(state=>state.sessions.allTeachers)
  console.log(teachers)
const [addedTeacher,setAddedTeacher] = useState({})
  useEffect(()=>{
    dispatch(allTeachers())
  },[dispatch])
const {id} = useParams()
  const handleAdd = () => {
dispatch(addTeacher({...addedTeacher,sessionId:+id})).then((res)=>{
  setUpdate(!update)
  setOpen(false)
})
  }

  return (
    <div className="">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Autocomplete
          fullWidth
          disablePortal
          onChange={(e,v)=>{
            setAddedTeacher({
              employeeId : v.id
            })
          }}
          id="combo-box-demo"
          getOptionLabel={(option) => option.fullName}
          options={teachers}
          sx={{ mt: 3 }}
          renderInput={(params) => <TextField {...params} label="teachers" />}
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

export default AddTeacher;
