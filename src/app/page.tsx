'use client';

import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/3fd281e7fa956c90a67ddb0d2640ad92.png"
            alt="Background"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/70 via-gray-900/95 to-black"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="space-y-8">
            <div className="relative">
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-blue-400/80 text-lg font-medium tracking-wider opacity-0 animate-fade-in-down" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                SMART ASSISTANT GLASSES
              </span>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight overflow-hidden">
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-blue-400 animate-slide-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                  智能辅助眼镜
                </span>
              </h1>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-slide-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}></div>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
              <span className="inline-block animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                为视障人士打造的
              </span>
              <span className="text-blue-400 font-normal inline-block animate-fade-in-up opacity-0 hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                新一代智能辅助设备
              </span>
              <span className="inline-block animate-fade-in-up opacity-0" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
                ，让科技照亮前行之路
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="relative inline-block">
              <span className="block text-blue-400 text-sm font-medium tracking-widest mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                CORE FEATURES
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight overflow-hidden">
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-blue-400 animate-slide-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                  核心功能
                </span>
              </h2>
              <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                突破传统辅助设备的局限，带来全方位的智能体验
              </p>
              <div className="absolute -inset-4 blur-3xl bg-blue-500/20 rounded-full animate-glow"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔍",
                title: "环境感知",
                subtitle: "Environment Perception",
                description: "实时识别周围环境，为用户提供准确的语音描述",
                details: [
                  "火山引擎视觉大模型",
                  "场景理解与空间分析",
                  "文字识别与阅读",
                  "人脸识别与表情理解"
                ],
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: "🗺️",
                title: "智能操作",
                subtitle: "Smart Operation",
                description: "便捷操作、实时沟通",
                details: [
                  "亲友可通过平台实时查看位置",
                  "一键呼叫紧急救援",
                  "一键激活环境感知",
                  "一键激活AI助手"
                ],
                gradient: "from-cyan-500 to-blue-500"
              },
              {
                icon: "⚠️",
                title: "危险预警",
                subtitle: "Safety Alert",
                description: "及时识别潜在危险，保障用户安全",
                details: [
                  "自然灾害实时提醒",
                  "跌倒检测与预防",
                  "紧急求助一键触发",
                  "24小时安全监控"
                ],
                gradient: "from-blue-500 to-cyan-500"
              }
            ].map((feature, index) => (
              <div key={index} 
                className="group relative transform hover:-translate-y-2 transition-all duration-500 hover:z-10">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500 animate-pulse`}></div>
                <div className="relative p-8 bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-blue-500/10 hover:border-blue-400/30 transition-colors duration-500 hover:bg-gray-800/50">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{feature.icon}</div>
                  <div className="space-y-2 mb-6">
                    <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
                      {feature.title}
                    </h3>
                    <span className="text-sm text-blue-400/80 tracking-wider font-medium">
                      {feature.subtitle}
                    </span>
                  </div>
                  <p className="text-blue-100/70 mb-8 group-hover:text-blue-100/90 transition-colors duration-500">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-blue-100/60 group-hover:text-blue-100/80 transition-colors duration-500">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400 transition-colors duration-500"></span>
                        <span className="text-sm tracking-wide">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

    </main>
  );
}
