import { useState } from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Iconify from "../../iconify";
import Scrollbar from "../../scrollbar";
import TableNoData from "../table-no-data";
import TableRow from "../user-table-row";
import UserTableHead from "../user-table-head";
import TableEmptyRows from "../table-empty-rows";
import UserTableToolbar from "../user-table-toolbar";
import { emptyRows, applyFilter, getComparator } from "../utils";
import { useSelector } from "react-redux";

export default function TablePage({
  btnTitle,
  goToOne,
  icon,
  titlePage,
  setOpen,
  programmes,
  courses,
  users,
  setId,
  modules,
  sessions,
  setUpdate,
  update,
  thisIsModule,
  categories,
  teachers,
  students,

}) {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState("name");
  const [filterName, setFilterName] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const me = useSelector((state) => state.auth?.me);
  const roles2 = ["manager", "admin"];

console.log(students)

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(id);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: teachers || students  || programmes || courses || users || modules || categories || [],
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" className="mx-3">
          {icon} {titlePage}
        </Typography>

       { roles2.includes(me?.role) &&<Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
          sx={{ bgcolor: "#6635df" }}
          onClick={() => setOpen(true)}
        >
          {btnTitle}
        </Button>}
      </Stack>

      <Card>
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: "unset" }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                setId={setId}
                order={order}
                orderBy={orderBy}
                rowCount={(programmes || courses || users || modules ||categories || students || []).length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={
                  users ? [
                    { id: "fullName", label: "Full Name" },
                    { id: "role", label: "Role" },
                    { id: "email", label: "Email" },
                  ] : categories? [{id:"name",label : "Name"}]: [
                    { id: "name", label: "Name" },
                    { id: "description", label: "Description" },
                    modules ? { id: "Programme", label: "Programme" } : sessions ? {} : students ?  [{
                      id : "fullName" , label : "Full Name"
                    }]: { id: "category", label: "Category" },
                  ].filter(Boolean)
                }
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    console.log(row,"this is the row wey");
                    return (
                      <TableRow
                        goToOne={goToOne}
                        setId={setId}
                        key={row?.id}
                        name={row?.name}
                        role={row?.role}
                        fullName={row?.fullName}
                        email={row?.email}
                        id={row?.id}
                        description={row?.description}
                        category={row?.Category?.name}
                        Programme={row?.programmemodule?.[0]?.Programme?.name}
                        avatarUrl={row?.avatarUrl}
                        selected={selected.indexOf(row.name) !== -1}
                        handleClick={(event) => handleClick(event, row.name)}
                        setUpdate={setUpdate}
                        update={update}
                        thisIsModule={thisIsModule}
                        modules={modules}
                        courses={courses}
                        students = {students}
                      />
                    );
                  })}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, (programmes || []).length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={(programmes || courses || users || modules || []).length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
