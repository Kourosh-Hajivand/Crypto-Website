"use client";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import Planet from "./Planet";
import { OrbitControls } from "@react-three/drei";

function HeroCanves() {
  const pointRef = useRef(null!);
  return (
    <Canvas camera={{ position: [0, 13, 15] }} className="bg-black">
      <ambientLight intensity={0.8} />
      <OrbitControls />
      <pointLight ref={pointRef} intensity={100} position={[0, 5, 10]} />
      {pointRef.current && <pointLightHelper args={[pointRef.current, 110]} />}
      <Planet scale={2} />
    </Canvas>
  );
}

export default HeroCanves;
