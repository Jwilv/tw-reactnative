import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { startLogin } from "../redux/auth.slice";
import { startUserData } from "../redux/user.slice";
import { startDataProfile } from "../redux/profile.slice";
import { startUploadUserNotes } from "../redux/notes.slice";
import { getUidAndName } from "../helpers/getUidAndName";


export default function LoginScreen({ navigation }) {
  


  const dispatch = useDispatch()




  const initialState = {
    email: "test.com",
    password: "123456",
  }
  const [values, changeForm, reset] = useForm(initialState)
  const { email, password } = values
  const handleSubmit = async () => {
    const {_id} = await getUidAndName();
    const data = { email, password }
    dispatch(startLogin(data));
    dispatch(startUserData())
    dispatch(startDataProfile(_id))
    dispatch(startUploadUserNotes(_id,1))
    navigation.navigate('Hom')

  }

  return (
    <SafeAreaView>
      <View
        style={{
          padding: 20,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: '#1F41BB',
              marginVertical: 30,
            }}
          >
            Login here
          </Text>
          <Text
            style={{
              fontSize: 20,
              maxWidth: "60%",
              textAlign: "center",
            }}
          >
            Welcome back you've been missed!
          </Text>
        </View>
        <View
          style={{
            marginVertical: 30,
          }}
        >
          <TextInput style={styles.input} placeholder="Email" name="email" value={email}
            onChange={changeForm} />
          <TextInput style={styles.input} placeholder="Password" name="password" value={password} onChange={changeForm} />
        </View>

        <View>
          <Text
            style={{
              fontSize: 14,
              color: '#1F41BB',
              alignSelf: "flex-end",
            }}
          >
            Forgot your password ?
          </Text>
        </View>

        <TouchableOpacity
          style={{
            padding: 20,
            backgroundColor: '#1F41BB',
            marginVertical: 30,
            borderRadius: 10,
            shadowColor: '#1F41BB',
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.3,
            shadowRadius: 10,
          }}
          onPress={handleSubmit}
        >
          <Text
            style={{
              color: '#fff',
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { navigation.navigate('Register') }}
        >
          <Text
            style={{
              color: '#000',
              textAlign: "center",
              fontSize: 14,
            }}
          >
            Create new account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10
  },
});