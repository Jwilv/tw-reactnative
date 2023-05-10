import { createSlice } from "@reduxjs/toolkit"
import { getUidAndName } from "../helpers/getUidAndName";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode"


const initialState = {
    name: "",
    _id: "",
}

const userSlice = createSlice({
    name: "uUser",
    initialState,
    reducers: {
        userData: (state, action) => {
            return {
                ...state,
                ...action.payload,
            }
        }
    }
})

const { userData } = userSlice.actions;


export const startUserData = () => {

    return async (dispatch) => {
        const uidAndName = await getUidAndName();
        dispatch(userData(uidAndName));
    }
}

export default userSlice.reducer;