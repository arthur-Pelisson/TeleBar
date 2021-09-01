import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";

import { Text } from "react-native";

export default function SettingsScreen() {
  return (
    <ScrollView>
      <Text style={styles.text}>mon compte</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  text: {
    color: "white",
  },
});
