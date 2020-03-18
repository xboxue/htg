import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import UploadFAB from "../components/UploadFAB";

export default function ProjectScreen({ route, navigation }) {
  const props = route.params;
  const isFocused = useIsFocused();

  return (
    <ScrollView style={styles.container}>
      <UploadFAB isFocused={isFocused} />
      <Text style={{ fontSize: 24 }}>{props.title}</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 18
        }}
      >
        <Text style={styles.subtitle}>{props.date}</Text>
        <Text style={styles.subtitle}>{props.org}</Text>
        <Ionicons
          name="ios-heart"
          size={16}
          color="#57AE5B"
          style={{ marginRight: 4 }}
        />
        <Text style={styles.subtitle}>{props.saves}</Text>
      </View>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Description</Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>
        {props.description}
      </Text>

      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Instructions</Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>
        {props.instructions}
      </Text>

      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 12 }}>
        Location
      </Text>
      <MapView
        initialRegion={{
          latitude: 45.294888,
          longitude: -75.8648,
          latitudeDelta: 10,
          longitudeDelta: 10
        }}
        style={{
          height: 200,
          marginBottom: 20
        }}
      />

      <Text style={{ marginBottom: 16, fontSize: 18, fontWeight: "bold" }}>
        Past Photos
      </Text>
      <Image
        style={{ height: 200 }}
        source={{
          uri:
            "https://media.npr.org/assets/img/2017/04/25/istock-115796521-fcf434f36d3d0865301cdcb9c996cfd80578ca99-s800-c85.jpg"
        }}
      />
      <Text style={{ marginBottom: 30, fontSize: 14 }}>
        Posted by {props.user}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  subtitle: { color: "grey", marginRight: 18 }
});
