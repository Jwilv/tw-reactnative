
import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

export default function EditProfileScreen({ route }) {
    const { isDarkMode } = useSelector(state => state.themeMode);
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: { backgroundColor: isDarkMode ? '#0D141B' : 'white' },
            headerTintColor : isDarkMode ? 'white' : 'black',
            headerShown: true,
            title: 'Editar perfil',
            headerRight: () => (
                <TouchableOpacity onPress={() => { navigation.navigate('Profile') }}><MaterialCommunityIcons name="check" size={24} color={isDarkMode ?  '#1DA1F2' : 'blue'} /></TouchableOpacity>
            ), 
        });
    }, [navigation]);

    return (
        <View style={isDarkMode ? styles.contenedorDark : styles.contenedor}>
            <ScrollView>
                <Image
                    style={styles.banner}
                    source={{
                        uri: 'https://cdn.pixabay.com/photo/2016/08/03/09/04/universe-1566161_640.jpg',
                    }}
                />
                <TouchableOpacity style={styles.editBanner}>
                    <MaterialCommunityIcons name="camera" size={24} color="white" />
                </TouchableOpacity>
                <View style={styles.contenedorLogo}>
                    <Image
                        style={styles.LogoPerfil}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                    <TouchableOpacity style={styles.editLogo}>
                        <MaterialCommunityIcons name="camera" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={isDarkMode ? {color:'white'} : {color:'black'}}>Nombre de usuario</Text>
                    <TextInput style={isDarkMode ? {color:'white'} : {color:'black'}}>Matias Rolon</TextInput>
                    <View style={styles.linea}></View>
                    <Text style={isDarkMode ? {color:'white'} : {color:'black'}}>Descripcion</Text>
                    <TextInput style={isDarkMode ? {color:'white'} : {color:'black'}}>Soy un pibe que le gusta el fulbo, incha del barcelona y de river plate (el mas grande que hay)</TextInput>
                    <View style={styles.linea}></View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    //Light theme
    contenedor:{
        backgroundColor:'white', 
        height:'100%'
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
        marginBottom: 10,
    },
    linea: {
        backgroundColor: '#B1B1B1',
        width: '100%',
        height: 1,
        marginBottom: 15,
    },
    editLogo: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: 100,
        height: 100,
        borderRadius: 100,
        marginTop: -50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    editBanner: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        height: 150,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    //Dark theme
    contenedorDark:{
        backgroundColor:'#131F2B', 
        height:'100%'
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
        marginBottom: 10,
    },
    linea: {
        backgroundColor: '#B1B1B1',
        width: '100%',
        height: 1,
        marginBottom: 15,
    },
    editLogo: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: 100,
        height: 100,
        borderRadius: 100,
        marginTop: -50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    editBanner: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        height: 150,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});