import React from 'react';
import { StyleSheet, Text, View, Image,} from 'react-native';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 100,

  },
  contenedor:{
    padding:10,
    flexDirection: 'row',
  },
  linea:{
    backgroundColor:'#B1B1B1',
    width:'100%',
    height: 1,
  },
  nombre:{
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  publicacion:{
    marginLeft: 10,
  }
});


export default function HomeScreen() {
  return (
    <>
    <View  style={styles.contenedor}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <View>
        <Text style={styles.nombre}>Matias Rolon</Text>
        <Text style={styles.publicacion}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </Text>
      </View>
    </View>
    <View style={styles.linea}></View>
    </>
  );
}
