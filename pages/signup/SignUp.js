import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Checkbox, Divider } from "react-native-paper";
import { TouchableOpacity } from "react-native";

import InputPassword from "../../components/InputPassword";
import { useNavigation } from "@react-navigation/native";
const SignUp = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  const navigation = useNavigation();

  const onCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const onSignInClick = () => {
    navigation.navigate("SignIn");
  };
  return (
    <>
      <View style={styles.SignUpViewStyle}>
        <View style={styles.view1Style}>
          <Text style={styles.fontStyle}>Sign Up</Text>
          <TextInput style={styles.inputStyle} placeholder="Name"></TextInput>
          <TextInput style={styles.inputStyle} placeholder="Email"></TextInput>
          <InputPassword></InputPassword>
          <TextInput
            style={styles.inputStyle}
            placeholder="Phone Number"
          ></TextInput>
        </View>
        <View style={styles.view2Style}>
          <Checkbox
            status={isChecked ? "checked" : "unchecked"}
            onPress={onCheckboxChange}
            style={styles.checkboxStyle}
          ></Checkbox>
          <View>
            <View>
              <Text style={styles.checkboxTextStyle}>
                By signing up you accept the Terms of Service and Privacy policy
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.view3Style}>
          <TouchableOpacity style={styles.signUpByttonStyle}>
            <Text style={styles.signUpButtonTextColor}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.forgotButtonAlignStyle}>
            <Text style={styles.forgotButtonStyle}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Divider style={styles.dividerStyle}></Divider>
        </View>
        <View>
          <TouchableOpacity
            style={styles.signInStyleAlignStyle}
            onPress={onSignInClick}
          >
            <Text style={styles.signInButtonStyle}>
              Already have an account? Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  SignUpViewStyle: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  signInStyleAlignStyle: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  signInButtonStyle: {
    color: "#000000",
    fontSize: 14,
    lineHeight: 17,
    fontStyle: "normal",
  },
  dividerStyle: {
    marginTop: 48,
  },
  forgotButtonAlignStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  forgotButtonStyle: {
    color: "#0055AA",
    fontSize: 16,
    lineHeight: 19,
    fontStyle: "normal",
  },
  signUpByttonStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 51,
    backgroundColor: "#0055AA",
    borderRadius: 100,
  },
  signUpButtonTextColor: {
    color: "#FFFFFF",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "600",
    textAlign: "center",
  },
  view1Style: {
    paddingHorizontal: 16,
  },
  view2Style: {
    flexDirection: "row",
    display: "flex",
    paddingLeft: 9,
    marginTop: -5,
  },
  view3Style: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  checkboxTextStyle: {
    marginTop: 10,
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 17,
    paddingRight: 32,
    color: "#666666",
    textAlign: "left",
    width: 400,
    justifyContent: "center",
  },
  fontStyle: {
    // fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    marginTop: 60,
    fontSize: 30,
    lineHeight: 36,
    textAlign: "center",
    marginBottom: 32,
    // color: "#000000",
  },
  checkboxStyle: {
    backgroundColor: "red",
    borderRadius: 4,
    borderColor: "red",
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
export default SignUp;
