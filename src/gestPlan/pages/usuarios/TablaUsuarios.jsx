import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
} from "@mui/material";

import { CabeceraTablaUsuarios } from "./CabeceraTablaUsuarios";
import { FilasTablaUsuarios } from "./FilasTablaUsuarios";
import { useState } from "react";
export const TablaUsuarios = ({ usuarios }) => {
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    console.log("entra changerowsperpage");
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const headCells = [
    {
      id: "id",
      numeric: true,
      disablePadding: false,
      label: "ID",
    },
    {
      id: "userName",
      numeric: false,
      disablePadding: false,
      label: "Nombre de usuario",
    },
    {
      id: "enabled",
      numeric: false,
      disablePadding: false,
      label: "Activo",
    },
    {
      id: "roles",
      numeric: false,
      disablePadding: false,
      label: "Rol",
    },
    {
      id: "acciones",
      numeric: false,
      disablePadding: false,
      label: "Acciones",
    },
  ];
  return (
    <>
      <TableContainer component={Paper}>
        <Table size="small">
          <CabeceraTablaUsuarios
            checkBox={false}
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            //onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={usuarios.length}
            headCells={headCells}
          />

          <TableBody>
            <FilasTablaUsuarios
              order={order}
              orderBy={orderBy}
              page={page}
              rowsPerPage={rowsPerPage}
              usuarios={usuarios}
            />
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={usuarios.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};
