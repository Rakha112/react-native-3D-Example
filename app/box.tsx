import Box from "@/components/Box";
import { Canvas } from "@react-three/fiber/native";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BoxScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Canvas style={styles.canvas}>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Box position={[-0.7, 0, 0]} />
        <Box position={[0.6, 0, 0]} />
      </Canvas>
    </SafeAreaView>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  canvas: {
    ...StyleSheet.absoluteFillObject,
  },
});
