import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function SearchScreen({navigation}) {

  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const {isDarkMode} = useSelector( state => state.themeMode);

  useEffect(() => {
    fetchData("https://randomuser.me/api/?results=20");
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      const { results } = json;
      setUsers(results);
      console.log(results);
    } catch (error) {
      console.log(error);
    } finally {
      // Detener el spinner de carga aquí
    }
  };

  const filteredData = users.filter(
    (item) =>
      item.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.last.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePostPress = id => {
    const user = users.find(item => item.id === id);
    // Navigate to the user's profile screen
    navigation.navigate('ProfileUser', {user: user});
  };

  return (
    <>
      <View>
        <View style={isDarkMode ? styles.searchBar: styles.searchBarDark}>
          <TextInput
            style={isDarkMode ? styles.searchInput : styles.searchInputDark}
            placeholder="Search"
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholderTextColor= "gray"
          />
        </View>
        <ScrollView style={ isDarkMode ? styles.container : styles.containerDark}>
          {filteredData.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => handlePostPress(item.id)}>
              <View key={index} style={styles.itemContainer}>
                <Image
                  source={{ uri: item.picture.large }}
                  style={styles.image}
                />
                <View>
                  <Text style={ isDarkMode ? styles.textName : styles.textNameDark}>
                    {item.name.first} {item.name.last}
                  </Text>
                  <Text style={styles.textEmail}>{item.login.username}</Text>
                </View>
              </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  //Light theme
  container:{
    backgroundColor: 'white',
  },
  textFriends: {
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 10,
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textName: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: "600",
  },
  textEmail: {
    fontSize: 14,
    marginLeft: 10,
    color: 'grey',
  },
  searchBar: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  searchInput: {
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  //Dark theme 
  containerDark:{
    backgroundColor: '#131F2B'
  },
  textFriendsDark: {
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 10,
    marginTop: 10,

  },
  itemContainerDark: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  textNameDark: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: "600",
    color: 'white',
  },
  textEmailDark: {
    fontSize: 14,
    marginLeft: 10,
    color: 'grey',
  },
  searchBarDark: {
    backgroundColor: "#131F2B",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  searchInputDark: {
    backgroundColor: "#0D141B",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
    color: 'white',
  },
});