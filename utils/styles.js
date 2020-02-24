import { StyleSheet } from 'react-native';
import { purple, gray, white, red, orange, blue, lightPurp, pink, black } from './colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    color: black,
    padding: 20
  },
  iosSubmitBtn: {
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  androidSubmitBtn: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    fontSize: 16,
    textAlign: "center"
  },
  blackButton: {
    backgroundColor: black,
    color: white,
  },
  whiteButton: {
    backgroundColor: white,
    color: black,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30
  },
});