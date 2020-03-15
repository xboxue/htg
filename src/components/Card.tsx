import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Chip } from "react-native-paper";

interface Props {
  title: string;
  date: string;
  user: string;
  org: string;
  tag: string;
  saves: number;
}

export default function Card(props: Props) {
  const navigation = useNavigation();
  const [saved, setSaved] = useState(false);

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
          style={{ backgroundColor: "#f5f5f5" }}
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
        <TouchableOpacity onPress={() => setSaved(!saved)}>
          <Ionicons
            name={saved ? "ios-heart" : "ios-heart-empty"}
            size={16}
            color={saved ? "green" : "grey"}
            style={{ marginRight: 4 }}
          />
        </TouchableOpacity>
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
