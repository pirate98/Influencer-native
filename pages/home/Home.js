import { Dimensions, StyleSheet, Text, View } from "react-native";
import HamburgerIcon from "../drawNavigation/HamburgerIcon";
// const { width } = Dimensions.get("window");
const Home = () => {
  return (
    <View style={styles.container}>
      <HamburgerIcon></HamburgerIcon>
      <View style={styles.homeViewStyle}>
        <Text style={styles.homeTextStyle}>Home</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    // marginLeft: 32,
    // marginTop: 70,
  },
  homeViewStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
  },
  homeTextStyle: {
    fontStyle: "bold",
    fontSize: 30,
    lineHeight: 36,
  },
});

export default Home;
