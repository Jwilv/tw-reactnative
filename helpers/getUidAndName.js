import jwt_decode from "jwt-decode"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUidAndName = async () => {
    const token = await AsyncStorage.getItem('token');
    const {_id,name} = jwt_decode(token)
    return {_id,name}
}

