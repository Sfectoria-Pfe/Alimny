import React,{ useEffect, useState } from "react";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, TextField, Typography } from "@mui/material";
import { addprogrammes, fetchprogrammes } from "../store/programme";
import { addSession } from "../store/sessions";


export default function AddSession({setOpen}) {
  
  const dispatch = useDispatch();
  const programmes = useSelector((state) => state.programmeSlice.programmes.items);
console.log(programmes,"this is prog")
  const [addedSession, setAddedSession] = React.useState({
    name: "",
    description: "",
  });

  useEffect(()=>{
dispatch(fetchprogrammes())
  },[dispatch])

const handleSumbit = ()=>{
    dispatch(addSession(addedSession)).then(()=>setOpen(false)).catch(err=>console.log(err))
}

  return (
    <div className="">
      <Typography
        id="keep-mounted-modal-title"
        variant="h6"
        component="h2"
        sx={{ textAlign: "center", mb: 2 }}
      >
        Add Session
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <TextField
            id="outlined-basic"
            label="name"
            onChange={(e) => {
              setAddedSession((prev) => {
                return { ...prev, name: e.target.value };
              });
            }}
            variant="outlined"
            sx={{ width: "50%" }}
          />
          <Autocomplete
          onChange={(e, value) => {
              setAddedSession({...addedSession,programmeId:value.id})
          }}
            disablePortal
            id="combo-box-demo"
            getOptionLabel={(option) => option.name}
            options={programmes}
            sx={{ width: "50%" }}
            renderInput={(params) => <TextField {...params} label="programmes" />}
          />
        </Box>

        <TextField
          id="outlined-basic"
          label="description"
          onChange={(e) => {
            setAddedSession((prev) => {
              return { ...prev, description: e.target.value };
            });
          }}
          variant="outlined"
          sx={{ width: "100%" }}
        />
      </Box>
      <Button
        sx={{
          mt: 5,
          bgcolor: "#6635DF",
          width: "100%",
          borderRadius: "100px",
          color: "white",
        }}
        variant="contained"
      onClick={handleSumbit}
      >
        Save
      </Button>
    </div>
  );
}
