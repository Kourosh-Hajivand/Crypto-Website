import { ThreeElements } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
function Planet(props: ThreeElements["mesh"]) {
  const meshRef = useRef<THREE.Mesh>(null!);

  return (
    <mesh {...props} ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color={"#ff6d6d"} />
    </mesh>
  );
}

export default Planet;
