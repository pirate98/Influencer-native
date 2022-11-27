import { View, Text, StyleSheet, TextInput } from "react-native";
import InputPassword from "../../components/InputPassword";
import React from "react";
import { Checkbox } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import GoogleImage from "../../assets/images/Google.png";
import FacebookImage from "../../assets/images/Facebook.png";
import InstagramImage from "../../assets/images/Instagram.png";
import TikTokImage from "../../assets/images/TikTok.png";
import Twitter from "../../assets/images/Twitter.png";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  const navigation = useNavigation();

  const onCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const onHomeNavigate = () => {
    navigation.navigate("Drawer");
  };
  return (
    <>
      <View style={styles.SignInViewStyle}>
        <View>
          <Text style={styles.signInTextStyle}>Sign In</Text>
        </View>
        <View style={styles.inputViewStyle}>
          <TextInput style={styles.inputStyle} placeholder="Email"></TextInput>
          <InputPassword></InputPassword>
        </View>
        <View style={styles.rememberMeStyle}>
          <View style={styles.checkboxViewStyle}>
            <Checkbox
              status={isChecked ? "checked" : "unchecked"}
              onPress={onCheckboxChange}
              style={styles.checkboxStyle}
            ></Checkbox>
            <Text style={styles.checkboxTextStyle}>Remember Me</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.view3Style}>
          <TouchableOpacity
            style={styles.signInByttonStyle}
            onPress={onHomeNavigate}
          >
            <Text style={styles.signInButtonTextColor}>Log In</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 50,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "rgba(33, 33, 33, 0.08)",
            }}
          />
          <View>
            <Text style={{ width: 50, textAlign: "center" }}>or</Text>
          </View>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "rgba(33, 33, 33, 0.08)",
            }}
          />
        </View>
        <View style={styles.imageStyle}>
          <TouchableOpacity style={styles.imagePadding}>
            <Image source={GoogleImage}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imagePadding}>
            <Image source={Twitter}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imagePadding}>
            <Image source={TikTokImage}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imagePadding}>
            <Image source={InstagramImage}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imagePadding}>
            <Image source={FacebookImage}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    marginTop: 65,
    paddingHorizontal: 35,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  signInButtonTextColor: {
    color: "#FFFFFF",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "600",
    textAlign: "center",
  },
  signInByttonStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 51,
    backgroundColor: "#0055AA",
    borderRadius: 100,
  },
  view3Style: {
    paddingHorizontal: 16,
    paddingTop: 45,
  },
  checkboxViewStyle: {
    flexDirection: "row",
  },
  checkboxStyle: {
    backgroundColor: "red",
    borderRadius: 4,
    borderColor: "red",
  },
  checkboxTextStyle: {
    marginTop: 10,
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 17,
    paddingRight: 32,
    color: "#666666",
    textAlign: "left",
    justifyContent: "center",
  },
  rememberMeStyle: {
    paddingHorizontal: 16,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  SignInViewStyle: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  signInTextStyle: {
    textAlign: "left",
    marginTop: 57,
    marginLeft: 15,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: "bold",
  },
  inputViewStyle: {
    marginTop: 35,
    paddingHorizontal: 16,
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
export default SignIn;
