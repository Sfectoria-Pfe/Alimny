import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, TextField, Typography } from "@mui/material";
import { addModules } from "../../store/module"; 

export default function AddModule({ setOpen }) {
  const dispatch = useDispatch();
  const programmes = useSelector((state) => state.programme?.programmes?.items);

  const [addedModule, setAddedModule] = useState({
    name: "",
    description: "",
    programmeId: "",
  });

  const handleSubmit = () => {
    dispatch(addModules(addedModule)).then((res) => {
      setAddedModule({ name: "", description: "", programmeId: "" });
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
            onChange={(event, value) => {
              setAddedModule((prev) => {
                return { ...prev, programmeId: value.id };
              });
            }}
            disablePortal
            id="combo-box-demo"
            getOptionLabel={(option) => option.name}
            options={programmes}
            sx={{ width: "50%" }}
            renderInput={(params) => <TextField {...params} label="Programme" />}
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
