import { createSlice } from '@reduxjs/toolkit';
export const trabajadoresSlice = createSlice({
name: 'trabajadores',
initialState: {
    isLoading: false,
    trabajadores:[],
    trabajadorActual:{}
},
reducers: {
onStartLoading: (state, /* action */ ) => {
    state.isLoading= true;
},
onTrabajadoresLoaded:(state,{payload})=>{
    console.log(payload);
    state.isLoading= false;
    state.trabajadores= payload;
}
}
});
// Action creators are generated for each case reducer function
export const { onStartLoading, onTrabajadoresLoaded } = trabajadoresSlice.actions;