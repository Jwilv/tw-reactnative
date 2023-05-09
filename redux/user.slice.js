import { createSlice } from "@reduxjs/toolkit"
import { getUidAndName } from "../helpers/getUidAndName";


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

const {userData} = userSlice.actions ;

export const startUserData = ()=>{
    return (dispatch)=>{
        dispatch(userData(getUidAndName()))
    }
}

export default userSlice.reducer ;