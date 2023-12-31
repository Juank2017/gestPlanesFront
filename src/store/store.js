import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlices";
import { usersSlice } from "./slices/usersSlice";
import { uiSlice } from "./slices/uiSlice";
import { contratoSlice } from "./slices/contratoSlice";
import { trabajadoresSlice } from "./slices/trabajadoresSlice";



export const store = configureStore({
    reducer: {
        auth:     authSlice.reducer,
        users:    usersSlice.reducer,
        ui:       uiSlice.reducer,
        contrato: contratoSlice.reducer,
        trabajadores: trabajadoresSlice.reducer
    },
})