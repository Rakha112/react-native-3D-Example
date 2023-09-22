import React, {Suspense} from 'react';
import {Canvas} from '@react-three/fiber/native';
import {StyleSheet, View} from 'react-native';
import useControls from 'r3f-native-orbitcontrols';
import Duck from './src/assets/Duck';

const App = () => {
  const [OrbitControls, events] = useControls();
  return (
    <View style={styles.container} {...events}>
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={2} />
        <directionalLight position={[0, 1, 0]} args={['white', 2]} />
        <Suspense fallback={null}>
          <Duck />
        </Suspense>
      </Canvas>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});
