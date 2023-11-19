import { createSlice } from '@reduxjs/toolkit';
export const contratoSlice = createSlice({
name: 'contrato',
initialState: {
    salario:{},

},
reducers: {
onSalarioLoaded: (state, {payload} ) => {
    console.log(payload);
    state.salario= payload;
},
}
});
// Action creators are generated for each case reducer function
export const { onSalarioLoaded } = contratoSlice.actions;