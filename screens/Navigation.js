import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';


// //screens
import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: 'blue',
      }}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={({ navigation }) => ({
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size})=>(
            <MaterialCommunityIcons name="home" size={24} color={color} />
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 8}}><Ionicons name="ios-moon" size={24} color="black" /></TouchableOpacity>
          ),
        })}
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
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size})=>(
            <MaterialCommunityIcons name="account" size={24} color={color} />
          ), 
        }}/>
    </Tab.Navigator>
  );
}