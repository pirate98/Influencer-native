import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import Loading from "./pages/dashboard/Loading";
import SignUp from "./pages/signup/SignUp";
import React from "react";
import SignIn from "./pages/singin/SignIn";
import Home from "./pages/home/Home";
import DrawNavigation from "./pages/drawNavigation/DrawNavigation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerMode: "none",
          }}
        >
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Drawer" component={DrawNavigation}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
