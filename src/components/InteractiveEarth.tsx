'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function EarthSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Create earth texture
  const earthTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    
    // Create a simple earth-like texture
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#0369a1'); // Blue for oceans
    gradient.addColorStop(0.3, '#22c55e'); // Green for land
    gradient.addColorStop(0.6, '#16a34a'); // Darker green
    gradient.addColorStop(1, '#0369a1'); // Blue
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add some continent-like shapes
    ctx.fillStyle = '#16a34a';
    for (let i = 0; i < 20; i++) {
      ctx.beginPath();
      ctx.ellipse(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 30 + 10,
        Math.random() * 20 + 5,
        Math.random() * Math.PI,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
    
    return new THREE.CanvasTexture(canvas);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} args={[2, 64, 64]}>
      <meshStandardMaterial 
        map={earthTexture}
        roughness={0.8}
        metalness={0.1}
        emissive="#001122"
        emissiveIntensity={0.1}
      />
    </Sphere>
  );
}

function Atmosphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Sphere ref={meshRef} args={[2.1, 64, 64]}>
      <meshBasicMaterial 
        color="#4FC3F7"
        transparent
        opacity={0.1}
        side={THREE.BackSide}
      />
    </Sphere>
  );
}

interface InteractiveEarthProps {
  className?: string;
}

export default function InteractiveEarth({ className = '' }: InteractiveEarthProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4FC3F7" />
        
        <EarthSphere />
        <Atmosphere />
        
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
        />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
} 