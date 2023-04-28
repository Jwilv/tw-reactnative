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
        tabBarActiveTintColor:isDarkMode ?  'blue' : '#1DA1F2',
        tabBarStyle: { backgroundColor: isDarkMode ? 'white' : '#0D141B' },
        headerStyle: { backgroundColor: isDarkMode ? 'white' : '#0D141B' },
        headerTintColor : isDarkMode ? 'black' : 'white',
      }}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={({ navigation }) => ({
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size})=>(
            <MaterialCommunityIcons isDarkMode name="home" size={24} color={color} />
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 8}} onPress={handleDark}><Ionicons name={isDarkMode ? "ios-moon" : "sunny"} size={24} color={isDarkMode ? "black" : "white"} /></TouchableOpacity>
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