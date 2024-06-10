import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, TextField, Typography } from "@mui/material";
import { addCategory } from "../../store/category";

function AddCategory({ setOpen }) {
  const dispatch = useDispatch();


  const [addedCategory, setAddedCategory] = React.useState({
    name: ""
  });
  const handleSubmit = () => {
    dispatch(addCategory(addedCategory)).then((res) => {
      setAddedCategory({ name: "", description: "" });
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
        Add Category
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <TextField
            id="outlined-basic"
            label="name"
            value={addedCategory.name}
            onChange={(e) => {
              setAddedCategory((prev) => {
                return { ...prev, name: e.target.value };
              });
            }}
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Box>
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
        onClick={handleSubmit}
      >
        Save
      </Button>
    </div>
  );
}

export default AddCategory;
