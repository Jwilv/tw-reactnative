import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from "./Navigation";

export default function App() {
  return (
    // <View>
    //   <Navigation></Navigation>
    // </View>
    <NavigationContainer>
      <Navigation></Navigation>
    </NavigationContainer>
  );
}
