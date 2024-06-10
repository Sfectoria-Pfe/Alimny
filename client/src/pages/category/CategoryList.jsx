
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import TableRow from "../../components/table/user-table-row";
import TablePage from "../../components/table/view/table-view";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import { useSelector, useDispatch } from "react-redux";


import KeepMountedModal from "../../components/Modals/Modal";
import AddCategory from "./AddCategory";
import { fetchcategories } from "../../store/category";

function CategoryList() {
    const categories = useSelector((state) => state?.category?.categories?.items);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    useEffect(() => {
      dispatch(fetchcategories());
    }, [dispatch]);
  
    return (
      <>
        <TablePage
          goToOne={true}
          btnTitle={"Add Category"}
          icon={<CategoryOutlinedIcon />}
          titlePage={"Category"}
          categories={categories}
          setOpen={setOpen}
        />
        <KeepMountedModal open={open} setOpen={setOpen} Body={AddCategory} />
      </>)
}

export default CategoryList
