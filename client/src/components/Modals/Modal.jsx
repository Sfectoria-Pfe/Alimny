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

export default function KeepMountedModal({ open, setOpen, Body,setUpdate,update }) {
  const handleClose = () => setOpen(false);

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
          {/* <Body setOpen={setOpen} setUpdate={setUpdate} update={update}/> */}
        </Box>
      </Modal>
    </div>
  );
}
