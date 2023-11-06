import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/atuhSlice/authSlices";
import { usersSlice } from "./slices/usersSlice/usersSlice";
import { uiSlice } from "./slices/ui/uiSlice";



export const store = configureStore({
    reducer: {
        auth:     authSlice.reducer,
        users:    usersSlice.reducer,
        ui:       uiSlice.reducer,
    },
})