import { useEffect, useState } from "react";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import TablePage from "../components/table/view/table-view";
import { useDispatch, useSelector } from "react-redux";
import { fetchusers } from "../store/users";
import CustomModal from "../components/Modals/CustomModal"; // Assurez-vous que le chemin est correct
import SignUp from "../components/Signup";

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.users?.users.items);

  const [open, setOpen] = useState(false);
  useEffect(() => {
    dispatch(fetchusers());
  }, [dispatch]);

  return (
    <>
      <CustomModal open={open} setOpen={setOpen}>
        <SignUp />
      </CustomModal>
      <TablePage
        setOpen={setOpen}
        btnTitle={"Ajouter un utilisateur"}
        icon={<ManageAccountsOutlinedIcon />}
        titlePage={"Utilisateurs"}
        users={users}
      />
    </>
  );
}

export default Users;
