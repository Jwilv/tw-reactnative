import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import MainStack from "./navigation/MainStack";
import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function App() {
  return (
    
    // <NavigationContainer>
     
    //   <Navigation></Navigation>
    // </NavigationContainer>
    <Provider store={store}>
      
    <MainStack/>
    
    </Provider>
      );
}
