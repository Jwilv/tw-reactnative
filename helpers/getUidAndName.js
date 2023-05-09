import jwtDecode from "jwt-decode"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUidAndName = async () => {
    const token = await AsyncStorage.getItem('token');
    const {_id,name} = jwtDecode(token)
    return {_id,name}
}

