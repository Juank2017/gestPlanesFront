import { useDispatch, useSelector } from "react-redux"
import { planesAPI } from "../API/planesAPI";
import { onTrabajadoresLoaded } from "../store/slices/trabajadoresSlice";


export const useTrabajadoresStore = ()=>{
    const dispatch = useDispatch();
    const {onStartLoading,isLoading,trabajadores,tratrabajadorActual} = useSelector(state=> state.trabajadores)

    const startLoading=()=>{
        dispatch(onStartLoading());
    }

    const loadTrabajadores = ()=>{
        const idPlan = localStorage.getItem("idPlan");
        planesAPI.get(`/ciudadanos/${idPlan}`).then(({data})=>{
            console.log(data);
            dispatch(onTrabajadoresLoaded(data.payload))

        })
    }

    return {
        startLoading,
        loadTrabajadores,
        isLoading,
        trabajadores,
        tratrabajadorActual

    }
}