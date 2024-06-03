import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { deleteProgramme, fetchprogrammes } from "../../store/programme";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import TablePage from "../../components/table/view/table-view";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import KeepMountedModal from "../../components/Modals/Modal";
import { fetchcategories } from "../../store/category";
import AddProgramme from "./AddProgramme";

function ProgrammeList() {
  const [cover, setCover] = useState(null);
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");


  const handleDeleteProgramme = async () => {
    try {
      if (id) {
        dispatch(deleteProgramme(id));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleDeleteProgramme();
  }, [id]);

  const programmes = useSelector(
    (state) => state.programmeSlice?.programmes?.items
  );
  const categories = useSelector((state) => state.category?.categories?.items);
  console.log(programmes, "this is programmes");
  console.log(categories, "this is categories");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchprogrammes());
    dispatch(fetchcategories());
  }, [dispatch]);

  useEffect(() => {
    setRows(programmes);
  }, [programmes]);

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

    <>
      <TablePage
        goToOne={true}
        btnTitle={"Add Programme"}
        icon={<BorderColorOutlinedIcon />}
        titlePage={"Programmes"}
        setOpen={setOpen}
        programmes={programmes}
        setId={setId}
      />
      <KeepMountedModal
        open={open}
        setOpen={setOpen}
       
        Body={AddProgramme}
      />
    </>
  );
}

export default ProgrammeList;
