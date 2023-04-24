import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
  
  
  
  export default function Publication({navigation}) {
    const [tweetText, setTweetText] = useState('');
    const handleTweet = () => {
        // Aquí podrías hacer algo con el texto del tweet
        console.log(`Publicando tweet: ${tweetText}`);
      };
    return (
        <>
        <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.headerButton}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTweet}>
          <Text style={styles.headerButton}>Twittear</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Image
          style={styles.userImage}
          source={{ uri: 'https://randomuser.me/api/portraits/women/17.jpg' }}
        />
        <TextInput
          style={styles.textInput}
          multiline={true}
          placeholder="¿Qué está pasando?"
          placeholderTextColor="#B1B1B1"
          value={tweetText}
          onChangeText={setTweetText}
        />
      </View>
    </View>
        </>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#B1B1B1',
    },
    headerButton: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#1DA1F2',
    },
    content: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: 10,
    },
    userImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    textInput: {
      flex: 1,
      fontSize: 16,
      lineHeight: 24,
      color: '#000',
    },
  });