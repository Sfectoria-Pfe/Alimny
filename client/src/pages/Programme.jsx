import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchprogrammes } from "../store/programme";
function Programme() {
  const [cover, setCover] = useState(null);
  const [rows, setRows] = useState([]);

  const programmes = useSelector(
    (state) => state.programmeSlice?.programmes.items
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchprogrammes());
    setRows(programmes);
  }, [dispatch]);
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
      // field: 'categorys',
      headerName: "Category",
      type: "number",
      width: 150,
      editable: true,
      valueGetter: (value, row) => {
       return row.Category.name;
      },
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    // },
  ];

  // const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  // ];
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
      <input type="file" onChange={(e) => handleChange(e)}></input>

      <Box sx={{ height: 400, width: "70%" }}>
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

export default Programme;
