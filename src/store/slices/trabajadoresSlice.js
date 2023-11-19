import { createSlice } from '@reduxjs/toolkit';
export const trabajadoresSlice = createSlice({
name: 'trabajadores',
initialState: {
    trabajadores:[],
    trabajadorActual:{}
},
reducers: {
reducer: (state, /* action */ ) => {
},
}
});
// Action creators are generated for each case reducer function
export const { /*action */ } = trabajadoresSlice.actions;