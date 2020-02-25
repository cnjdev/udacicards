import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { styles } from '../utils/styles';

function FormButton({ text, style, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          Platform.OS === "ios" ? styles.iosSubmitBtn : styles.androidSubmitBtn,
          style
        ]}
        onPress={onPress}
      >
        <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default FormButton
