import React, { useEffect, useState } from "react";
import TablePage from "../../components/table/view/table-view";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import { useSelector, useDispatch } from "react-redux";
import { fetchmodules } from "../../store/modules";
import KeepMountedModal from "../../components/Modals/Modal";
import AddModule from "./AddModule";

function ModulePage() {
  const modules = useSelector((state) => state.modules.modules.items);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    dispatch(fetchmodules());
  }, [dispatch]);

  return (
    <>
      <TablePage
        setOpen={setOpen}
        btnTitle={"Add Module"}
        icon={<ViewInArOutlinedIcon />}
        titlePage={"Modules"}
        modules={modules}
        goToOne
      />
      <KeepMountedModal open={open} setOpen={setOpen} Body={AddModule} />
    </>
  );
}

export default ModulePage;
