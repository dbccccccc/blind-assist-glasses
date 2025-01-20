'use client';

import React, { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const ModelViewer = dynamic(() => import('../../components/ModelViewer'), {
  loading: () => (
    <div className="w-full h-[600px] flex items-center justify-center bg-gray-900/50 backdrop-blur-xl rounded-xl border border-gray-800">
      <div className="text-gray-400">正在加载3D模型...</div>
    </div>
  ),
  ssr: false
});

export default function ProductPage() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      // 进入全屏
      const modelContainer = document.getElementById('model-container');
      if (modelContainer) {
        modelContainer.requestFullscreen().catch((err) => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
      }
    } else {
      // 退出全屏
      document.exitFullscreen();
    }
  }, []);

  // 监听全屏状态变化
  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white pt-10">
      {/* Hero Section with 3D Model */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="/3fd281e7fa956c90a67ddb0d2640ad92.png"
            alt="Background"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/80 via-black/90 to-black opacity-90"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                智能辅助眼镜
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
                    <p className="text-gray-400">仅重128g，佩戴舒适</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="model-container" className="relative group">
              <ModelViewer isFullscreen={isFullscreen} />
              <button
                onClick={handleFullscreen}
                className={`absolute top-4 right-4 p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors ${
                  isFullscreen ? 'z-10' : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                {isFullscreen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                )}
              </button>
              <div className={`absolute -inset-4 blur-3xl bg-blue-500/20 rounded-full animate-pulse ${isFullscreen ? 'hidden' : ''}`}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Details Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
              精心设计，匠心打造
            </h2>
            <p className="text-gray-400 mt-4">每一处细节都经过精密计算与反复优化</p>
          </div>

          {/* 人体工程学设计 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">人体工程学设计</h3>
              <div className="space-y-4">
                <div className="group bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">鼻托设计</h4>
                  <p className="text-gray-300">采用医用级硅胶材质，可调节鼻托设计适应不同鼻型。鼻托接触面积经过优化，确保长时间佩戴舒适，不会产生压迫感。</p>
                </div>
                <div className="group bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">镜腿结构</h4>
                  <p className="text-gray-300">弹性钛合金镜腿，具有记忆性能，可根据佩戴者头型自动调节。内置减震结构，有效降低运动时的晃动。</p>
                </div>
                <div className="group bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">重量分布</h4>
                  <p className="text-gray-300">通过优化电池和电路板布局，实现前后重量平衡，降低鼻梁负担。整机重量仅128g，较同类产品轻125%。</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-300 animate-pulse"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-xl p-8">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="space-y-4">
                    <div className="bg-blue-500/10 rounded-lg p-4">
                      <h5 className="text-blue-400 font-medium mb-2">头宽适配</h5>
                      <p className="text-sm text-gray-400">135-155mm</p>
                    </div>
                    <div className="bg-purple-500/10 rounded-lg p-4">
                      <h5 className="text-purple-400 font-medium mb-2">鼻距可调</h5>
                      <p className="text-sm text-gray-400">16-21mm</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-pink-500/10 rounded-lg p-4">
                      <h5 className="text-pink-400 font-medium mb-2">镜腿长度</h5>
                      <p className="text-sm text-gray-400">142mm</p>
                    </div>
                    <div className="bg-cyan-500/10 rounded-lg p-4">
                      <h5 className="text-cyan-400 font-medium mb-2">重量分布比</h5>
                      <p className="text-sm text-gray-400">前:后 = 45:55</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 充电系统设计 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-300 animate-pulse"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-xl p-8">
                <div className="space-y-6">
                  <div className="bg-blue-500/10 rounded-lg p-6">
                    <h5 className="text-blue-400 font-medium mb-3">充电规格</h5>
                    <ul className="space-y-2 text-gray-400">
                      <li>• 输入电压: 5V-12V</li>
                      <li>• 最大功率: 18W</li>
                      <li>• 充电时间: 约1小时</li>
                      <li>• 无线充电效率: 85%</li>
                    </ul>
                  </div>
                  <div className="bg-purple-500/10 rounded-lg p-6">
                    <h5 className="text-purple-400 font-medium mb-3">电池参数</h5>
                    <ul className="space-y-2 text-gray-400">
                      <li>• 容量: 2500mAh 双电池设计</li>
                      <li>• 循环寿命: {'>'}1000次</li>
                      <li>• 能量密度: 265Wh/kg</li>
                      <li>• 快充协议: PD/QC</li>
                      <li>• 充电保护: 过充/过放/过流/短路</li>
                      <li>• 温度监控: -20°C至60°C</li>
                      <li>• 电量显示: 实时语音播报</li>
                      <li>• 低电量提醒: 20%/10%/5%</li>
                    </ul>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-6">
                    <h5 className="text-green-400 font-medium mb-3">AI处理能力</h5>
                    <ul className="space-y-2 text-gray-400">
                      <li>• 神经网络: 8TOPS算力</li>
                      <li>• 目标识别: 小于100ms延迟</li>
                      <li>• 场景分析: 200+场景类别</li>
                      <li>• 文字识别: 多语言支持</li>
                      <li>• 人脸识别: 实时跟踪识别</li>
                      <li>• 语音识别: 98%准确率</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-500/10 rounded-lg p-6">
                    <h5 className="text-yellow-400 font-medium mb-3">安全特性</h5>
                    <ul className="space-y-2 text-gray-400">
                      <li>• 跌倒检测: 智能预警</li>
                      <li>• 紧急求助: 一键呼叫</li>
                      <li>• 实时定位: GPS/北斗双系统</li>
                      <li>• 健康监测: 步数/活动量</li>
                      <li>• 远程协助: 家人实时连线</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-white">充电系统设计</h3>
              <div className="space-y-4">
                <div className="group bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">磁吸充电</h4>
                  <p className="text-gray-300">采用磁吸式充电接口，单手即可完成充电连接。磁吸强度经过精确调校，确保稳固连接的同时也能轻松分离。防呆设计避免接触不良。</p>
                </div>
                <div className="group bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">无线充电</h4>
                  <p className="text-gray-300">支持Qi标准无线充电，最高18W快充功率。充电线圈位于镜腿位置，避免对佩戴舒适度的影响。内置过温保护和异物检测。</p>
                </div>
                <div className="group bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">电池布局</h4>
                  <p className="text-gray-300">采用分体式电池设计，将电池模块均匀分布在两侧镜腿，优化重量平衡。特殊的热管理系统确保充电和使用过程中的温度控制。</p>
                </div>
              </div>
            </div>
          </div>

          {/* 材质与工艺 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">材质与工艺</h3>
              <div className="space-y-4">
                <div className="group bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">镜框材质</h4>
                  <p className="text-gray-300">主体采用航空级铝镁合金，经过阳极氧化处理，具有出色的强度和耐磨性。表面经过纳米级喷涂，触感细腻，防指纹。</p>
                </div>
                <div className="group bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">镜片工艺</h4>
                  <p className="text-gray-300">采用光学级聚碳酸酯材质，具有优秀的光学性能和抗冲击性。表面采用多层镀膜工艺，包括防反射、防紫外和防油污涂层。</p>
                </div>
                <div className="group bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">接触材质</h4>
                  <p className="text-gray-300">与皮肤接触部位采用医用级硅胶，通过ISO 10993生物相容性认证。鼻托采用记忆材料，可根据使用习惯逐渐调整形状。</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-300 animate-pulse"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-xl p-8">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="space-y-4">
                    <div className="bg-blue-500/10 rounded-lg p-4">
                      <h5 className="text-blue-400 font-medium mb-2">镜框硬度</h5>
                      <p className="text-sm text-gray-400">7H</p>
                    </div>
                    <div className="bg-purple-500/10 rounded-lg p-4">
                      <h5 className="text-purple-400 font-medium mb-2">防水等级</h5>
                      <p className="text-sm text-gray-400">IP67</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-pink-500/10 rounded-lg p-4">
                      <h5 className="text-pink-400 font-medium mb-2">抗冲击</h5>
                      <p className="text-sm text-gray-400">1.5m跌落</p>
                    </div>
                    <div className="bg-cyan-500/10 rounded-lg p-4">
                      <h5 className="text-cyan-400 font-medium mb-2">使用温度</h5>
                      <p className="text-sm text-gray-400">-10°C ~ 45°C</p>
                    </div>
                  </div>
                </div>
              </div>
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
                description: "采用先进的语音识别技术，支持自然语言交互，可识别多种方言，支持离线语音识别，语音唤醒响应时间小于0.5秒",
                icon: "🗣️",
                features: [
                  "支持普通话/粤语/英语等多语言",
                  "98%以上的语音识别准确率",
                  "自适应降噪算法",
                  "声纹识别安全验证"
                ]
              },
              {
                title: "实时环境描述",
                description: "通过AI实时分析周围环境，提供准确的语音描述，支持物体识别、场景理解、文字识别等多种功能",
                icon: "👁️",
                features: [
                  "200+物体类别实时识别",
                  "场景深度分析与理解",
                  "多语言文字实时识别",
                  "光线自适应增强"
                ]
              },
              {
                title: "精准导航系统",
                description: "结合GPS和计算机视觉，提供精确的室内外导航，支持实时路径规划和障碍物提醒",
                icon: "🗺️",
                features: [
                  "厘米级室内定位",
                  "智能避障提醒",
                  "实时路径规划",
                  "公共交通无缝衔接"
                ]
              }
            ].map((feature, index) => (
              <div key={index} className="group p-6 rounded-xl bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-400">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
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
                description: "智能导航和环境感知，让出行更加安全便捷",
                features: [
                  "实时路况播报",
                  "智能避障提醒",
                  "公交地铁信息",
                  "紧急求助定位"
                ]
              },
              {
                title: "室内活动",
                description: "精准识别室内物品和障碍物，协助日常活动",
                features: [
                  "物品位置记忆",
                  "室内地图构建",
                  "障碍物预警",
                  "照明环境感知"
                ]
              },
              {
                title: "社交场景",
                description: "面部识别和表情分析，增进社交互动",
                features: [
                  "人脸记忆与识别",
                  "表情理解分析",
                  "社交距离提醒",
                  "实时语音翻译"
                ]
              },
              {
                title: "阅读学习",
                description: "文字识别和实时朗读，助力知识获取",
                features: [
                  "多语言文字识别",
                  "智能分段朗读",
                  "书籍版面识别",
                  "笔记语音记录"
                ]
              }
            ].map((scenario, index) => (
              <div key={index} className="group p-8 rounded-xl bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-semibold mb-4">{scenario.title}</h3>
                <p className="text-gray-400 mb-6">{scenario.description}</p>
                <ul className="space-y-3">
                  {scenario.features.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-400">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 