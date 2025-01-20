'use client';

import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, ContactShadows } from '@react-three/drei';

interface ModelViewerProps {
  isFullscreen: boolean;
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

const ModelViewer: React.FC<ModelViewerProps> = ({ isFullscreen }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<any>(null);

  // Reset camera position when component mounts or fullscreen changes
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  }, [isFullscreen]);

  // 处理全屏状态
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (isFullscreen && !document.fullscreenElement) {
      container.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else if (!isFullscreen && document.fullscreenElement) {
      document.exitFullscreen();
    }
  }, [isFullscreen]);

  return (
    <div 
      ref={containerRef}
      className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'h-[600px]'}`}
    >
      <Canvas
        camera={{ 
          position: [0, 0, 5], 
          fov: isFullscreen ? 50 : 45,
          near: 0.1,
          far: 1000
        }}
        className={isFullscreen ? 'w-screen h-screen' : 'w-full h-full'}
        style={{
          background: isFullscreen ? 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)' : 'transparent'
        }}
      >
        <Environment preset="city" />
        <Model isFullscreen={isFullscreen} />
        <OrbitControls
          ref={controlsRef}
          makeDefault
          enableZoom={isFullscreen}
          enablePan={isFullscreen}
          enableRotate={isFullscreen}
          autoRotate={!isFullscreen}
          autoRotateSpeed={2}
          minDistance={2}
          maxDistance={10}
          dampingFactor={0.1}
          rotateSpeed={1}
          enableDamping={true}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
      
      {isFullscreen && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
          鼠标左键旋转 | 滚轮缩放 | 鼠标右键平移
        </div>
      )}
    </div>
  );
};

export default ModelViewer; 