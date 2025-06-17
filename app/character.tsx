import { Canvas } from "@react-three/fiber/native";
import React, { Suspense, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Character from "../components/Character";
import Loader from "../components/Loader";
import Trigger from "../components/Trigger";

const Character3DScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loader />}
      <View style={styles.modelContainer}>
        <Canvas
          onCreated={(state) => {
            const _gl: any = state.gl.getContext();
            const pixelStorei = _gl.pixelStorei.bind(_gl);
            _gl.pixelStorei = function (...args: any[]) {
              const [parameter] = args;
              switch (parameter) {
                case _gl.UNPACK_FLIP_Y_WEBGL:
                  return pixelStorei(...args);
              }
            };
          }}
        >
          <ambientLight intensity={3} />
          <Suspense fallback={<Trigger setLoading={setLoading} />}>
            <Character />
          </Suspense>
        </Canvas>
      </View>
    </SafeAreaView>
  );
};

export default Character3DScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  modelContainer: {
    flex: 1,
  },
});
