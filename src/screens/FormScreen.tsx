import * as ImagePicker from "expo-image-picker";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import MapView from "react-native-maps";

export default function Form({ navigation }) {
  const openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>Add Submission</Text>

      {/* <TouchableOpacity onPress={openImagePickerAsync}>
        <Text style={{ fontSize: 16 }}>Upload Photo</Text>
      </TouchableOpacity> */}

      <Text style={{ fontSize: 16 }}>Add Location</Text>
      <MapView
        style={{
          height: 200
        }}
      />

      <View style={{ marginBottom: 10 }}>
        <Button
          title="Take Photo"
          onPress={() => navigation.navigate("Camera")}
        />
      </View>
      <Button title="Add Photo" onPress={openImagePickerAsync} />

      <Text style={{ fontSize: 16 }}>Notes</Text>
      <TextInput
        multiline
        numberOfLines={4}
        style={{
          borderWidth: 1,
          borderColor: "#e0e0e0"
        }}
        placeholder="Description"
      ></TextInput>
      <Button onPress={() => {}} title="Submit"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  }
});
