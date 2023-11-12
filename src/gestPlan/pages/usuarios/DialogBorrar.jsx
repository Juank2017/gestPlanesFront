import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material"
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { useUsersStore } from "../../../hooks/useUsersStore";
import { useUiStore } from "../../../hooks/useUiStore";
export const DialogBorrar = () => {

  const { isDialogBorrarOpen, valueEditar } = useSelector((state) => state.ui);
  const {deleteUser } = useUsersStore();
  const { closeDialogBorrar } = useUiStore();
    const handleCancel = () => {
      console.log(event);
      closeDialogBorrar();
      };
    
      const handleOk = () => {
       deleteUser(valueEditar);
      };
  return (
   <>
    <Dialog open={isDialogBorrarOpen}>
        <DialogTitle>Confirmación de borrado</DialogTitle>
        <DialogContent>
          <Typography>¿Está seguro de borrar el usuario?</Typography>
        </DialogContent>
        <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk}>Ok</Button>
        </DialogActions>
      </Dialog>
   </>
  )
}
