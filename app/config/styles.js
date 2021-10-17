import { Platform, StyleSheet, Dimensions } from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height'
import colors from "./colors";

export default {
  colors,
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
};
const heightStatusbar = getStatusBarHeight()
const { width, height } = Dimensions.get('window');
export const Width = (num: number) => width * (num / 100);
export const Height = (num: number) => height * (num / 100);
export const nstyles = StyleSheet.create({
  ncontainer: {
    flex: 1,
    marginTop: heightStatusbar
  }
})