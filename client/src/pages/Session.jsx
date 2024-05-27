import { useEffect } from "react";
import TablePage from "../components/table/view/table-view";
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import {useSelector,useDispatch} from "react-redux"
import { fetchsessions } from "../store/sessions";
function Session() {
const sessions = useSelector(state=>state?.sessions?.sessions?.items)
const dispatch = useDispatch()


useEffect(()=>{
  dispatch(fetchsessions())
},[])
  return (
  
    <TablePage btnTitle={"Add Session"} icon={ <ViewInArOutlinedIcon/> } titlePage={"Session"} sessions={sessions}/>
  );
}

export default Session;





 
   
  