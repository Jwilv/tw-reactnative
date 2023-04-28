import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.slice";
import darkModeReducer from "./reducers"



export const store = configureStore({
    reducer: {
        auth: authReducer,
        themeMode : darkModeReducer,
    }
})