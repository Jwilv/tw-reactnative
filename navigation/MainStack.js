import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import  LoginScreen  from "../screens/Login";
import Navigation from "../navigation/Navigation";


const Stack = createNativeStackNavigator()

export default function HomeScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name='Login'
          component={LoginScreen}
        />
        <Stack.Screen
          name='Hoe'
          component={Navigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
