import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch } from "react-redux";
import { addprogrammes } from "../../store/programme";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #6635df",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export default function KeepMountedModal({ open, setOpen, categories }) {
  const handleClose = () => setOpen(false);
  const [addedProgramme, setAddedprogramme] = React.useState({
    name: "",
    description: "",
    categoryId: "",
  });
  const dispatch = useDispatch();
  const handleSubmit =() => {
   dispatch(addprogrammes(addedProgramme)).then((res)=>{
    setOpen(false)
   })
   //effacer programme
  // const dispatch = useDispatch();
  // const handleSubmit = () => {
  //   dispatch(deleteprogrammes(id)).then((res) => {
  //     setOpen(false);
  //   });
  }
  console.log(categories, "this iscategories from modal");
  return (
    <div>
      <Modal
        keepMounted
        open={open}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        {/* <CloseIcon /> */}
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              cursor: "pointer",
            }}
            onClick={handleClose}
          >
            <CloseIcon
              style={{
                color: "white",
                backgroundColor: "6635df",
                borderRadius: "10px",
                padding: "4px",
              }}
            />
          </Box>

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
                renderInput={(params) => (
                  <TextField {...params} label="category" />
                )}
              />
            </Box>

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
        </Box>
      </Modal>
    </div>
  );
}
