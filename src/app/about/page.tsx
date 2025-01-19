'use client';

import React from 'react';
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
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
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-2 blur-2xl bg-blue-500/20 animate-pulse rounded-full"></div>
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-blue-500 animate-gradient">
                关于我们
              </h1>
            </div>
            <p className="text-2xl text-blue-200/80 leading-relaxed max-w-2xl mx-auto">
              我们致力于通过创新科技，为视障人士创造更美好的生活
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
                我们的使命
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                通过先进的人工智能技术和创新的硬件设计，我们致力于为视障人士提供更好的生活体验。我们相信科技的力量可以帮助每个人突破限制，实现自我价值。
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group relative transform hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <div className="relative p-6 rounded-xl bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:border-gray-700 transition-colors">
                    <h3 className="text-lg font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">愿景</h3>
                    <p className="text-gray-400">让每个视障人士都能自由、独立地生活</p>
                  </div>
                </div>
                <div className="group relative transform hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <div className="relative p-6 rounded-xl bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:border-gray-700 transition-colors">
                    <h3 className="text-lg font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">价值观</h3>
                    <p className="text-gray-400">创新、关爱、责任、卓越</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-300 animate-pulse"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gray-900/50 backdrop-blur-xl flex items-center justify-center text-8xl">
                  🎯
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            核心价值观
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "💡",
                title: "创新",
                description: "不断探索新技术，为用户带来更好的解决方案"
              },
              {
                icon: "❤️",
                title: "关爱",
                description: "以用户为中心，用心理解和满足他们的需求"
              },
              {
                icon: "🤝",
                title: "责任",
                description: "承担社会责任，为创造更包容的世界贡献力量"
              },
              {
                icon: "⭐",
                title: "卓越",
                description: "追求卓越品质，提供最优质的产品和服务"
              }
            ].map((value, index) => (
              <div key={index} className="group relative transform hover:-translate-y-1 transition-all duration-300">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative p-8 rounded-xl bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:border-gray-700 transition-colors">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            我们的团队
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "张博士",
                title: "首席技术官",
                description: "人工智能和计算机视觉专家，拥有15年研发经验"
              },
              {
                name: "李工程师",
                title: "硬件总监",
                description: "智能硬件设计专家，曾参与多个知名科技产品研发"
              },
              {
                name: "王设计师",
                title: "产品设计师",
                description: "工业设计专家，致力于创造优秀的用户体验"
              }
            ].map((member, index) => (
              <div key={index} className="group relative transform hover:-translate-y-1 transition-all duration-300">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative p-8 rounded-xl bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:border-gray-700 transition-colors">
                  <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{member.title}</p>
                  <p className="text-gray-500 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              联系我们
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">公司地址</h3>
                  <p className="text-gray-400">深圳市南山区科技园创新大厦A座</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">联系方式</h3>
                  <div className="space-y-2 text-gray-400">
                    <p>电话：400-123-4567</p>
                    <p>邮箱：contact@smartglasses.com</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">关注我们</h3>
                  <div className="flex space-x-6">
                    {["微信", "微博", "抖音"].map((platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {platform}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">工作机会</h3>
                  <p className="text-gray-400">
                    我们正在寻找优秀的人才加入我们的团队，一起为视障人士创造更美好的生活。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 