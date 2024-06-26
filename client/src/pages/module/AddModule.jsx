import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, TextField, Typography } from "@mui/material";
import { addModules } from "../../store/module"; 
import { fetchcourses } from "../../store/course";

export default function AddModule({ setOpen ,setUpdate,update}) {
  const dispatch = useDispatch();
  const courses = useSelector(state=>state.course.courses.items)
  

  const [addedModule, setAddedModule] = useState({
    name: "",
    description: "",
    Courses: [],
  });
console.log(addedModule)
  useEffect(()=>{
    dispatch(fetchcourses())
  },[])
  const handleSubmit = () => {
    dispatch(addModules(addedModule)).then((res) => {
      setAddedModule({ name: "", description: "", Courses: [] });
      setUpdate(!update)
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
        Add Module
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <TextField
            id="outlined-basic"
            label="Name"
            onChange={(e) => {
              setAddedModule((prev) => {
                return { ...prev, name: e.target.value };
              });
            }}
            variant="outlined"
            sx={{ width: "50%" }}
          />
              <Autocomplete
              fullWidth
              onChange={(e,v)=>{
                setAddedModule((prev) => {
                  return { ...prev, Courses: v.map(e=>e.id) };
                });
              }}
        multiple
        id="tags-outlined"
        options={courses}
        getOptionLabel={(option) => option.name}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Courses"
            placeholder="courses"
          />
        )}
      />
        </Box>

        <TextField
          id="outlined-basic"
          label="Description"
          onChange={(e) => {
            setAddedModule((prev) => {
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
