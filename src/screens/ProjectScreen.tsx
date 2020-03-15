import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import MapView from "react-native-maps";
import Upload from "../components/Upload";

export default function ProjectScreen({ route, navigation }) {
  const {
    title,
    date,
    description,
    user,
    org,
    saves,
    instructions
  } = route.params;

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={{ fontSize: 24 }}>{title}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 18
          }}
        >
          <Text style={styles.subtitle}>{date}</Text>
          <Text style={styles.subtitle}>{org}</Text>
          <Ionicons
            name="ios-heart"
            size={16}
            color="green"
            style={{ marginRight: 4 }}
          />
          <Text style={styles.subtitle}>{saves}</Text>
        </View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Description</Text>
        <Text style={{ fontSize: 16, marginBottom: 20 }}>{description}</Text>

        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Instructions</Text>
        <Text style={{ fontSize: 16, marginBottom: 20 }}>{instructions}</Text>

        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 12 }}>
          Location
        </Text>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
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
        <Text style={{ marginBottom: 30, fontSize: 16 }}>Posted by {user}</Text>

        <Button
          title="Add Submission"
          onPress={() => navigation.navigate("Form")}
        ></Button>
      </ScrollView>
      <Upload />
    </>
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
