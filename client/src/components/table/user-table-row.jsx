import { useState } from "react";
import PropTypes from "prop-types";

import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import MuiTableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import Label from "../../components/label";
import Iconify from "../../components/iconify";
import { useSelector } from "react-redux";
import { Autocomplete, TextField } from "@mui/material";

// ----------------------------------------------------------------------

export default function TableRow({
  selected,
  goToOne,
  name,
  fullName,
  role,
  email,
  avatarUrl,
  description,
  category,
  handleClick,
  setId,
  id
}) {
  const [open, setOpen] = useState(null);
  const [clicked, setClicked] = useState(false);
  const categories = useSelector((state) => state.category?.categories?.items);

  const navigate = useNavigate();
  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <>
      <MuiTableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none" width={300}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={name} src={avatarUrl} />
            {!clicked ? (
              <Typography
                sx={{ cursor: goToOne ? "pointer" : "" }}
                variant="subtitle2"
                noWrap
                onClick={() => {
                  if (goToOne) {
                    console.log(id);
                    navigate(`${id}`);
                  }
                }}
              >
                {name ? name : fullName}
              </Typography>
            ) : (
              <input
                type="text"
                className="form-control"
                placeholder={name ? name : fullName}
              />
            )}
          </Stack>
        </TableCell>

        <TableCell>
          {!clicked ? (
            <Typography>
              {description ? description?.slice(0, 100) + " ..." : role}
            </Typography>
          ) : (
            <input
              type="text"
              className="form-control"
              placeholder={
                description ? description?.slice(0, 100) + " ..." : role
              }
            />
          )}
        </TableCell>

        <TableCell width={240}>
          {!clicked ? (
            <Typography style={{ whiteSpace: "nowrap" }}>
              {category ? category : email}
            </Typography>
          ) : (
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              getOptionLabel={(option) => option.name}
              options={categories}
              sx={{ width: "50%" }}
              renderInput={(params) => (
                <TextField {...params} label="category" />
              )}
            />
          )}
        </TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </MuiTableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: { width: 140 }
        }}
      >
        <MenuItem
          onClick={() => {
            setClicked(!clicked);
            handleCloseMenu();
          }}
        >
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
        { !clicked? "Edit" : "Save"}
        </MenuItem>

        <MenuItem
          onClick={() => {
            setId(id), handleCloseMenu();
          }}
          sx={{ color: "error.main" }}
        >
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete row
        </MenuItem>
      </Popover>
    </>
  );
}

TableRow.propTypes = {
  avatarUrl: PropTypes.any,
  company: PropTypes.any,
  handleClick: PropTypes.func,
  isVerified: PropTypes.any,
  name: PropTypes.any,
  role: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.string
};
