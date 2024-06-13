import { useEffect, useState } from "react";
import TablePage from "../components/table/view/table-view";
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import {useSelector,useDispatch} from "react-redux"
import { fetchsessions } from "../store/sessions";
import KeepMountedModal from "../components/Modals/Modal";
import AddProgramme from "./programmes/AddProgramme";
import AddSession from "./AddSession";
function Session() {
const sessions = useSelector(state=>state?.sessions?.sessions?.items)
const [open, setOpen] = useState(false);
const dispatch = useDispatch()

console.log(sessions)

useEffect(()=>{
  dispatch(fetchsessions())
},[dispatch])
  return (
  <>
    <TablePage btnTitle={"Add Session"} icon={ <ViewInArOutlinedIcon/> } titlePage={"Session"} sessions={sessions}  open={open}
        setOpen={setOpen}/>
    <KeepMountedModal
        open={open}
        setOpen={setOpen}
       
        Body={AddSession}
      />
  </>
  );
}

export default Session;





 
   
  