'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 1;
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Video Container */}
        <div className="fixed inset-0 bg-black will-change-transform">
          <div className="absolute inset-0 will-change-transform">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover will-change-transform"
              style={{
                transform: 'translate3d(0, 0, 0)',
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
            >
              <source src="/xpg.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Overlays */}
          <div className="absolute inset-0 bg-black/40 will-change-transform"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black will-change-transform"></div>
          <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay will-change-transform"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-30 -mt-16">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-12 text-center">
              {/* Title */}
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-blue-300/90 font-light tracking-wider uppercase opacity-0 animate-fade-in drop-shadow-lg will-change-transform" 
                  style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                  Smart Assistant Glasses
                </p>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none drop-shadow-2xl will-change-transform">
                  <span className="inline-block opacity-0 animate-slide-in-up bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-blue-300" 
                    style={{ 
                      animationDelay: '0.4s', 
                      animationFillMode: 'forwards',
                      willChange: 'transform',
                      transform: 'translate3d(0, 0, 0)',
                      backfaceVisibility: 'hidden'
                    }}>
                    智能辅助眼镜
                  </span>
                </h1>
              </div>

              {/* Description */}
              <div className="max-w-3xl mx-auto space-y-10">
                <p className="text-2xl md:text-3xl text-white leading-relaxed opacity-0 animate-fade-in font-light drop-shadow-lg will-change-transform" 
                  style={{ 
                    animationDelay: '0.6s', 
                    animationFillMode: 'forwards',
                    willChange: 'transform',
                    transform: 'translate3d(0, 0, 0)',
                    backfaceVisibility: 'hidden'
                  }}>
                  为视障人士打造的
                  <span className="text-blue-300 font-medium mx-2">新一代智能辅助设备</span>
                  让科技照亮前行之路
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/20 to-black transform-gpu"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🔍",
                title: "AI视觉感知",
                description: "实时识别环境，精准语音描述"
              },
              {
                icon: "🗺️",
                title: "智能导航",
                description: "厘米级室内定位，实时避障"
              },
              {
                icon: "🤖",
                title: "AI助手",
                description: "24小时贴心陪伴，实时交互"
              },
              {
                icon: "⚡",
                title: "超长续航",
                description: "12小时持续使用，快速充电"
              }
            ].map((feature, index) => (
              <div key={index} 
                className="group relative p-8 rounded-2xl bg-blue-950/20 border border-blue-500/10 
                backdrop-blur-sm hover:bg-blue-900/30 transition-all duration-500
                hover:border-blue-500/30 transform-gpu hover:-translate-y-1"
                style={{
                  transform: 'translate3d(0, 0, 0)',
                  backfaceVisibility: 'hidden'
                }}
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-500 transform-gpu">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-200/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
