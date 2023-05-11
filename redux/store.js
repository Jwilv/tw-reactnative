import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.slice";
import darkModeReducer from "./reducers"
import userReducer from "./user.slice"
import profileReducer from "./profile.slice"
import notesReducer from "./notes.slice"



export const store = configureStore({
    reducer: {
        ProfileActive : profileReducer,
        auth: authReducer,
        themeMode : darkModeReducer,
        user : userReducer,
        notes : notesReducer,
    },
})