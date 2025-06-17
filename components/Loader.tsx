import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} />
    </View>
  );
};

export default Loader;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});
