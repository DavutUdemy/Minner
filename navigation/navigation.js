import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainContainer from "../navigation/MainContainer";
import LoginScreen from "./screens/LoginScreen";
import SplashScreen from "./screens/SplashScreen";
 

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={MainContainer} />
 
        </Stack.Navigator>
      </NavigationContainer>
  );
}