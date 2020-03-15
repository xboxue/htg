import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";
import MapView from "react-native-maps";
import { Button, Card, TextInput } from "react-native-paper";

export default function Form({ route, navigation }) {
  const { upload, photo } = route.params;
  const [selectedImage, setSelectedImage] = useState(photo);
  const date = new Date();

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage(pickerResult);
  };

  useEffect(() => {
    if (upload) openImagePickerAsync();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Content>
          <Button
            // labelStyle={{ color: "black" }}
            color="#3F9142"
            style={{ marginBottom: 5 }}
            icon="camera"
            mode="contained"
            onPress={openImagePickerAsync}
          >
            Add Photo
          </Button>
          {selectedImage && (
            <Image
              source={{ uri: selectedImage.uri }}
              style={styles.thumbnail}
            />
          )}
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            What did you see?
          </Text>
          <Button
            icon="plus"
            mode="outlined"
            color="#3F9142"
            style={{ borderColor: "#57AE5B", borderWidth: 1 }}
            onPress={() => {
              navigation.navigate("Suggestions", { image: selectedImage });
            }}
          >
            Add
          </Button>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Notes</Text>
          <TextInput
            multiline
            underlineColor="#57AE5B"
            numberOfLines={4}
            style={{
              // borderWidth: 1,
              borderColor: "#57AE5B",
              backgroundColor: "#F7F7F7"
            }}
          />
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Time</Text>
          <Text style={{ fontSize: 18 }}>{date.toLocaleString()}</Text>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Location</Text>
          <Text style={{ fontSize: 18 }}>
            Osprey, Ottawa, ON K2M 2Z6, Canada
          </Text>
          <MapView
            style={{
              height: 200
            }}
          />
        </Card.Content>
      </Card>

      {/* <ScrollView style={{ marginBottom: 10 }}>
        <Button onPress={() => navigation.navigate("Camera")}>
          Take Photo
        </Button>
      </View> */}

      <Card>
        <Card.Content>
          <Button
            mode="contained"
            color="#3F9142"
            onPress={() => {
              navigation.goBack();
            }}
          >
            Submit
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  thumbnail: {
    width: 100,
    height: 100
  }
});
