import { useFrame } from "@react-three/fiber/native";
import React, { useRef } from "react";
import * as THREE from "three";

type BoxProps = React.JSX.IntrinsicElements["mesh"];

const Box: React.FC<BoxProps> = (props) => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((_, delta: number) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
    }
  });

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};

export default Box;
