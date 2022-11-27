import { Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../home/Home";
import Insights from "../insights/Insights";
import DrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator();

const DrawNavigation = () => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false, drawerStyle: { width: 327 } }}
        drawerContent={DrawerContent}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Insights" component={Insights} />
      </Drawer.Navigator>
    </>
  );
};

export default DrawNavigation;
