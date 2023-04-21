import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import  WelcomeScreen  from "../screens/WelcomeScreen";
import  RegisterScreen  from "../screens/RegisterScreen";
import LoginScreen from '../screens/LoginScreen';
import Navigation from '../screens/Navigation';
import ProfileUserScreen from '../screens/ProfileUserScreen';



const Stack = createNativeStackNavigator()

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerBackTitleVisible: true
        }}>
        <Stack.Screen
          name='Welcome'
          component={WelcomeScreen}
        />
        <Stack.Screen
          name='Register'
          component={RegisterScreen}
        />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
        />
        <Stack.Screen
          name='Hom'
          component={Navigation}
        />
        <Stack.Screen
          name='ProfileUser'
          component={ProfileUserScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
