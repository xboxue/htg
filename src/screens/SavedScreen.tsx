import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import { data } from "../data";

export default function SavedScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.title}
        data={data.slice(1)}
        renderItem={({ item }) => <Card {...item}></Card>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
