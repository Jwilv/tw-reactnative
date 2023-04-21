import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then(response => response.json())
      .then(data => {
        setUsers(data.results);
      });
  }, []);

  const handlePostPress = id => {
    const user = users.find(item => item.id === id);
    navigation.navigate('ProfileUser', { user: user });
    console.log("seleccionado");
  };

  const renderPost = ({ item }) => {
    return (
      <>
        <View style={styles.linea}></View>
        <TouchableOpacity onPress={() => handlePostPress(item.id)}>
          <View style={styles.contenedor}>
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
      </>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderPost}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => console.log('Botón flotante presionado')}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  Logo: {
    width: 50,
    height: 50,
    borderRadius: 100,

  },
  contenedor: {
    padding: 10,
    flexDirection: 'row',
  },
  linea: {
    backgroundColor: '#B1B1B1',
    width: '100%',
    height: 1,
  },
  nombre: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  publicacion: {
    marginLeft: 10,
    marginRight: 45,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    backgroundColor: '#1DA1F2',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
  },
});

export default HomeScreen;
