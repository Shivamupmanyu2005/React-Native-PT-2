import React from "react";
import { View, Text, Button } from "react-native";

export default function ProfileScreen({ navigation }) {

  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
      
      <Text style={{ fontSize:22 }}>Profile Screen</Text>

      {/* Button to go back */}
      <Button
        title="Go Back Home"
        onPress={() => navigation.navigate("Home")}
      />

    </View>
  );

}