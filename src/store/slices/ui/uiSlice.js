import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isSnackBarOpen: false,
        mensajeSnackBar: "",
        isDialogEditarOpen: false,
        isDialogBorrarOpen: false,
        isDialogCrearOpen: false,
        valueEditar:{
            deleted:false,
            enabled: false,
            id: "",
            roles: "",
            userName: "",
            password:"",
        },
    },
    reducers: {
        onOpenSnackBar:(state,{payload})=>{
            console.log(payload);
            state.isSnackBarOpen = true;
            state.mensajeSnackBar = payload.mensajeSnackBar;
        },
        onCloseSnackBar:(state)=>{
            state.isSnackBarOpen= false;
            state.mensajeSnackBar = "";
        },
        onOpenDialogEditar:(state,{payload})=>{
            console.log(payload);
            state.isSnackBarOpen= false;
            state.mensajeSnackBar = "";
            state.isDialogEditarOpen= true;
            state.valueEditar= payload;

        },
        onCloseDialogEditar:(state)=>{
            state.isSnackBarOpen= false;
            state.mensajeSnackBar = "";
            state.isDialogEditarOpen= false;
            state.valueEditar= {deleted:false,
                enabled: undefined,
                id: "",
                roles: "",
                userName: ""};            
        },
       onOpenDialogBorrar:(state,{payload})=>{
        state.isSnackBarOpen= false;
        state.mensajeSnackBar= "";
        state.isDialogEditarOpen= false;
        state.isDialogBorrarOpen= true;
        state.valueEditar=payload.valueEditar; 
       },
       onCloseDialogBorrar:(state)=>{
        state.isSnackBarOpen= false;
        state.mensajeSnackBar= "";
        state.isDialogEditarOpen= false;
        state.isDialogBorrarOpen= false;
        state.valueEditar={
            deleted:false,
            enabled: undefined,
            id: "",
            roles: "",
            userName: ""
        };         
       },
       onOpenDialogCrear:(state)=>{
        state.isSnackBarOpen= false;
        state.mensajeSnackBar= "";
        state.isDialogEditarOpen= false;
        state.isDialogBorrarOpen= false;
        state.isDialogCrearOpen= true;
       // state.valueEditar=payload.valueEditar; 
       },
       onCloseDialogCrear:(state)=>{
        state.isSnackBarOpen= false;
        state.mensajeSnackBar= "";
        state.isDialogEditarOpen= false;
        state.isDialogBorrarOpen= false;
        state.isDialogCrearOpen= false;
        state.valueEditar={
            deleted:false,
            enabled: undefined,
            id: "",
            roles: "",
            userName: ""
        };         
       },       
        onChangeValues:(state,{payload})=>{
            console.log(payload);
            // state.isSnackBarOpen= false;
            // state.mensajeSnackBar = "";
            // state.isDialogEditarOpen= true;
            state.valueEditar= payload; 
            
        }



    }
});


// Action creators are generated for each case reducer function
export const { 
    onCloseSnackBar,
    onOpenSnackBar,
    onOnChangeRoles,
    onCloseDialogEditar,
    onOpenDialogEditar,
    onChangeValues,
    onOpenDialogBorrar,
    onCloseDialogBorrar,
    onOpenDialogCrear,
    onCloseDialogCrear
     } = uiSlice.actions;