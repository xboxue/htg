import { Camera } from "expo-camera";
import React, { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import { IconButton } from "react-native-paper";

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const camera = useRef(null);

  const takePicture = async () => {
    if (camera.current) {
      const photo = await camera.current.takePictureAsync();
      navigation.navigate("Review", { photo: photo });
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) return <View />;
  if (hasPermission === false) return <Text>No access to camera</Text>;

  return (
    <View style={{ flex: 1 }}>
      <Camera ref={camera} style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            justifyContent: "flex-end"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly"
            }}
          >
            <IconButton
              icon="camera-switch"
              color="#fff"
              size={40}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            />
            <IconButton
              icon="circle"
              color="rgba(255,255,255,0.5)"
              size={64}
              onPress={() => {
                takePicture();
              }}
            />
            <IconButton
              icon="image"
              color="#fff"
              size={40}
              onPress={() => {}}
            />
          </View>
        </View>
      </Camera>
    </View>
  );
}
