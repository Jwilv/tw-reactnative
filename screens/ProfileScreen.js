import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { startUploadUserNotes } from "../redux/notes.slice";


export default function ProfileScreen({ navigation }) {

  const ip = "192.168.0.111"

  const {_id } = useSelector(state => state.user)
  const { isDarkMode } = useSelector(state => state.themeMode);
  const {userNotes} = useSelector( state => state.notes)
  const dispatch = useDispatch()
  dispatch(startUploadUserNotes(_id,1))

  const {
    name,
    surname,
    biography,
    location,
    birthDate,
    avatar,
    banner
  } = useSelector(state => state.ProfileActive);

 
  return (
    <View style={isDarkMode ? styles.contenedorDark : styles.contenedor}>
      <ScrollView>
        <Image
          style={styles.banner}
          source={{
            uri: `http://${ip}:8080/getBanner?id=${_id}`,
          }}
        />
        <View style={styles.contenedorLogo}>
          <Image
            style={styles.LogoPerfil}
            source={{
              uri: `http://${ip}:8080/getAvatar?id=${_id}`,

            }}
          />
          <View style={{ position: 'absolute', top: 10, right: 15 }}>
            <TouchableOpacity onPress={() => { navigation.navigate('EditProfile') }}>
              <MaterialCommunityIcons name="account-edit" size={28} color={isDarkMode ? "white" : "black"} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={isDarkMode ? styles.nombreDark : styles.nombre}>{name} {surname}</Text>
        <Text style={isDarkMode ? styles.descripcionDark : styles.descripcion}>{biography}</Text>
        <View style={styles.linea}></View>


        {userNotes.map((publicacion) => {
          return (
        <View style={styles.contenedorPublicacion} key={publicacion._id}>
          <Image
            style={styles.Logo}
            source={{
              uri: `http://${ip}:8080/getAvatar?id=${_id}`, 
            }}
          />
          <View>
            <Text style={isDarkMode ? styles.nombreDark : styles.nombre}>{name} {surname}</Text>
            <Text style={isDarkMode ? styles.publicacionDark : styles.publicacion}>{publicacion.message}</Text>
          </View>
        </View>
         );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  //Light theme
  contenedor: {
    backgroundColor: 'white',
  },
  banner: {
    height: 150,
  },
  Logo: {
    width: 50,
    height: 50,
    borderRadius: 100,

  },
  LogoPerfil: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginTop: -50,
  },
  contenedorLogo: {
    marginLeft: 10,
  },
  nombre: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  descripcion: {
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 10,
    color: '#575B5F',
  },
  publicacion: {
    marginLeft: 10,
    marginRight: 45,
  },
  contenedorPublicacion: {
    padding: 10,
    flexDirection: 'row',
  },
  linea:{
    backgroundColor:'#B1B1B1',
    width:'100%',
    height: 1,
    marginTop: 10,
    marginBottom: 5,
  },

  //Dark theme
  nombreDark: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'white',
  },
  descripcionDark: {
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 10,
    color: '#B9BBBC'
  },
  publicacionDark: {
    marginLeft: 10,
    marginRight: 45,
    color: 'white',
  },
  contenedorDark: {
    backgroundColor: '#131F2B',
  },
});