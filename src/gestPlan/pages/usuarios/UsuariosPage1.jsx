import { useCallback, useEffect } from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Close, Delete, Edit } from "@mui/icons-material";
import { useUsersStore } from "../../../hooks/useUsersStore";
import {
  IconButton,
  LinearProgress,
  Snackbar,
  Typography,
} from "@mui/material";
import { DialogBorrar } from "./DialogBorrar";

import { useUiStore } from "../../../hooks/useUiStore";
import { DialogEditar } from "./DialogEditar";

export const UsuariosPage = () => {
  const {
    isSnackBarOpen,
    closeSnackBar,
    mensajeSnackBar,
    openDialogEditar,
    valueEditar,
  } = useUiStore();
  const {
    startEditting,
    startLoading,
    startDeleting,
    isLoading,
    usuarios,
    roles,
    deleteUser,
    value,
    isOpen,
    setIsOpen,
    isOpenEditar,
    setIsOpenEditar,
  } = useUsersStore();

  useEffect(() => {
    startLoading();
  }, []);

  const handleClose = (value) => {
    setIsOpen(false);
    if (value) {
      deleteUser(value);
    }
  };
  const handleCloseEditar = (value) => {
    setIsOpenEditar(false);
    if (value) {
      deleteUser(value);
    }
  };

  const editUser = useCallback(
    (params) => {
      openDialogEditar(params);
    },
    [valueEditar],
  )
  

  const handleCloseSnack = (reason, event) => {
    console.log(reason);
    console.log(event);
    if (reason === "clickaway") {
      return;
    }
    closeSnackBar();
  };
  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnack}
      >
        <Close fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <>
      <Grid2 container justifyContent={"center"}>
        <Grid2>
          <Typography>Lista de usuarios</Typography>
          <DataGrid
            columns={[
              { field: "id", headerName: "ID" },
              {
                field: "userName",
                headerName: "Nombre de usuario",
                width: 200,
              },
              { field: "enabled", type: "boolean", headerName: "Activo" },
              { field: "roles", headerName: "Rol", width: 300 },
              {
                field: "actions",
                type: "actions",
                getActions: (params) => [
                  <GridActionsCellItem
                    icon={<Edit color={"success"} />}
                    label="Editar usuario"
                    onClick={editUser(params.row)}
                    key={params.id}
                  />,
                  <GridActionsCellItem
                    icon={<Delete color={"error"} />}
                    label="Borrar usuario"
                    onClick={startDeleting(params.id.toString())}
                    key={params.id}
                  />,
                ],
              },
            ]}
            rows={
              usuarios || [
                {
                  id: 1,
                  enabled: true,
                  deleted: false,
                  userName: undefined,
                  roles: undefined,
                },
              ]
            }
            slots={{
              loadingOverlay: LinearProgress,
            }}
            loading={isLoading}
            rowHeight={25}
            disableRowSelectionOnClick
          ></DataGrid>
        </Grid2>
      </Grid2>
      <DialogBorrar
        open={isOpen}
        onClose={handleClose}
        value={value}
      ></DialogBorrar>
      {(isOpenEditar) ? (
        <>
          <DialogEditar
            open={isOpenEditar}
            onClose={handleCloseEditar}
            value={valueEditar || {}}
          ></DialogEditar>
        </>
      ) : (
        <></>
      )}

      <Snackbar
        open={isSnackBarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
        message={mensajeSnackBar}
        action={action}
      />
    </>
  );
};
