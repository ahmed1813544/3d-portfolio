"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function RotatingTorus() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
      ref.current.rotation.y += 0.005;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={ref} position={[0, 0, 0]}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function FloatingSphere({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.3;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#7c3aed"
          emissiveIntensity={0.5}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    </Float>
  );
}

function FloatingOctahedron({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
      ref.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.6 + position[2]) * 0.4;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[0.15]} />
      <meshStandardMaterial
        color="#c4b5fd"
        emissive="#6d28d9"
        emissiveIntensity={0.4}
        roughness={0.2}
        metalness={0.9}
        wireframe
      />
    </mesh>
  );
}

function ParticleField() {
  const count = 200;
  const ref = useRef<THREE.Points>(null);

  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return g;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={ref} geometry={geom}>
      <pointsMaterial
        size={0.02}
        color="#a78bfa"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#c4b5fd" />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#7c3aed" />
        <pointLight position={[0, 0, 3]} intensity={0.8} color="#a78bfa" />

        <RotatingTorus />
        <FloatingSphere position={[-2.5, 1.5, -1]} />
        <FloatingSphere position={[2.5, -1, -2]} />
        <FloatingSphere position={[-1.5, -2, -1.5]} />
        <FloatingOctahedron position={[2, 2, -1]} />
        <FloatingOctahedron position={[-2.5, -1.5, -2]} />
        <FloatingOctahedron position={[1.5, -2.5, -1]} />

        <ParticleField />
        <Sparkles count={50} size={2} scale={8} speed={0.5} color="#a78bfa" />
      </Canvas>
    </div>
  );
}
