import { useDispatch, useSelector } from "react-redux";
import {
  onSelectUser,
  onStartLoading,
  onUsersLoaded,
  onStartFetchUser
} from "../store/slices/usersSlice";
import Swal from 'sweetalert2';
import { useCallback, useState } from "react";

import { useAuthStore } from "./useAuthStore";
import { useUiStore } from "./useUiStore";

import { planesAPI } from "../API/planesAPI";
import { onCloseDialogCrear, onOpenSnackBar } from "../store/slices/uiSlice";

export const useUsersStore = () => {

  const { isLoading, usuarios, roles, usuarioActual, mensaje } = useSelector(
    (state) => state.users
  );

  const { openSnackBar, closeDialogEditar, closeDialogBorrar, openDialogEditar,closeDialogCrear } = useUiStore();
  const { startLogout } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditar, setIsOpenEditar] = useState(false);
  const dispatch = useDispatch();

  const [value, setValue] = useState();


  const startLoading = async () => {

    dispatch(onStartLoading());

    try {

      const { data } = await planesAPI.get("/usuarios"
      );

      const usuarios = data.payload[0].filter(
        (u) => u.deleted === false && u.userName != "admin"
      );

      const mensaje = data.mensaje;

      usuarios.forEach((element) => {

        let roles = "";
        element.roles.forEach((element1) => {
          roles = roles + element1.roleName + " ";
        });
        element.roles = roles;
      });

      const roles = data.payload[1];

      dispatch(onUsersLoaded({ usuarios, roles, mensaje }));
    } catch (error) {
      console.log(error);
     // const response = error.response.data;

    }
  };


  const deleteUser = async ({ id }) => {

    try {
      const respuesta = await planesAPI

        .delete(`/borraUsuario/${id}`)
        .then((datos) => {

          closeDialogBorrar();

          openSnackBar(datos.data.mensaje);

          startLoading();
        });

    } catch (error) {
      console.log(error);
      const response = error.response.data;
    }
  };

  const fetchUser = (id) => {

    return async (dispatch, getState) => {

      dispatch(onStartFetchUser())

      try {
        const { data } = await planesAPI.get(`/usuario/${id}`)

        let element = data.payload[0];
       
        let roles = "";
       
        element.roles.forEach((element1) => {
          roles = roles + element1.roleName + " ";
        });
       
        element.roles = roles;
       
        dispatch(onSelectUser(element));
       
        const { users } = getState();

        openDialogEditar(users.usuarioActual)

      } catch (error) {
        console.log(error)
      }
    }

  }


  const editUser = async (values) => {
    const token = localStorage.getItem("token");
    try {

      const respuesta = await planesAPI
        .put('/actualizaUsuario', values,)
        .then((datos) => {

          closeDialogEditar()

          openSnackBar(datos.data.mensaje);

          startLoading();
        });

    } catch (error) {
      console.log(error);

    }
  }

  const existeUsuario = async (values)=>{

    console.log(values);
    const {userName} = values;
    try {

      //comprobar si existe el usuario
      const respuesta = await planesAPI.get(`/existeUsuario/${userName}`).then(
        ({data})=>{
          console.log(data.payload[0]);
          if (data.payload[0]  ){
            openSnackBar(data.mensaje);
            //Swal.fire(data.mensaje, errorMessage, 'error');
          }else{
            crearUsuario(values);
           
          }
        }
      )
      
    } catch (error) {
      
    }

  }

  const crearUsuario = async (values)=>{
    
      try {
        const {data} = await planesAPI.post('crearUsuario',values);
          
          
          closeDialogCrear();
          openSnackBar(data.mensaje);
      
         startLoading();
  

      
  
      } catch (error) {
        
      }
    }
  
  

  // const startDeleting = useCallback(
  //   (id) => () => {

  //     setIsOpen(true);
     
  //     setValue(id);

  //   },
  //   []
  // );

  return {
    isLoading,
    usuarios,
    roles,
    usuarioActual,
    mensaje,
    startLoading,
    editUser,
    deleteUser,
    crearUsuario,
    existeUsuario,
    value,
    isOpen,
    setIsOpen,
    isOpenEditar,
    setIsOpenEditar,
    fetchUser
  };
};
