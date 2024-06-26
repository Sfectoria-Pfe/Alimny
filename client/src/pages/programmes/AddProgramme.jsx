import React,{ useEffect, useState } from "react";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, TextField, Typography } from "@mui/material";
import { addprogrammes } from "../../store/programme";
import { fetchModules } from "../../store/module";
import { fetchmodules } from "../../store/modules";

export default function AddProgramme({setOpen}) {
  console.log(setOpen,"this is the setOpen")
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category?.categories?.items);
const modules = useSelector(state=>state?.modules?.modules?.items)
  const [addedProgramme, setAddedprogramme] = React.useState({
    name: "",
    description: "",
    categoryId: "",
  });

  useEffect(()=>{dispatch(fetchmodules())},[dispatch])
  const handleSubmit = () => {
    dispatch(addprogrammes(addedProgramme)).then((res) => {
      setAddedprogramme({ name: "", description: "", categoryId: "" });
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
            onChange={(e) => {
              setAddedprogramme((prev) => {
                return { ...prev, name: e.target.value };
              });
            }}
            variant="outlined"
            sx={{ width: "50%" }}
          />
          <Autocomplete
            onChange={(event, value) => {
              setAddedprogramme((prev) => {
                return { ...prev, categoryId: value.id };
              });
            }}
            disablePortal
            id="combo-box-demo"
            getOptionLabel={(option) => option.name}
            options={categories}
            sx={{ width: "50%" }}
            renderInput={(params) => <TextField {...params} label="category" />}
          />

        </Box>
    <Autocomplete
              fullWidth
              onChange={(e,v)=>{
                setAddedprogramme((prev) => {
                  return { ...prev, programmeModules: v.map(e=>e.id) };
                });
              }}
        multiple
        id="tags-outlined"
        options={modules}
        getOptionLabel={(option) => option.name}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Modules"
            placeholder="Modules"
          />
        )}
      />
        <TextField
          id="outlined-basic"
          label="description"
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
