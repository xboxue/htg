import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CameraScreen from "./CameraScreen";
import FormScreen from "./FormScreen";
import HomeScreen from "./HomeScreen";
import ProjectScreen from "./ProjectScreen";
import ReviewScreen from "./ReviewScreen";
import SuggestionsScreen from "./SuggestionsScreen";

const Stack = createStackNavigator();

export default function HomeStackScreen() {
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
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Project" component={ProjectScreen} />
      <Stack.Screen name="Form" component={FormScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="Review" component={ReviewScreen} />
      <Stack.Screen name="Suggestions" component={SuggestionsScreen} />
    </Stack.Navigator>
  );
  Screen;
}
