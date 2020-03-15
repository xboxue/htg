import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { IconButton } from "react-native-paper";

export default function ReviewScreen({ route, navigation }) {
  const props = route.params;
  return (
    <View style={styles.container}>
      <Image style={{ flex: 1 }} source={{ uri: props.photo.uri }} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly"
        }}
      >
        <IconButton
          icon="replay"
          color="#57AE5B"
          size={32}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <IconButton
          icon="check"
          color="#57AE5B"
          size={32}
          onPress={() => {
            navigation.navigate("Form", { photo: props.photo });
          }}
        />
        <IconButton icon="close" color="#57AE5B" size={32} onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7"
    // backgroundColor: "#fff"
  }
});
