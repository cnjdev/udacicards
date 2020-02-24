import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity } from "react-native";

export default function TextButton({ text, style, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style}>{text}</Text>
    </TouchableOpacity>
  )
}
