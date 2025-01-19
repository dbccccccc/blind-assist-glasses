'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const ModelViewer = dynamic(() => import('../../components/ModelViewer'), {
  loading: () => (
    <div className="w-full h-[600px] flex items-center justify-center bg-gray-900/50 backdrop-blur-xl rounded-xl border border-gray-800">
      <div className="text-gray-400">Loading 3D Model...</div>
    </div>
  ),
  ssr: false
});

export default function ProductPage() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <main className="min-h-screen bg-black text-white pt-24">
      {/* Hero Section with 3D Model */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                智能辅助眼镜 Pro
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                采用先进的AI技术和精密的硬件设计，为视障人士提供全方位的生活辅助体验。
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <span className="text-blue-400">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">12小时续航</h3>
                    <p className="text-gray-400">持久续航，全天候使用</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <span className="text-purple-400">🛡️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">IP67防水</h3>
                    <p className="text-gray-400">防水防尘，安心使用</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center">
                    <span className="text-pink-400">⚖️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">轻量设计</h3>
                    <p className="text-gray-400">仅重88g，佩戴舒适</p>
                  </div>
                </div>
              </div>
              <button className="group relative px-8 py-3 overflow-hidden rounded-lg">
                <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-800"></div>
                <div className="absolute inset-0 w-full h-full transition-all duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <span className="relative z-10 text-lg font-medium">立即预约</span>
              </button>
            </div>
            <div className={`relative group ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
              <ModelViewer isFullscreen={isFullscreen} />
              {isFullscreen ? (
                <button
                  onClick={handleFullscreen}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors z-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={handleFullscreen}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              )}
              <div className={`absolute -inset-4 blur-3xl bg-blue-500/20 rounded-full animate-pulse ${isFullscreen ? 'hidden' : ''}`}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">产品特点</h2>
            <p className="text-gray-400">专为视障人士设计的智能功能</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "智能语音交互",
                description: "采用先进的语音识别技术，支持自然语言交互",
                icon: "🗣️"
              },
              {
                title: "实时环境描述",
                description: "通过AI实时分析周围环境，提供准确的语音描述",
                icon: "👁️"
              },
              {
                title: "精准导航系统",
                description: "结合GPS和计算机视觉，提供精确的室内外导航",
                icon: "🗺️"
              }
            ].map((feature, index) => (
              <div key={index} className="group p-6 rounded-xl bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Scenarios */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">使用场景</h2>
            <p className="text-gray-400">适应多种日常场景的智能辅助</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "日常出行",
                description: "智能导航和环境感知，让出行更加安全便捷"
              },
              {
                title: "室内活动",
                description: "精准识别室内物品和障碍物，协助日常活动"
              },
              {
                title: "社交场景",
                description: "面部识别和表情分析，增进社交互动"
              },
              {
                title: "阅读学习",
                description: "文字识别和实时朗读，助力知识获取"
              }
            ].map((scenario, index) => (
              <div key={index} className="group p-8 rounded-xl bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-semibold mb-4">{scenario.title}</h3>
                <p className="text-gray-400">{scenario.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 