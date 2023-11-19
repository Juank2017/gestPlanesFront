import { onSalarioLoaded } from "../store/slices/contratoSlice"

import { planesAPI } from "../API/planesAPI";
import { useDispatch } from "react-redux";

export const useContratoStore = ()=>{

    

    const dispatch = useDispatch();

    const cargarSalarios = async (idPlan)=>{

        try {

            const { data } = await planesAPI.get(`/salario/${idPlan}`);
            console.log(data);
            dispatch(onSalarioLoaded(data.payload))
            
        } catch (error) {
            
        }
    }
    
    return {
        cargarSalarios
    }
}