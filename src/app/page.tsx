'use client';

import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          {/* Animated grid background */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, #ffffff0f 1px, transparent 1px), linear-gradient(to bottom, #ffffff0f 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
          {/* Glowing orbs */}
          <div className="absolute inset-0">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                  background: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
                  left: `${i * 30}%`,
                  top: `${i * 20}%`,
                  transform: 'translate(-50%, -50%)',
                  animation: `float ${10 + i * 2}s ease-in-out infinite`,
                  filter: 'blur(60px)'
                }}
              />
            ))}
          </div>
          {/* Tech lines */}
          <div className="absolute inset-0">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-px w-full"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.3), transparent)',
                  top: `${i * 15}%`,
                  animation: `scan-line ${5 + i}s linear infinite`,
                  opacity: 0.5
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="relative inline-block mb-16">
              <div className="absolute -inset-2 blur-2xl bg-blue-500/20 animate-pulse rounded-full"></div>
              <h1 className="text-7xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-blue-500 animate-gradient">
                智能辅助眼镜
              </h1>
            </div>
            <p className="text-2xl md:text-3xl text-blue-200/80 mb-16 max-w-3xl mx-auto leading-relaxed">
              为视障人士打造的新一代智能辅助设备
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <button className="group relative px-12 py-4 overflow-hidden rounded-lg">
                <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
                <div className="absolute inset-0 w-full h-full transition-all duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                <div className="absolute inset-0 w-3/12 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[45deg] group-hover:-translate-x-96 transition-transform duration-700 ease-in-out"></div>
                <span className="relative z-10 text-lg font-medium">了解更多</span>
              </button>
              <button className="group relative px-12 py-4 overflow-hidden rounded-lg border border-blue-500/30 hover:border-blue-400/50 transition-colors">
                <div className="absolute inset-0 w-3/12 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[45deg] group-hover:-translate-x-96 transition-transform duration-700 ease-in-out"></div>
                <span className="relative z-10 text-lg font-medium text-blue-200 group-hover:text-white transition-colors">立即体验</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/50 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-particle ${3 + Math.random() * 7}s linear infinite`
              }}
            />
          ))}
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="relative py-32">
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
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: "🗺️",
                title: "智能导航",
                description: "精准导航系统，语音实时指引方向",
                gradient: "from-cyan-500 to-blue-500"
              },
              {
                icon: "⚠️",
                title: "危险预警",
                description: "及时识别潜在危险，保障用户安全",
                gradient: "from-blue-500 to-cyan-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative transform hover:-translate-y-2 transition-all duration-300">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300 animate-pulse`}></div>
                <div className="relative p-8 bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">{feature.title}</h3>
                  <p className="text-blue-100/60">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <div className="relative inline-block">
              <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
                技术规格
              </h2>
              <div className="absolute -inset-4 blur-2xl bg-blue-500/10 rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "处理器",
                specs: ["高通骁龙XR2", "神经网络加速器", "15 TOPS算力"],
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "摄像头",
                specs: ["4K@30fps", "120°视场角", "夜视支持"],
                gradient: "from-cyan-500 to-blue-500"
              },
              {
                title: "音频系统",
                specs: ["骨传导扬声器", "4麦克风阵列", "主动降噪"],
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "传感器",
                specs: ["9轴IMU", "环境光感应", "距离传感器"],
                gradient: "from-cyan-500 to-blue-500"
              },
              {
                title: "续航",
                specs: ["2500mAh电池", "12小时续航", "18W快充"],
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "连接",
                specs: ["Wi-Fi 6E", "蓝牙5.2", "GPS/北斗"],
                gradient: "from-cyan-500 to-blue-500"
              }
            ].map((spec, index) => (
              <div key={index} className="group relative transform hover:-translate-y-2 transition-all duration-300">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${spec.gradient} rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300`}></div>
                <div className="relative h-full p-8 rounded-xl bg-gray-900/50 backdrop-blur-xl border border-blue-500/10 hover:border-blue-400/20 transition-colors">
                  <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">{spec.title}</h3>
                  <ul className="space-y-4">
                    {spec.specs.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-blue-100/60 group-hover:translate-x-2 transition-transform duration-300">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:bg-cyan-400 transition-colors"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block mb-8">
              <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
                开启智能辅助新时代
              </h2>
              <div className="absolute -inset-4 blur-2xl bg-blue-500/10 rounded-full"></div>
            </div>
            <p className="text-xl text-blue-200/80 mb-12 leading-relaxed">
              立即体验智能辅助眼镜，让科技为生活带来更多可能
            </p>
            <button className="group relative px-12 py-4 overflow-hidden rounded-lg">
              <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
              <div className="absolute inset-0 w-full h-full transition-all duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
              <div className="absolute inset-0 w-3/12 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[45deg] group-hover:-translate-x-96 transition-transform duration-700 ease-in-out"></div>
              <span className="relative z-10 text-lg font-medium">预约体验</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
