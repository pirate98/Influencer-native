import { StyleSheet } from "react-native";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

const InputPassword = () => {
  return (
    <View style={{ position: "relative" }}>
      <TextInput style={styles.inputStyle} placeholder="Password"></TextInput>
      <TouchableOpacity style={styles.touchAbleOpacityStyle}>
        <Text style={styles.showTextStyle}>Show</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  touchAbleOpacityStyle: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  showTextStyle: {
    color: "#0055AA",
  },
  inputStyle: {
    height: 50,
    boxSizing: "border-box",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    position: "relative",
  },
});
export default InputPassword;
