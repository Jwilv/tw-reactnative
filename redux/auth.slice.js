import { createSlice } from "@reduxjs/toolkit";
import { fetchToken, fetchWithoToken } from "../helpers/fecht";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    name: "",
    uid: "",
    checking: true,
    logged: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            return {
                ...state,
                checking: false,
                ...action.payload,
            }
        },
        logout: (state) => {
            return {
                checking: false,
                logged: false,
            }
        },
        checkingFinish: (state) => {
            return {
                ...state,
                checking: false
            }
        },
    }
})

const { login, logout, checkingFinish } = authSlice.actions;

export const startLogin = ({ email, password }) => {
    return async (dispatch) => {
        try {
            const { token } = await fetchWithoToken('login', { email, password }, 'POST')
            await AsyncStorage.setItem('token', token)
            dispatch(login({
                checking: false,
                logged: true,
            }))
            return true
        } catch (error) {
            console.log("malio sal")
            return false
        }
    }
}

export const startRegister = (data) => {
    return async (dispatch) => {
        try {
            const { token } = await fetchWithoToken('register', data, 'POST')
            await AsyncStorage.setItem('token', token)
            dispatch(login({
                checking: false,
                logged: true,
            }))
            return true
        } catch (error) {
            console.log("malio sal")
            return false
        }
    }
}

export const startRenew = () => {
    return async (dispatch) => {
        try {
            const { token } = await fetchToken('renew')
            await AsyncStorage.setItem('token', token)
            dispatch(login({
                checking: false,
                logged: true,
            }))
            console.log("buenasa")
            return true
        } catch (error) {
            console.log(error)
            console.log("malio sal")
            dispatch(checkingFinish())
            dispatch(logout())
            return false
        }
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await AsyncStorage.removeItem("token")
        dispatch(logout())
    }
}

export default authSlice.reducer;
