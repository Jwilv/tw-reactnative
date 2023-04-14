import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
  } from "react-native";
  import React, { useState } from "react";
  
  export default function AppTextInput({ ...otherProps }) {
    const [focused, setFocused] = useState<boolean>(false);
    return (
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholderTextColor={'#626262'}
        style={[
          {
            fontSize: 14,
            padding: 20,
            backgroundColor: '#f1f4ff',
            borderRadius: 10,
            marginVertical: 10,
          },
          focused && {
            borderWidth: 3,
            borderColor: 'blue',
            shadowOffset: { width: 4, height: 10 },
            shadowColor: 'blue',
            shadowOpacity: 0.2,
            shadowRadius: 10,
          },
        ]}
        {...otherProps}
      />
    );
  };
  
  const styles = StyleSheet.create({});