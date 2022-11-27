import { FlatList, ImageBackground } from "react-native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import drawImage from "../../assets/images/drawerbkg.png";
import avatarImage from "../../assets/images/avatar.png";

import Home from "../../assets/images/Home.png";
import Profile from "../../assets/images/Profile.png";
import About from "../../assets/images/About.png";
import Plans from "../../assets/images/Plans.png";
import Message from "../../assets/images/Message.png";
import Purchase from "../../assets/images/Purchase.png";
import Schedule from "../../assets/images/Schedule.png";
import Cart from "../../assets/images/Cart.png";
import Promotion from "../../assets/images/Promotion.png";
import Support from "../../assets/images/Support.png";
import Settings from "../../assets/images/Settings.png";

const ListData = [
  {
    id: "1",
    content: "Home",
    icon: Home,
  },
  {
    id: "2",
    content: "Profile",
    icon: Profile,
  },
  {
    id: "3",
    content: "About Us",
    icon: About,
  },
  {
    id: "4",
    content: "Plans",
    icon: Plans,
  },
  {
    id: "5",
    content: "Message",
    icon: Message,
  },
  {
    id: "6",
    content: "Purchase",
    icon: Purchase,
  },
  {
    id: "7",
    content: "Schedule",
    icon: Schedule,
  },
  {
    id: "8",
    content: "My cart",
    icon: Cart,
  },
  {
    id: "9",
    content: "Promotion",
    icon: Promotion,
  },
  {
    id: "10",
    content: "Support",
    icon: Support,
  },
  {
    id: "11",
    content: "Settings",
    icon: Settings,
  },
];

const Item = ({ item }) => {
  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={item.icon}
        width="23"
        height="23"
        style={{ marginTop: 25, marginLeft: 23 }}
      ></Image>
      <View>
        <Text
          style={{
            marginLeft: 18,
            marginTop: 25,
            fontSize: 14,
            lineHeight: 17,
          }}
        >
          {item.content}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const DrawerContent = () => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <ImageBackground
            source={drawImage}
            style={{
              width: 327,
              height: 172,
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                lineHeight: 24,
                color: "#FFFFFF",
                marginRight: 21,
                marginBottom: 12,
              }}
            >
              Victoria Robertson
            </Text>
          </ImageBackground>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={avatarImage}
              style={{
                borderRadius: 50,
                borderWidth: 4,
                borderColor: "#FFFFFF",
                marginTop: -43,
                marginLeft: 13,
                width: 70,
                height: 70,
              }}
            ></Image>
          </View>
          <View
            style={{
              alignItems: "flex-end",
              marginRight: 27,
              marginTop: 11,
            }}
          >
            <Text style={{ color: "#222222" }}>+91 123412349</Text>
          </View>
          <View
            style={{
              alignItems: "flex-end",
              marginRight: 20,
              marginTop: 11,
            }}
          >
            <Text style={{ color: "#222222" }}>jenny@gmail.com</Text>
          </View>
        </View>
      </View>
      <View>
        <FlatList
          data={ListData}
          renderItem={Item}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 327,
  },
  headerStyle: {
    position: "absolute",
  },
});

export default DrawerContent;
