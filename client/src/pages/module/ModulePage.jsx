import React, { useEffect } from "react";
import TablePage from "../../components/table/view/table-view";
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import {useSelector,useDispatch} from "react-redux"
import { fetchmodules } from "../../store/modules";

function ModulePage() {
  const modules = useSelector(state=>state.modules.modules.items)
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(fetchmodules())
},[dispatch])

  return <TablePage btnTitle={"Add Module"}  icon={<ViewInArOutlinedIcon/>} titlePage={"Modules"} modules={modules}/>;
}

export default ModulePage;
