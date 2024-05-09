import React, { useEffect } from "react";
import TablePage from "../../components/table/view/table-view";
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';


function ModulePage() {
  // change the title page
  // useEffect(() => {
  //   document.title = "Alimny Modules";
  // }, []);

  return <TablePage btnTitle={"Add Module"}  icon={<ViewInArOutlinedIcon/>} titlePage={"Modules"}/>;
}

export default ModulePage;
