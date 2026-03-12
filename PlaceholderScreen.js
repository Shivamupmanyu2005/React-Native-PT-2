import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import TabBar from "./TabBar";

export default function PlaceholderScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Image
            source={{ uri: "https://placehold.co/220x220/EEE2D2/6B675F.png?text=Wishlist" }}
            style={styles.image}
          />
          <Text style={styles.title}>Wishlist</Text>
          <Text style={styles.text}>Saved items will appear here.</Text>
        </View>
      </ScrollView>

      <TabBar navigation={navigation} activeTab="Wishlist" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f6f1e8",
  },
  content: {
    padding: 18,
    paddingBottom: 120,
  },
  card: {
    backgroundColor: "#fffaf3",
    borderRadius: 24,
    padding: 24,
    alignItems: "center",
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 22,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  text: {
    color: "#6b675f",
  },
});
