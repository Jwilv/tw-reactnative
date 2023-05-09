import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.slice";
import darkModeReducer from "./reducers"
import userReducer from "./user.slice"



export const store = configureStore({
    reducer: {
        auth: authReducer,
        themeMode : darkModeReducer,
        user : userReducer,
    }
})