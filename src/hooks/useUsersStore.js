import { useDispatch, useSelector } from "react-redux";
import {
  onStartLoading,
  onUsersLoaded,
} from "../store/slices/usersSlice/usersSlice";
import { planesAPI } from "../API/planesAPI";
import { useCallback, useState } from "react";

import { useAuthStore } from "./useAuthStore";
import { useUiStore } from "./useUiStore";

export const useUsersStore = () => {
  const { isLoading, usuarios, roles, usuarioActual, mensaje } = useSelector(
    (state) => state.users
  );

  const { openSnackBar,closeDialogEditar,closeDialogBorrar } = useUiStore();
  const { startLogout } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditar, setIsOpenEditar] = useState(false);
  const dispatch = useDispatch();

  const [value, setValue] = useState();
  const startLoading = async () => {
    dispatch(onStartLoading());
    const token = localStorage.getItem("token");
    try {
      const { data } = await planesAPI.get("/usuarios", {
        headers: { Authorization: `Bearer ${token}` },
      });
      
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
      const response = error.response.data;

      if (
        response.estado === "UNAUTHORIZED" ||
        response.estado === "FORBIDDEN"
      ) {
        const refreshToken = localStorage.getItem("refreshTtoken");
        console.log(refreshToken);
        const { data } = await planesAPI.post("/refreshtoken", {
          refreshToken,
        });
        console.log(data);
        if (data.mensaje.includes("no se encuentra")) {
          startLogout();
        }
        console.log(data);
        localStorage.setItem("token", data.token);
      }
    }
  };

  const deleteUser = async ({id}) => {
    const token = localStorage.getItem("token");
    try {
      const respuesta = await planesAPI
        .delete(`/borraUsuario/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((datos) => {
          console.log("llega aqui");
          console.log(datos);
          closeDialogBorrar();
          openSnackBar(datos.data.mensaje);
          startLoading();
        });
      console.log(respuesta);

      // console.log(mensaje)
      // console.log("pasaba por aqui")

      // if (mensaje) return mensaje;
    } catch (error) {
      console.log(error);
      const response = error.response.data;

      if (
        response.estado === "UNAUTHORIZED" ||
        response.estado === "FORBIDDEN"
      ) {
        const refreshToken = localStorage.getItem("refreshTtoken");
        console.log(refreshToken);
        const { data } = await planesAPI.post("/refreshtoken", {
          refreshToken,
        });
        if (data.mensaje.includes("no se encuentra")) {
          startLogout();
        }
        console.log(data);
        localStorage.setItem("token", data.token);
      }
    }
  };

  const editUser= async(values)=>{
    const token = localStorage.getItem("token");
    try {
    console.log(token);
      const respuesta = await planesAPI
        .put('/actualizaUsuario',values, )
        .then((datos) => {
          console.log("llega aqui");
          console.log(datos);
          closeDialogEditar()
          openSnackBar(datos.data.mensaje);
          
          startLoading();
        });
      console.log(respuesta);

      // console.log(mensaje)
      // console.log("pasaba por aqui")

      // if (mensaje) return mensaje;
    } catch (error) {
      console.log(error);
      const response = error.response.data;

      // if (
      //   response.estado === "UNAUTHORIZED" ||
      //   response.estado === "FORBIDDEN"
      // ) {
      //   const refreshToken = localStorage.getItem("refreshTtoken");
      //   console.log(refreshToken);
      //   const { data } = await planesAPI.post("/refreshtoken", {
      //     refreshToken,
      //   });
      //   if (data.mensaje.includes("no se encuentra")) {
      //     startLogout();
      //   }
      //   console.log(data);
      //   localStorage.setItem("token", data.token);
      // }
    }
  }


  const startDeleting = useCallback(
    (id) => () => {
      console.log(id);
      setIsOpen(true);
      setValue(id);
      console.log(isOpen);
    },
    []
  );

  return {
    isLoading,
    usuarios,
    roles,
    usuarioActual,
    mensaje,
    startLoading,
    editUser,
    deleteUser,
    startDeleting,
    value,
    isOpen,
    setIsOpen,
    isOpenEditar,
    setIsOpenEditar,
  };
};
