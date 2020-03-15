import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import { data } from "../data";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.title}
        data={data}
        renderItem={({ item }) => <Card {...item}></Card>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
    // backgroundColor: "#fff"
  }
});
