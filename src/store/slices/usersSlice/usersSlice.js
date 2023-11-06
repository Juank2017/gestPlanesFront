import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    usuarios: {},
    roles: [],
    usuarioActual: {
      userName: "",
      enabled: false,
      rol: "",
    },
    mensaje: ""
  },
  reducers: {
    onStartLoading: (state) => {
      state.isLoading = true;
      state.usuarios = {};
      state.roles = [];
      state.usuarioActual = {
        userName: "",
        enabled: false,
        rol: "",
      };
      state.mensaje= "";
    },
    onUsersLoaded: (state,  payload ) => {
     console.log(payload.payload);
        state.isLoading = false;
        state.usuarios = payload.payload.usuarios;
        state.roles=payload.payload.roles;
        state.usuarioActual = {
          userName: "",
          enabled: false,
          rol: "",
        };
        state.mensaje= payload.payload.mensaje;
    },
    onSelectUser:(state, { payload })=>{
        state.isLoading = false;
        state.usuarios = payload.usuarios;
        state.usuarioActual = payload.usuarioActual;
    },
    onDeleteUser:(state,{ payload})=>{
      console.log(payload);
      
      state.mensaje = payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { onStartLoading , onSelectUser , onUsersLoaded, onDeleteUser } = usersSlice.actions;
