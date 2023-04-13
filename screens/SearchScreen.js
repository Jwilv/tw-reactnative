import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
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
});

export default function SearchScreen() {

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData("https://randomuser.me/api/?results=20");
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      const { results } = json;
      setData(results);
      console.log(results);
    } catch (error) {
      console.log(error);
    } finally {
      // Detener el spinner de carga aquí
    }
  };

  const filteredData = data.filter(
    (item) =>
      item.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.last.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <View>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
        </View>
        <ScrollView>
          <Text style={styles.textFriends}>Friend</Text>
          {filteredData.map((item, index) => {
            return (
              <View key={index} style={styles.itemContainer}>
                <Image
                  source={{ uri: item.picture.large }}
                  style={styles.image}
                />
                <View>
                  <Text style={styles.textName}>
                    {item.name.first} {item.name.last}
                  </Text>
                  <Text style={styles.textEmail}>{item.login.username}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
}
