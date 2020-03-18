import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Chip, IconButton } from "react-native-paper";

interface Props {
  title: string;
  date: string;
  user: string;
  org: string;
  tag: string;
  saves: number;
  saved: boolean;
}

export default function Card(props: Props) {
  const navigation = useNavigation();
  const [saved, setSaved] = useState(props.saved);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 10
        }}
      >
        <Chip
          onPress={() => {}}
          style={{ backgroundColor: "#F7F7F7", borderColor: "#E1E1E1" }}
          textStyle={{ fontSize: 12, marginVertical: 0 }}
        >
          {props.tag}
        </Chip>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Project", props);
        }}
      >
        <Text style={{ fontSize: 18 }}>{props.title}</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Text style={styles.subtitle}>{props.date}</Text>
        <Text style={styles.subtitle}>{props.org}</Text>
        <IconButton
          style={{ margin: 0 }}
          icon={saved ? "heart" : "heart-outline"}
          color={saved ? "#57AE5B" : "#9E9E9E"}
          size={16}
          onPress={() => setSaved(!saved)}
        />
        <Text style={styles.subtitle}>{props.saves}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
    backgroundColor: "#fff",
    marginBottom: 10
  },
  subtitle: { color: "grey", marginRight: 18 }
});
