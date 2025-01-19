'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, AccumulativeShadows, RandomizedLight, ContactShadows } from '@react-three/drei';

interface ModelViewerProps {
  isFullscreen?: boolean;
}

function Model() {
  const { scene } = useGLTF('/model/smart_glasses_0119130229_texture.gltf');
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <directionalLight position={[-10, -10, -5]} intensity={1} />
      <spotLight position={[0, 10, 0]} intensity={1.5} />
      <primitive 
        object={scene} 
        scale={1.5}
        position={[0, 0, 0]}
      />
      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.35}
        scale={10}
        blur={2.5}
        far={1.5}
      />
    </>
  );
}

export default function ModelViewer({ isFullscreen = false }: ModelViewerProps) {
  return (
    <div className={`relative ${isFullscreen ? 'w-full h-full' : 'w-full h-[600px]'}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{
          background: 'radial-gradient(circle at center, #1a237e 0%, #121212 100%)',
          borderRadius: isFullscreen ? '0' : '0.75rem',
        }}
      >
        <color attach="background" args={['#121212']} />
        <fog attach="fog" args={['#121212', 5, 20]} />
        <Model />
        <Environment preset="city" />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          autoRotate={!isFullscreen}
          autoRotateSpeed={2}
        />
      </Canvas>
    </div>
  );
} 