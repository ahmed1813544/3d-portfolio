"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingCrystal() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
      ref.current.rotation.y += 0.008;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.2, 1]} />
        <MeshDistortMaterial
          color="#6d28d9"
          roughness={0.15}
          metalness={0.9}
          distort={0.15}
          speed={1.5}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export function AboutScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[3, 3, 3]} intensity={0.8} color="#c4b5fd" />
        <pointLight position={[-3, -3, 2]} intensity={0.5} color="#7c3aed" />
        <FloatingCrystal />
      </Canvas>
    </div>
  );
}
