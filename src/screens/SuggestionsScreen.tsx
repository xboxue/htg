import React, { useState } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { Card, Searchbar } from "react-native-paper";
import { data } from "../data";

export default function SuggestionsScreen({ navigation }) {
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingVertical: 10,
          backgroundColor: "#F7F7F7"
        }}
      >
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri:
              "https://media.npr.org/assets/img/2017/04/25/istock-115796521-fcf434f36d3d0865301cdcb9c996cfd80578ca99-s800-c85.jpg"
          }}
        />
      </View>
      <View style={{ paddingTop: 20 }}>
        <Searchbar
          placeholder="Search"
          value={value}
          onChangeText={setValue}
          style={{ marginHorizontal: 10, marginBottom: 10 }}
        />
        <FlatList
          keyExtractor={item => item.title}
          data={data}
          renderItem={({ item }) => (
            <Card>
              <Card.Title
                left={() => (
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={{
                      uri:
                        "https://media.npr.org/assets/img/2017/04/25/istock-115796521-fcf434f36d3d0865301cdcb9c996cfd80578ca99-s800-c85.jpg"
                    }}
                  />
                )}
                title="Dog"
              ></Card.Title>
            </Card>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
