import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";

import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import TablePage from "../../components/table/view/table-view";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useDispatch } from "react-redux";
import KeepMountedModal from "../../components/Modals/Modal";




function SessionStudents() {

  const [cover, setCover] = useState(null);
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");


  const handleDeleteProgramme = async () => {
    try {
      if (id ) {
        dispatch(deleteProgramme(id));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleDeleteProgramme();
  }, [id]);


 
  const dispatch = useDispatch();
  useEffect(() => {
  
  }, [dispatch]);

  useEffect(() => {
   
  }, []);

  const columns = [
    { field: "id", headerName: "malek", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 50,
      editable: true,
    },
    {
      field: "description",
      headerName: "Desription",
      width: 140,
      editable: false,
    },

    {
      headerName: "Category",
      type: "number",
      width:400,
      editable: true,
      valueGetter: (value, row) => {
        return row?.Category.name;
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

 
  return (

    <>
      <TablePage
        goToOne={true}
        btnTitle={"Add Student"}
        icon={<AccountBoxIcon />}
        titlePage={"Students List"}
        setOpen={setOpen}
        programmes={[]}
        setId={setId}
      />
      <KeepMountedModal
        open={open}
        setOpen={setOpen}
        Body={""}
      /> 
    </>
  );
}

export default SessionStudents

