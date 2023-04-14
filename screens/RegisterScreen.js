import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import { Ionicons } from "@expo/vector-icons";
  import { NativeStackScreenProps } from "@react-navigation/native-stack";
  import AppTextInput from "../components/AppTextInput";
  
  
  export default function LoginScreen({navigation}) {
    return (
      <SafeAreaView>
        <View
          style={{
            padding: 20,
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: '#1F41BB',
                marginVertical: 30,
              }}
            >
              Create account
            </Text>
            <Text
              style={{
                fontSize: 14,
                maxWidth: "80%",
                textAlign: "center",
              }}
            >
              Create an account so you can explore all the existing jobs
            </Text>
          </View>
          <View
            style={{
              marginVertical: 30,
            }}
          >
            <AppTextInput placeholder="Email" />
            <AppTextInput placeholder="Password" />
            <AppTextInput placeholder="Confirm Password" />
          </View>
  
          <TouchableOpacity
            style={{
              padding: 20,
              backgroundColor: '#1F41BB',
              marginVertical: 30,
              borderRadius: 10,
              shadowColor: '#1F41BB',
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
                color: '#fff',
                textAlign: "center",
                fontSize: 20,
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate("Login")}
            style={{
              padding: 10,
            }}
          >
            <Text
              style={{
                color: '#000',
                textAlign: "center",
                fontSize: 14,
              }}
            >
              Already have an account
            </Text>
          </TouchableOpacity>
  
          <View
            style={{
              marginVertical: 10,
            }}
          >
            <Text
              style={{
                color: '#1F41BB',
                textAlign: "center",
                fontSize: 14,
              }}
            >
              Or continue with
            </Text>
  
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: '#ECECEC',
                  borderRadius: 5,
                  marginHorizontal: 10,
                }}
              >
                <Ionicons
                  name="logo-google"
                  color={'#000'}
                  size={20}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: '#ECECEC',
                  borderRadius: 5,
                  marginHorizontal: 10,
                }}
              >
                <Ionicons
                  name="logo-apple"
                  color={'#ECECEC'}
                  size={20}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: 20,
                  backgroundColor: '#ECECEC',
                  borderRadius: 5,
                  marginHorizontal: 10,
                }}
              >
                <Ionicons
                  name="logo-facebook"
                  color={'#000'}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  