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
import { changeMode } from '../redux/reducers';
import { useDispatch, useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

export default function Navigation() {

 const disptach = useDispatch();

 const {isDarkMode} = useSelector( state => state.themeMode);

const handleDark = ()=>{
  disptach(changeMode());
  console.log(isDarkMode);
}

  return (
    
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor:isDarkMode ?  '#1DA1F2' : 'blue',
        tabBarStyle: { backgroundColor: isDarkMode ? '#0D141B' : 'white' },
        headerStyle: { backgroundColor: isDarkMode ? '#0D141B' : 'white' },
        headerTintColor : isDarkMode ? 'white' : 'black',
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
            <TouchableOpacity style={{ marginRight: 8}} onPress={handleDark}><Ionicons name={isDarkMode ? "sunny" : "ios-moon"} size={24} color={isDarkMode ? "white" : "black"} /></TouchableOpacity>
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
        name="Perfil" 
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