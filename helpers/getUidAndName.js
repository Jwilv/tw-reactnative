import jwtDecode from "jwt-decode"

export const getUidAndName = async () => {
    const token = await AsyncStorage.getItem('token');
    const {_id,name} = jwtDecode(token)
    return {_id,name}
}

