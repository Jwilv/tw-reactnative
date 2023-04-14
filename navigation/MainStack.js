import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import  WelcomeScreen  from "../screens/WelcomeScreen";
import { Navigation } from "../navigation/Navigation";


const Stack = createNativeStackNavigator()

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name='Login'
          component={WelcomeScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
