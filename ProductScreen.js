import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import TabBar from "./TabBar";

const PRODUCTS = [
  {
    id: "1",
    name: "Canvas Backpack",
    price: "Rs. 1599",
    tag: "Popular",
    image: "https://placehold.co/600x400/E7DCC8/2D2A26.png?text=Backpack",
  },
  {
    id: "2",
    name: "Wireless Headphones",
    price: "Rs. 2299",
    tag: "Featured",
    image: "https://placehold.co/600x400/D9E4EC/243447.png?text=Headphones",
  },
];

export default function ProductScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        {PRODUCTS.map((product) => (
          <View key={product.id} style={styles.card}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <View style={styles.body}>
              <Text style={styles.tag}>{product.tag}</Text>
              <Text style={styles.name}>{product.name}</Text>
              <Text style={styles.price}>{product.price}</Text>

              <View style={styles.actions}>
                <Pressable style={styles.secondaryButton}>
                  <Text style={styles.secondaryText}>Wishlist</Text>
                </Pressable>
                <Pressable style={styles.primaryButton}>
                  <Text style={styles.primaryText}>Add to Cart</Text>
                </Pressable>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <TabBar navigation={navigation} activeTab="Products" />
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
    borderRadius: 22,
    overflow: "hidden",
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 180,
    backgroundColor: "#ddd",
  },
  body: {
    padding: 16,
  },
  tag: {
    fontSize: 12,
    color: "#1f3b2f",
    fontWeight: "700",
    textTransform: "uppercase",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1a1a1a",
    marginTop: 8,
  },
  price: {
    marginTop: 6,
    marginBottom: 14,
    fontSize: 17,
    color: "#1f3b2f",
    fontWeight: "700",
  },
  actions: {
    flexDirection: "row",
    gap: 10,
  },
  secondaryButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#d1c5ae",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
  },
  secondaryText: {
    color: "#5b5348",
    fontWeight: "700",
  },
  primaryButton: {
    flex: 1,
    backgroundColor: "#d96c3d",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
  },
  primaryText: {
    color: "#fff",
    fontWeight: "700",
  },
});
