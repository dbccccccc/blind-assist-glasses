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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/80 via-gray-900/90 to-black opacity-90"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-7xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 animate-gradient">
            智能辅助眼镜
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            为视障人士打造的新一代智能辅助设备
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <button className="group relative px-12 py-4 overflow-hidden rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors">
              <span className="relative z-10 text-lg font-medium">了解更多</span>
            </button>
            <button className="group relative px-12 py-4 overflow-hidden rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
              <span className="relative z-10 text-lg font-medium text-gray-300 group-hover:text-white transition-colors">立即体验</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
                核心功能
              </h2>
              <div className="absolute -inset-4 blur-2xl bg-blue-500/10 rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔍",
                title: "环境感知",
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
              <div key={index} className="group relative transform hover:-translate-y-2 transition-all duration-300">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300 animate-pulse`}></div>
                <div className="relative p-8 bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">{feature.title}</h3>
                  <p className="text-blue-100/60 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-blue-100/60">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                        {detail}
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
