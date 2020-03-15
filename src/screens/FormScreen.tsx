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
      <Button
        labelStyle={{ color: "black" }}
        color="black"
        style={{ borderColor: "#57AE5B", borderWidth: 1 }}
        icon="camera"
        mode="outlined"
        onPress={openImagePickerAsync}
      >
        Add Photo
      </Button>
      {selectedImage && (
        <Image source={{ uri: selectedImage.uri }} style={styles.thumbnail} />
      )}

      <Card>
        <Card.Content>
          <Text>What did you see?</Text>
          <Button
            icon="camera"
            mode="contained"
            onPress={() => {
              navigation.navigate("Suggestions");
            }}
          >
            Add
          </Button>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Text>{date.toLocaleString()}</Text>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Text>Osprey, Ottawa, ON K2M 2Z6, Canada</Text>
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

      <TextInput
        mode="outlined"
        multiline
        numberOfLines={4}
        style={{
          borderWidth: 1,
          borderColor: "#e0e0e0",
          backgroundColor: "#fff"
        }}
        label="Notes"
      />
      {/* <Button onPress={() => {}} title="Submit"></Button> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  thumbnail: {
    width: 100,
    height: 100
  }
});
