import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';


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


export default function HomeScreen() {
  return (
    <>
    <ScrollView>
    <View style={styles.linea}></View>
    <View  style={styles.contenedor}>
      <Image
        style={styles.Logo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <View>
        <Text style={styles.nombre}>Matias Rolon</Text>
        <Text style={styles.publicacion}>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).</Text>
      </View>
    </View>
    </ScrollView>
    </>
  );
}
