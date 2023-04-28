import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import Modal from "react-native-modal";
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = ({ navigation }) => {

  const [users, setUsers] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const {isDarkMode} = useSelector( state => state.themeMode);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
        
        <TouchableOpacity onPress={() => handlePostPress(item.id)}>
          <View style={ isDarkMode ? styles.contenedor : styles.contenedorDark}>
            <Image
              style={styles.Logo}
              source={{ uri: item.picture.medium }}
            />
            <View>
              <Text style={ isDarkMode ? styles.nombre : styles.nombreDark}>{`${item.name.first} ${item.name.last}`}</Text>
              <Text style={isDarkMode ? styles.publicacion :styles.publicacionDark}>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tie.</Text>
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (

    <View>
      <FlatList
        data={users}
        renderItem={renderPost}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={toggleModal}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Modal isVisible={isModalVisible}>
          <View style={{ backgroundColor: '#FFFF', paddingVertical: 20, paddingHorizontal: 20, borderRadius: 6 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={{ width: 50, height: 50, borderRadius: 100 }} source={{ uri: 'https://cdn.pixabay.com/photo/2016/08/03/09/04/universe-1566161_640.jpg' }} />
              <Text style={{ marginLeft: 10, alignSelf: 'center' }}>Matias Rolon</Text>
              <View style={{ flex: 1 }}></View>
              <View style={{ position: 'absolute', top: -5, right: 1 }}>
                <TouchableOpacity onPress={toggleModal}>
                  <Text style={{ color: '#272727', fontSize: 20 }}>x</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TextInput style={{ paddingBottom: 50, marginTop: 10 }} multiline={true} placeholder="¿En que estas pensando?" />
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#1DA1F2', paddingVertical: 10, borderRadius: 9, elevation: 2 }}>
              <Text style={{ color: 'white' }}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //Theme light
  Logo: {
    width: 50,
    height: 50,
    borderRadius: 100,
    display: 'flex',

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
    backgroundColor:'#1DA1F2',

    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
  },
  //Theme dark
  contenedorDark: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#131F2B'
  },
  lineaDark: {
    backgroundColor: '#2F3336',
    width: '100%',
    height: 1,
  },
  nombreDark: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'white'
  },
  publicacionDark: {
    marginLeft: 10,
    marginRight: 45,
    color: 'white'
  },
  floatingButtonDark: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    backgroundColor:'#1DA1F2',

    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  buttonTextDark: {
    fontSize: 30,
    color: 'white',
  },
});

export default HomeScreen;
