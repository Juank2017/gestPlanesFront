import { useCallback, useEffect } from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { useUsersStore } from "../../../hooks/useUsersStore";
import { IconButton, LinearProgress, Snackbar, Typography, Button } from "@mui/material";
import  Close  from "@mui/icons-material/esm/Close";
import { TablaUsuarios } from "./TablaUsuarios";
import { useUiStore } from "../../../hooks/useUiStore";
import { DialogBorrar } from "./DialogBorrar";
import { DialogEditar } from "./DialogEditar";

export const UsuariosPage = () => {
  const {
    isSnackBarOpen,
    closeSnackBar,
    mensajeSnackBar,
    openDialogEditar,
    valueEditar,
    isDialogEditarOpen
  } = useUiStore();
  const { startLoading, usuarios } = useUsersStore();
  useEffect(() => {
    console.log("useeff");
    startLoading();
  }, []);


  
  // const handleClose = (value) => {
  //   setIsOpen(false);
  //   if (value) {
  //     deleteUser(value);
  //   }
  // };


  const editUser = useCallback(
    (params) => {
      openDialogEditar(params);
    },
    [],
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
  const tabla = (usuarios) => {
    if (usuarios.length > 0) {
      return <TablaUsuarios usuarios={usuarios} />;
    }
    return <LinearProgress />;
  };
  return (
    <>
      <Grid2 container justifyContent={"center"} marginx={"auto"}>
        <Grid2>
          <Grid2 mb={1} display={'flex'} direction={'row'} justifyContent={'space-between'}>

          <Typography variant={"h5"} mb={2}>Listado de usuarios.</Typography>
          <Button size="small"  color={'primary'}> Nuevo usuario</Button>
          </Grid2>
          {tabla(usuarios)}
        </Grid2>
      </Grid2>
      <DialogBorrar

      ></DialogBorrar>
           
                     <DialogEditar
                      
                     
                      
                     />
                   

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
