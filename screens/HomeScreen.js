import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then(response => response.json())
      .then(data => {
        setUsers(data.results);
      });
  }, []);

  const renderPost = ({ item }) => {
    return (   
      <TouchableOpacity onPress={() => console.log(item)}>

<View style={styles.linea}></View>
    <View  style={styles.contenedor}>
      <Image
        style={styles.Logo}
        source={{ uri: item.picture.medium }}
      />
      <View>
        <Text style={styles.nombre}>{`${item.name.first} ${item.name.last}`}</Text>
        <Text style={styles.publicacion}>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tie.</Text>
      </View>
    </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderPost}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Logo: {
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
    marginRight: 45,
  }
});

export default HomeScreen;
