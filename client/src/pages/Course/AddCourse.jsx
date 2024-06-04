import React,{ useState } from "react";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, TextField, Typography } from "@mui/material";
import { addcourses } from "../../store/course";

export default function AddCourse({setOpen}) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category?.categories?.items);

  const [addedProgramme, setAddedprogramme] = React.useState({
    name: "",
    description: ""
  });
  const handleSubmit = () => {
    dispatch(addcourses(addedProgramme)).then((res) => {
      setAddedprogramme({ name: "", description: "" });
      setOpen(false);
    });
  };
  return (
    <div className="">
      <Typography
        id="keep-mounted-modal-title"
        variant="h6"
        component="h2"
        sx={{ textAlign: "center", mb: 2 }}
      >
        Add
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <TextField
            id="outlined-basic"
            label="name"
            value={addedProgramme.name}
            onChange={(e) => {
              setAddedprogramme((prev) => {
                return { ...prev, name: e.target.value };
              });
            }}
            variant="outlined"
            sx={{ width: "100%" }}
          />
         
        </Box>

        <TextField
          id="outlined-basic"
          label="description"  
          value={addedProgramme.description}
          onChange={(e) => {
            setAddedprogramme((prev) => {
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
        onClick={handleSubmit}
      >
        Save
      </Button>
    </div>
  );
}
