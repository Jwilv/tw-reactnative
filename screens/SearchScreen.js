import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    // backgroundColor: 'gray',
    borderColor: '#999999',
    borderRadius: 100,
    display: 'flex',
  },
  icono:{
    display: 'flex',
  }
});

export default function SearchScreen() {
  return (
    <View>
      <TextInput
      placeholder='Buscar usuario'
        style={styles.input}
      />
    </View>
  );
}
