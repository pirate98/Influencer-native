import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HamburgerImage from "../../assets/images/hamburger.png";

const HamburgerIcon = () => {
  const navigation = useNavigation();
  const onToggleDrawer = () => navigation.toggleDrawer();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggleDrawer}>
        <Image
          source={HamburgerImage}
          style={{ width: 18, height: 12 }}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 32,
    top: 80,
    // marginLeft: 32,
    // marginTop: 70,
  },
});

export default HamburgerIcon;
