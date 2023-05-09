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
import { useDispatch } from 'react-redux'
import { startRegister } from "../redux/auth.slice";


export default function LoginScreen({ navigation }) {

  const dispatch = useDispatch()
  const initialState = {
    email: "leo.com",
    password: "123456",
    passwordConfirm: "123456",
    name: "Leo",
  }

  const [values, changeForm] = useForm(initialState)
  const { email, password, passwordConfirm, name } = values

  const handleSubmit = () => {
    const data = {
      name,
      password,
      email,
    }
    dispatch(startRegister(data))
  }

  return (
    <SafeAreaView>
      <View
        style={{
          padding: 10,
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
            Create account
          </Text>

        </View>
        <View
          style={{
            marginVertical: -10,
          }}
        >
          <TextInput style={styles.input} placeholder="Name" name="name" autoComplete="off" value={name} onChange={changeForm} />
          <TextInput style={styles.input} placeholder="Email" name="email" value={email} onChange={changeForm}/>
          <TextInput style={styles.input} placeholder="Password"  name="password" value={password} onChange={changeForm}/>
          <TextInput style={styles.input} placeholder="Confirm password" name="passwordConfirm" value={passwordConfirm} onChange={changeForm}/>
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
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { navigation.navigate('Login') }}
        >
          <Text
            style={{
              color: '#000',
              textAlign: "center",
              fontSize: 14,
            }}
          >
            Already have an account
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