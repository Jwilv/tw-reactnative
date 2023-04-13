import * as React from 'react';
import { Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from "./navigation/Navigation";
import MainStack from "./navigation/MainStack";

export default function App() {
  return (
    
    // <NavigationContainer>
     
    //   <Navigation></Navigation>
    // </NavigationContainer>
    <MainStack/>
  );
}
