import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button} from 'react-native';


export default function LoginScreen({navigation}) {
  return (
    <>
        <Text>Login</Text>    
        <Button
          title='hola'
          onPress={() => {navigation.navigate('Hoe')}}/>
    </>
  );
}
