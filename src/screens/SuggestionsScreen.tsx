import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Card, Searchbar } from "react-native-paper";
import { data } from "../utils/suggestions";

export default function SuggestionsScreen({ route, navigation }) {
  const [value, setValue] = useState("");
  const props = route.params;

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
            uri: props.image.uri
          }}
        />
        <Text>{props.caption}</Text>
      </View>
      <View style={{ paddingTop: 20 }}>
        <Searchbar
          placeholder="Search"
          value={value}
          onChangeText={setValue}
          style={{ marginHorizontal: 10, marginBottom: 10 }}
        />
        <FlatList
          keyExtractor={item => item.name}
          data={data}
          renderItem={({ item }) => (
            <Card>
              <Card.Title
                left={() => (
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={{
                      uri: item.image
                    }}
                  />
                )}
                title={item.name}
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
