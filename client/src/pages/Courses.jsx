import React, { useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
function Courses() {
  const [cover, setCover] = useState(null);

  const columns = [
    { field: 'id', 
    headerName: 'malek',
     width: 90 
    },
    {
      field: 'firstName',
      headerName: 'Cours',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Prof',
      width: 150,
      editable: false,
    },
    {
      field: 'age',
      headerName: 'Nombre heure',
      type: 'number',
      width: 110,
      editable: true,
    },
  
  ];
  
  const rows = [
    { id: 1, lastName: 'Msr', firstName: 'Javascript', age: 14 },
    { id: 2, lastName: 'Msr', firstName: 'Java', age: 31 },
    { id: 3, lastName: 'Msr', firstName: 'Algorithm', age: 31 },
    { id: 4, lastName: 'Msr', firstName: 'Langage C', age: 11 },
    { id: 5, lastName: 'Msr', firstName: 'System Logique', age: 40 },
    { id: 6, lastName: 'Mme', firstName: 'Dev Mobile', age: 150 },
    { id: 7, lastName: 'Mme', firstName: 'Dev Web', age: 44 },
    { id: 8, lastName: 'Mme', firstName: 'Dev Desktop', age: 36 },
    { id: 9, lastName: 'Mme', firstName: 'Dev Fron-End', age: 65 },
  ];
  const handelFile =async(e) =>{
    try{
      const formData = new FormData();
      formData.append("file", cover);

      const response = await axios.post(
        "http://localhost:4000/upload",
        formData
    )
  console.log(response);}
    catch(error){
      console.log(error);
    }

  }
  return (
    <div>
      <input type="file" onChange={(e) => handleChange(e)}></input>
      <Box sx={{ height: 400, width: '100%' }}>
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

export default Courses;





 
   
  