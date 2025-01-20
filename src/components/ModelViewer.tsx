'use client';

import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, ContactShadows } from '@react-three/drei';

interface ModelViewerProps {
  isFullscreen?: boolean;
}

function Model({ isFullscreen = false }) {
  const { scene } = useGLTF('/model/Reflections_on_the_Ta_0120030012_texture.gltf');
  return (
    <>
      <ambientLight intensity={isFullscreen ? 2.5 : 1.5} />
      <directionalLight position={[10, 10, 5]} intensity={isFullscreen ? 3 : 2} />
      <directionalLight position={[-10, -10, -5]} intensity={isFullscreen ? 2 : 1} />
      <spotLight position={[0, 10, 0]} intensity={isFullscreen ? 2.5 : 1.5} />
      <primitive 
        object={scene} 
        scale={1.5}
        position={[0, 0, 0]}
        rotation={[0, Math.PI / 4, 0]}
      />
      <ContactShadows
        opacity={0.4}
        scale={10}
        blur={2}
        far={4}
        resolution={256}
        color="#000000"
      />
    </>
  );
}

export default function ModelViewer({ isFullscreen = false }: ModelViewerProps) {
  const controlsRef = useRef<any>(null);

  // 在退出全屏时重置控制器状态
  useEffect(() => {
    if (!isFullscreen && controlsRef.current) {
      controlsRef.current.reset();
    }
  }, [isFullscreen]);

  return (
    <div 
      className={`relative ${isFullscreen ? 'fixed inset-0 z-50 h-screen' : 'h-[600px]'}`}
      style={{
        height: isFullscreen ? '100vh' : '600px'
      }}
    >
      <Canvas
        camera={{ 
          position: [0, 0, 5],
          fov: 50
        }}
        style={{
          background: isFullscreen ? 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)' : 'transparent',
          height: '100%'
        }}
      >
        <Environment preset="city" />
        <Model isFullscreen={isFullscreen} />
        <OrbitControls
          ref={controlsRef}
          makeDefault
          autoRotate={!isFullscreen}
          autoRotateSpeed={2}
        />
      </Canvas>
    </div>
  );
} 