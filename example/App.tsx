import { View, Text } from "react-native";
import React from "react";
import { addCardToAppleWallet } from "nfc-payments";

const App = () => {
  const addToWallet = async () => {
    try {
      const res = await addCardToAppleWallet(
        "epheralkey2",
        "activation data",
        "bchdbc"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={addToWallet}
        style={{ height: 100, width: 100, backgroundColor: "black" }}
      >
        App
      </Text>
    </View>
  );
};

export default App;
