import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CameraScreen from "./CameraScreen";
import FormScreen from "./FormScreen";
import ProjectScreen from "./ProjectScreen";
import SavedScreen from "./SavedScreen";

const Stack = createStackNavigator();

export default function SavedStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold"
        },
        headerStyle: {
          height: 100,
          backgroundColor: "#57AE5B"
        },
        headerTintColor: "#fff"
      }}
    >
      <Stack.Screen name="Saved" component={SavedScreen} />
      <Stack.Screen name="Project" component={ProjectScreen} />
      <Stack.Screen name="Form" component={FormScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
}
