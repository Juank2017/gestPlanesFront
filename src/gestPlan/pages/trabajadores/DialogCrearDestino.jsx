import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useUiStore } from "../../../hooks/useUiStore";
import { useSelector } from "react-redux";
import { planesAPI } from "../../../API/planesAPI";


export const DialogCrearDestino = ({idOrganismo}) => {

  const { isDialogDestinoOpen, nuevoDestino } = useSelector(
    (state) => state.ui
  );
  const { cambiaValorDestino,closeDialogDestino,openSnackBar } = useUiStore();
  const changeValues=({target})=>{
    console.log(target);
    console.log(target.value);
    cambiaValorDestino({...nuevoDestino,destino: target.value.toUpperCase()})
  }
  const handleCancel= ()=>{
    closeDialogDestino();
  }
  const handleOk = ()=>{
    console.log(idOrganismo)
    try {
        planesAPI.get(`/existeDestino/${idOrganismo}/${nuevoDestino.destino}`).then(({data})=>{
            if (data.payload[0]  ){
                openSnackBar(data.mensaje);
                //Swal.fire(data.mensaje, errorMessage, 'error');
              }else{
                
                planesAPI.post(`/crearDestino/${idOrganismo}/${nuevoDestino.destino}`).then(({data})=>{
                    openSnackBar(data.mensaje);
                    closeDialogDestino();
                })
               
              }
            })
    
    } catch (error) {
        console.log(error);
    }
    
  }
  return (
    <>
      <Dialog open={isDialogDestinoOpen}>
        <DialogTitle>
          <Typography>Nuevo destino</Typography>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField
              name="nuevoDestino"
              
              type="text"
              label="Nuevo destino"
              value={nuevoDestino?.destino }
              onChange={changeValues}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleOk}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
