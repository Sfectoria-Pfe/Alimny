import { useEffect } from "react";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import TablePage from "../components/table/view/table-view";
import { useDispatch, useSelector } from "react-redux";
import { fetchusers } from "../store/users";

function Users() {
  const users = useSelector((state) => state?.users?.users.items);
  console.log("those are users",users)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchusers());
  }, [dispatch]);
  return (
    <TablePage
      btnTitle={"Add user"}
      icon={<ManageAccountsOutlinedIcon />}
      titlePage={"Users"}
      users={users}
    />
  );
}

export default Users;
