import {
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import Logo from "../../assets/logo.png";
const { height } = Dimensions.get("window");
const Loading = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate("SignUp");
    }, 2000);
  });
  return (
    <View style={styles.backgroundColor}>
      <View style={styles.totalHeight}>
        <Image source={Logo}></Image>
      </View>
      <View style={styles.marginSpinner}>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  totalHeight: {
    height: height,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  marginSpinner: {
    bottom: "15%",
    left: "47%",
    position: "absolute",
  },
  backgroundColor: {
    backgroundColor: "#0055AA",
  },
});

export default Loading;
