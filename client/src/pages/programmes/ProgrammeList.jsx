import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchprogrammes } from "../../store/programme";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
function ProgrammeList() {
  const [cover, setCover] = useState(null);
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();

  const programmes = useSelector(
    (state) => state.programmeSlice?.programmes?.items
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchprogrammes());
    
  }, [dispatch]);
  useEffect(()=>{
    setRows(programmes);
  },[programmes])
  console.log(programmes, "prog");

  const columns = [
    { field: "id", headerName: "malek", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "description",
      headerName: "Desription",
      width: 150,
      editable: false,
    },

    {
      headerName: "Category",
      type: "number",
      width: 150,
      editable: true,
      valueGetter: (value, row) => {
        return row.Category.name;
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 160,
      getActions: (params) => [
        <GridActionsCellItem icon={<DeleteIcon color="red" />} />,
        <GridActionsCellItem icon={<VisibilityIcon color="red" />} />,
      ],
    },
  ];

  const handelFile = async (e) => {
    try {
      const formData = new FormData();
      formData.append("file", cover);

      const response = await axios.post(
        "http://localhost:4000/upload",
        formData
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="d-flex justify-content-end py-3">
        <button
          className="btn btn-primary "
          onClick={() => navigate("addProgramme")}
        >
          Add Programme
        </button>
      </div>

      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </div>
  );
}

export default ProgrammeList;
