import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button} from 'react-native';


export default function RegisterScreen({navigation}) {
  return (
    <>
        <Text>Register</Text>    
        <Button
          title='hola'
          onPress={() => {navigation.navigate('Hoe')}}/>
    </>
  );
}
