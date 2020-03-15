import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import HomeStackScreen from "./src/screens/HomeStackScreen";
import SavedStackScreen from "./src/screens/SavedStackScreen";
import SearchScreen from "./src/screens/SearchScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={
                  route.name === "Home"
                    ? "ios-home"
                    : route.name === "Search"
                    ? "ios-search"
                    : "ios-heart"
                }
                size={size}
                color={color}
              />
            )
          })}
          tabBarOptions={{
            activeTintColor: "#57AE5B",
            inactiveTintColor: "gray"
          }}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Saved" component={SavedStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
