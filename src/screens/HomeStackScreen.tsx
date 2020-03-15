import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CameraScreen from "./CameraScreen";
import FormScreen from "./FormScreen";
import HomeScreen from "./HomeScreen";
import ProjectScreen from "./ProjectScreen";

const Stack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Project" component={ProjectScreen} />
      <Stack.Screen name="Form" component={FormScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
  Screen;
}
