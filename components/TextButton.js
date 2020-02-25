import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { styles } from '../utils/styles'

export default function TextButton({ text, style, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={style}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}
