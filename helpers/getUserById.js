import { fetchToken } from "./fecht";

export const getUserById = async (id) => {

    console.log(id)

    try {
        const resp = await fetchToken(`getprofile?id=${id}`)
        return await resp
    } catch (error) {
        console.log(error)
    }
}