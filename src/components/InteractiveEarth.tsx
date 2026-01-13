'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function EarthSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Create earth texture
  const earthTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    // Create a simple earth-like texture with ocean base
    ctx.fillStyle = '#0369a1';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add continent-like shapes with varying greens
    const continentColors = ['#16a34a', '#22c55e', '#15803d', '#166534'];
    for (let i = 0; i < 25; i++) {
      ctx.fillStyle = continentColors[Math.floor(Math.random() * continentColors.length)];
      ctx.beginPath();
      ctx.ellipse(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 40 + 15,
        Math.random() * 25 + 10,
        Math.random() * Math.PI,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    // Add polar ice caps
    ctx.fillStyle = '#e2e8f0';
    ctx.fillRect(0, 0, canvas.width, 20);
    ctx.fillRect(0, canvas.height - 20, canvas.width, 20);

    return new THREE.CanvasTexture(canvas);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        map={earthTexture}
        roughness={0.7}
        metalness={0.1}
        emissive="#001122"
        emissiveIntensity={0.05}
      />
    </mesh>
  );
}

function Atmosphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.08, 64, 64]} />
      <meshBasicMaterial
        color="#4FC3F7"
        transparent
        opacity={0.12}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

function Clouds() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.004;
    }
  });

  // Create cloud texture
  const cloudTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = 'transparent';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add cloud patterns
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    for (let i = 0; i < 40; i++) {
      ctx.beginPath();
      ctx.ellipse(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 30 + 5,
        Math.random() * 15 + 3,
        Math.random() * Math.PI,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    return new THREE.CanvasTexture(canvas);
  }, []);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.04, 64, 64]} />
      <meshBasicMaterial
        map={cloudTexture}
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

function StarField() {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions] = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const radius = 50 + Math.random() * 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return [positions];
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0002;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2000}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.5} color="#ffffff" transparent opacity={0.8} />
    </points>
  );
}

function CameraController() {
  const { camera, gl } = useThree();
  const isDragging = useRef(false);
  const previousMouse = useRef({ x: 0, y: 0 });
  const spherical = useRef(new THREE.Spherical(5.5, Math.PI / 2, 0));

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      previousMouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;

      const deltaX = e.clientX - previousMouse.current.x;
      const deltaY = e.clientY - previousMouse.current.y;

      spherical.current.theta -= deltaX * 0.005;
      spherical.current.phi = Math.max(
        Math.PI / 4,
        Math.min(Math.PI * 3 / 4, spherical.current.phi + deltaY * 0.005)
      );

      previousMouse.current = { x: e.clientX, y: e.clientY };
    };

    const canvas = gl.domElement;
    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [gl]);

  useFrame(() => {
    if (!isDragging.current) {
      spherical.current.theta += 0.002;
    }

    camera.position.setFromSpherical(spherical.current);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

interface InteractiveEarthProps {
  className?: string;
}

export default function InteractiveEarth({ className = '' }: InteractiveEarthProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 5.5], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <pointLight position={[-10, -10, -5]} intensity={0.4} color="#4FC3F7" />

        <EarthSphere />
        <Clouds />
        <Atmosphere />
        <StarField />

        <CameraController />
      </Canvas>
    </div>
  );
}