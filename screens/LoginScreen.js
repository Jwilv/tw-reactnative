import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { startLogin } from '../redux/auth.slice';
import { useForm } from '../hooks/useForm';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const dispatch = useDispatch()

  const initialState = {
    email: 'test.com',
    password: '123456',
  };

  const [values, changeForm, reset] = useForm(initialState)
  const { email, password } = values;

  const handleSubmit = async () => {
    try {
      console.log(email + ' ' + password)
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
  
      // Si la respuesta es exitosa, actualizamos el estado de Redux
      if (response.ok) {
        dispatch(startLogin(data.token));
        // Guardamos el token en AsyncStorage para mantener la sesión del usuario
        await AsyncStorage.setItem('token', data.token);
      } else {
        // Si hay un error, lo manejamos de acuerdo a nuestras necesidades
        
        console.log(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            name="email"
            value={email}
            onChange={changeForm}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            onChange={changeForm}
            name="password"
            value={password}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.sign} onPress={handleSubmit}>
          <Text style={styles.signText}>Sign in</Text>
        </TouchableOpacity>
        <Text style={styles.signup}>
          Don't have an account?
          <Text style={styles.signupLink}> Sign up</Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
    backgroundColor: '#F0F0F0',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  sign: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: 10,
    marginBottom: 10,
  },
  signText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  signup: {
    fontSize: 16,
    textAlign: 'center',
  },
  signupLink: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});