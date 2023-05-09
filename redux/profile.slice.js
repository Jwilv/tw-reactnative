import { createSlice } from "@reduxjs/toolkit"
import { getUserById } from "../helpers/getUserById";


const initialState = {
    name: "",
    id: "",
    location: "",
    avatar: "",
    banner: "",
    birthDate: "",
    surname: "",
    biography:"",
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setProfileData: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        deleteProfileData: () => {
            return initialState
        },

    }
})

const { setProfileData, deleteProfileData } = profileSlice.actions;

export const startDataProfile = (id) => {
    return async (dispatch) => {
        try {
            const resp = await getUserById(id);
            dispatch(setProfileData({...resp}))
        } catch (error) {

        }
    }
}

export default profileSlice.reducer ;