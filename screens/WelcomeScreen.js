import {
    Dimensions,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  const { height } = Dimensions.get("window");
  
export default function WelcomeScreen({navigation}) {
    return (
      <SafeAreaView
      style={{
        paddingTop: 20,
      }}>
        <View>
          <ImageBackground
            style={{
              height: height / 2.5,
            }}
            resizeMode="contain"
            source={require("../assets/welcome-img.png")}
          />
          <View
            style={{
              paddingHorizontal: 40,
              paddingTop: 40,
            }}
          >
            <Text
              style={{
                fontSize: 35,
                color: 'blue',
                textAlign: "center",
              }}
            >
              Discover Your Dream Job here
            </Text>
  
            <Text
              style={{
                fontSize: 14,
                color: 'black',
                textAlign: "center",
                marginTop: 20,
              }}
            >
              Explore all the existing job roles based or your interest and study
              major
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              paddingTop: 60,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => navigate("Login")}
              style={{
                backgroundColor: 'blue',
                paddingVertical: 15,
                paddingHorizontal: 20,
                width: "48%",
                borderRadius: 10,
                shadowColor: 'blue',
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.3,
                shadowRadius: 10,
              }}
            >
              <Text
                style={{        
                  color: 'white',
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate("Register")}
              style={{
                paddingVertical: 15,
                paddingHorizontal: 20,
                width: "48%",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  
  const styles = StyleSheet.create({});