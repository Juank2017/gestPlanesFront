import { useDispatch, useSelector } from "react-redux";

import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/slices/atuhSlice/authSlices";

import { planesAPI } from "../API/planesAPI";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let rolesUsuario = [];
  const startLogin = async ({ userName, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await planesAPI.post("/login", { userName, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("refreshTtoken", data.refreshToken);
      localStorage.setItem("token-init-date", new Date().getTime());

      data.roles.forEach((rol) => {
        rolesUsuario.push(rol.authority);
      });
      localStorage.setItem("user", data.userName);
      localStorage.setItem("roles", rolesUsuario);
      dispatch(onLogin({ name: data.userName, roles: rolesUsuario }));
      // redirect('/');
    } catch (error) {
      console.log(error);
      dispatch(onLogout(error.response.data.mensaje));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startRegister = async ({ email, password, name }) => {
    dispatch(onChecking());
    try {
      const { data } = await planesAPI.post("/auth/new", {
        email,
        password,
        name,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      dispatch(onLogout(error.response.data?.msg || "--"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout());
    const userName = localStorage.getItem("user");
    const roles = localStorage.getItem("roles");
    if (!userName || !roles) return dispatch(onLogout());

    
    try {
        const params ={
          token,
          userName
        }
        const { data } = await planesAPI.post('/checkToken',params);
        if(data.estado == 'FORBBIDEN'){
          localStorage.clear();
          dispatch( onLogout() );
        }else{
          dispatch(onLogin({ name: userName, roles: roles.split(",") }));
        }
        
        
    } catch (error) {
        localStorage.clear();
        dispatch( onLogout() );
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  return {
    //* Propiedades
    errorMessage,
    status,
    user,

    //* Métodos

    startLogin,
    startLogout,
    startRegister,
    checkAuthToken,
  };
};
