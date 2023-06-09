import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import Modal from "react-native-modal";
import { useSelector, useDispatch } from 'react-redux';
import { startPostNote, startUploadUserNotes } from '../redux/notes.slice'
import { useForm } from "../hooks/useForm";
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const { userNotes } = useSelector(state => state.notes)
  dispatch(startUploadUserNotes(_id, 1))
  const [message, setMessage] = useState("");
  const { _id } = useSelector(state => state.user)
  const ip = "192.168.0.111"

  const {
    name,
    surname,
    biography,
    location,
    birthDate,
    avatar,
    banner
  } = useSelector(state => state.ProfileActive);

  const [users, setUsers] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const { isDarkMode } = useSelector(state => state.themeMode);

  const [Counter, setCounter] = useState(0)

  const MAX_CHARACTERS = 250;

  useEffect(() => {
    setCounter(MAX_CHARACTERS - message.length)
  }, [message])

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // useEffect(() => {
  //   fetch('https://randomuser.me/api/?results=20')
  //     .then(response => response.json())
  //     .then(data => {
  //       setUsers(data.results);
  //     });
  // }, []);

  const handlePostPress = id => {
    const user = users.find(item => item.id === id);
    navigation.navigate('ProfileUser', { user: user });
  };

  const handlePostNote = () => {
    if (message.length > 250) {
      return alert("Se permite un maximo de 250 caracteres")
    }
    if (message.replace(/\s+/g, '').length === 0) {
      return alert("El mensaje no puede estar vacio")
    }
    const payload = {
      message,
    }
    dispatch(startPostNote(payload))
    setTimeout(() => {
      dispatch(startUploadUserNotes(_id, 1))
    }, 60);
    toggleModal();
  }

  const renderPost = ({ item }) => {
    return (
      <>

        {/* <TouchableOpacity activeOpacity={1} onPress={() => handlePostPress(item.id)}>
          <View style={ isDarkMode ? styles.contenedorDark : styles.contenedor}>
            <Image
              style={styles.Logo}
              source={{ uri: item.picture.medium }}
            />
            <View>
              <Text style={ isDarkMode ? styles.nombreDark : styles.nombre}>{`${item.name.first} ${item.name.last}`}</Text>
              <Text style={isDarkMode ? styles.publicacionDark :styles.publicacion}>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tie.</Text>
            </View>
          </View>
        </TouchableOpacity> */}
      </>
    );
  };



  return (
    

      <View style={{ height: '100%' }}>
        {/* <FlatList
        data={users}
        renderItem={renderPost}
        keyExtractor={(item, index) => index.toString()}
      /> */}
      <ScrollView>
        {userNotes.map((publicacion) => {
          return (
            <View style={ isDarkMode ? styles.contenedorDark : styles.contenedor} key={publicacion._id}>
              <Image
                style={styles.Logo}
                source={{
                  uri: `http://${ip}:8080/getAvatar?id=${_id}`,
                }}
              />
              <View>
                <Text style={ isDarkMode ? styles.nombreDark : styles.nombre}>{name} {surname}</Text>
                <Text style={isDarkMode ? styles.publicacionDark :styles.publicacion}>{publicacion.message}</Text>
              </View>
            </View>
          );
        })}
        </ScrollView>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={toggleModal}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <Modal isVisible={isModalVisible}>
            <View style={{ backgroundColor: isDarkMode ? '#131F2B' : '#FFFF', paddingVertical: 20, paddingHorizontal: 20, borderRadius: 6 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 50, height: 50, borderRadius: 100 }} source={{ uri: 'https://cdn.pixabay.com/photo/2016/08/03/09/04/universe-1566161_640.jpg' }} />
                <Text style={{ color: isDarkMode ? 'white' : 'black', marginLeft: 10, alignSelf: 'center' }}>Matias Rolon</Text>
                <View style={{ flex: 1 }}></View>
                <View style={{ position: 'absolute', top: -5, right: 1 }}>
                  <TouchableOpacity onPress={toggleModal}>
                    <Text style={{ color: isDarkMode ? 'white' : 'black', fontSize: 20 }}>x</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TextInput name='message' onChangeText={(e) => { setMessage(e) }} style={{ color: isDarkMode ? 'white' : 'black', paddingBottom: 50, marginTop: 10 }} multiline={true} placeholder="¿En que estas pensando?" placeholderTextColor="gray" />
              <TouchableOpacity onPress={handlePostNote} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#1DA1F2', paddingVertical: 10, borderRadius: 9, elevation: 2 }}>
                <Text onPress={handlePostNote} style={{ color: 'white' }}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  //Light theme
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
  //Dark theme
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
    backgroundColor: '#1DA1F2',

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
