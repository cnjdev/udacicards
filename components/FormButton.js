import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { styles } from '../utils/styles';

function FormButton({ text, style, onPress }) {
  return (
    <TouchableOpacity
      style={[
        Platform.OS === "ios" ? styles.iosSubmitBtn : styles.androidSubmitBtn,
        style
      ]}
      onPress={onPress}
    >
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
}

export default FormButton
