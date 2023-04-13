import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 


// //screens
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: 'blue',
      }}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({color, size})=>(
            <MaterialCommunityIcons name="home" size={24} color={color} />
          ), 
        }}
        />

      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size})=>(
            <FontAwesome name="search" size={24} color={color} />
          ), 
        }}/>

      <Tab.Screen 
        name="Perfil " 
        component={ProfileScreen} 
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({color, size})=>(
            <MaterialCommunityIcons name="account" size={24} color={color} />
          ), 
        }}/>
    </Tab.Navigator>
  );
}