import { useEffect, useState } from "react";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import TablePage from "../components/table/view/table-view";
import { useDispatch, useSelector } from "react-redux";
import { fetchusers } from "../store/users";
import KeepMountedModal from "../components/Modals/Modal";
import AddUser from "./user/view/AddUser";

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.users?.users.items);

  const [open, setOpen] = useState(false);
  useEffect(() => {
    dispatch(fetchusers());
  }, [dispatch]);
  return (
    <>
      <KeepMountedModal open={open} setOpen={setOpen} Body={AddUser} />
      <TablePage
        // goToOne
        setOpen={setOpen}
        btnTitle={"Add user"}
        icon={<ManageAccountsOutlinedIcon />}
        titlePage={"Users"}
        users={users}
      />
    </>
  );
}

export default Users;
