import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';


export default function ProfileUserScreen({ route }) {
    const { user } = route.params;
    const { isDarkMode } = useSelector(state => state.themeMode);
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: { backgroundColor: isDarkMode ? 'white' : '#0D141B' },
            headerTintColor : isDarkMode ? 'black' : 'white',
            headerShown: true,
            title: user.name.first + ' ' + user.name.last,
        });
    }, [navigation]);

    return (
        <View style={isDarkMode ? styles.contenedor : styles.contenedorDark}>
            <ScrollView>
                <Image
                    style={styles.banner}
                    source={{ uri: user.picture.large }}
                />
                <View style={styles.contenedorLogo}>
                    <Image
                        style={styles.LogoPerfil}
                        source={{ uri: user.picture.medium }}
                    />
                </View>
                <Text style={isDarkMode ? styles.nombre : styles.nombreDark}>{user.name.first} {user.name.last}</Text>
                <Text style={isDarkMode ? styles.descripcion : styles.descripcionDark}>Soy un pibe que le gusta el fulbo, incha del barcelona y de river plate (el mas grande que hay)</Text>

                <View style={styles.contenedorPublicacion}>

                    <Image
                        style={styles.Logo}
                        source={{ uri: user.picture.medium }}
                    />
                    <View>
                        <Text style={isDarkMode ? styles.nombre : styles.nombreDark}>{user.name.first} {user.name.last}</Text>
                        <Text style={isDarkMode ? styles.publicacion : styles.publicacionDark}>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).</Text>
                    </View>
                </View>
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