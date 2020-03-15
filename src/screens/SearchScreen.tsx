import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchScreen({ navigation }) {
  const [value, setValue] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Search"
        value={value}
        onChangeText={setValue}
      ></Searchbar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "#fff"
  }
});
