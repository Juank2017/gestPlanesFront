import { useDispatch, useSelector } from "react-redux"
import { onChangeValues, onCloseDialogEditar, onCloseSnackBar, onOpenDialogBorrar, onOpenDialogEditar, onOpenSnackBar,onCloseDialogBorrar } from "../store/slices/ui/uiSlice";



export const useUiStore = ()=>{

    const { isSnackBarOpen,mensajeSnackBar} = useSelector(state => state.ui);
    const { valueEditar}= useSelector(state=>state.users);
    const dispatch= useDispatch();

    const openSnackBar = (mensajeSnackBar) => {
        dispatch( onOpenSnackBar({mensajeSnackBar: mensajeSnackBar} ))
    };

    const closeSnackBar = () => {
        dispatch( onCloseSnackBar() )
    }

    const toggleSnackBar = () => {
        (isSnackBarOpen)
            ? closeSnackBar()
            : onOpenSnackBar();
    }
    
    const openDialogEditar=(values)=>{
        
        dispatch(onOpenDialogEditar(values));

    } 
    const closeDialogEditar = ()=>{
        dispatch(onCloseDialogEditar());
    }
    const cambiaValores = (values)=>{
      
        dispatch(onChangeValues(values))
    } 

    const openDialogBorrar =(values)=>{
        dispatch(onOpenDialogBorrar({valueEditar: values}));
    }

    const closeDialogBorrar = ()=>{
        dispatch(onCloseDialogBorrar());
    }


    

    return {
        openSnackBar,
        closeSnackBar,
        toggleSnackBar,
        isSnackBarOpen,
        mensajeSnackBar,
        openDialogEditar,
        openDialogBorrar,
        closeDialogEditar,
        valueEditar,
        closeDialogBorrar,
        cambiaValores
    }
}