'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';

const ModelViewer = dynamic(() => import('../../components/ModelViewer'), {
  loading: () => (
    <div className="w-full h-[600px] flex items-center justify-center glass-card">
      <div className="animate-pulse space-y-4 text-center">
        <div className="text-blue-400">
          <svg className="animate-spin h-8 w-8 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <div className="text-gray-400 font-medium">正在加载3D模型...</div>
      </div>
    </div>
  ),
  ssr: false
});

// Design section content
const designFeatures = [
  {
    title: "人体工学设计",
    description: "精心优化的佩戴体验",
    icon: "👓",
    details: [
      "可调节鼻托设计",
      "记忆合金镜腿",
      "均衡重量分布",
      "防滑镜腿套"
    ]
  },
  {
    title: "材质工艺",
    description: "航空级材质打造",
    icon: "🛡️",
    details: [
      "铝镁合金机身",
      "光学级镜片",
      "医用级硅胶",
      "纳米涂层"
    ]
  },
  {
    title: "防护设计",
    description: "全方位安全防护",
    icon: "💧",
    details: [
      "IP67防水防尘",
      "防蓝光镜片",
      "防雾涂层",
      "防刮镀膜"
    ]
  }
];

// Features section content
const features = [
  {
    title: "智能语音交互",
    description: "自然语言交互，多语言支持",
    icon: "🗣️",
    details: [
      "支持普通话/粤语/英语等多语言",
      "98%以上的语音识别准确率",
      "自适应降噪算法",
      "声纹识别安全验证"
    ]
  },
  {
    title: "实时环境描述",
    description: "AI实时分析周围环境",
    icon: "👁️",
    details: [
      "200+物体类别实时识别",
      "场景深度分析与理解",
      "多语言文字实时识别",
      "光线自适应增强"
    ]
  },
  {
    title: "精准导航系统",
    description: "室内外无缝导航",
    icon: "🗺️",
    details: [
      "厘米级室内定位",
      "智能避障提醒",
      "实时路径规划",
      "公共交通无缝衔接"
    ]
  }
];

// 添加更多规格信息
const specifications = {
  performance: {
    title: "处理性能",
    color: "blue",
    specs: [
      { label: "AI算力", value: "8 TOPS" },
      { label: "NPU", value: "2.5 TOPS/W" },
      { label: "系统内存", value: "8GB LPDDR5" },
      { label: "存储容量", value: "128GB UFS 3.1" },
      { label: "处理器", value: "8核心 AI加速" },
      { label: "GPU", value: "集成神经网络引擎" }
    ]
  },
  sensors: {
    title: "传感器系统",
    color: "purple",
    specs: [
      { label: "主摄像头", value: "1300万像素 超广角" },
      { label: "辅助摄像头", value: "800万像素 长焦" },
      { label: "深度传感器", value: "TOF 厘米级精度" },
      { label: "IMU", value: "9轴传感器" },
      { label: "光线传感器", value: "自适应亮度调节" },
      { label: "距离传感器", value: "厘米级精度" }
    ]
  },
  battery: {
    title: "电池与充电",
    color: "green",
    specs: [
      { label: "电池容量", value: "2500mAh" },
      { label: "续航时间", value: "12小时" },
      { label: "充电时间", value: "45分钟" },
      { label: "快充协议", value: "PD/QC 18W" },
      { label: "无线充电", value: "支持Qi 15W" }
    ]
  },
  connectivity: {
    title: "连接与通信",
    color: "cyan",
    specs: [
      { label: "WiFi", value: "WiFi 6E" },
      { label: "蓝牙", value: "5.3" },
      { label: "定位", value: "GPS/北斗/伽利略" },
      { label: "NFC", value: "支持" },
      { label: "音频", value: "骨传导扬声器" }
    ]
  }
};

// Scenarios section content
const scenarios = [
  {
    title: "日常出行",
    description: "智能导航和环境感知，让出行更加安全便捷",
    icon: "🚶",
    details: [
      "实时路况播报",
      "智能避障提醒",
      "公交地铁信息",
      "紧急求助定位"
    ]
  },
  {
    title: "室内活动",
    description: "精准识别室内物品和障碍物",
    icon: "🏠",
    details: [
      "物品位置记忆",
      "室内地图构建",
      "障碍物预警",
      "照明环境感知"
    ]
  },
  {
    title: "社交场景",
    description: "智能识别人脸和表情，增进社交互动",
    icon: "👥",
    details: [
      "面部识别与记忆",
      "表情理解分析",
      "实时语音翻译",
      "社交距离提醒"
    ]
  },
  {
    title: "学习场景",
    description: "多模态学习辅助，提升学习体验",
    icon: "📚",
    details: [
      "文本实时识别",
      "图表理解分析",
      "语音笔记记录",
      "知识库检索"
    ]
  }
];

export default function ProductPage() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: 'overview', title: '概览' },
    { id: 'design', title: '设计' },
    { id: 'specs', title: '规格' },
    { id: 'features', title: '功能' },
    { id: 'scenarios', title: '场景' }
  ];

  // 处理滚动逻辑
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY;
      if (delta > 0 && currentSection < sections.length - 1) {
        setCurrentSection(prev => prev + 1);
      } else if (delta < 0 && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentSection, sections.length]);

  // 滚动到当前部分
  useEffect(() => {
    sectionsRef.current[currentSection]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, [currentSection]);

  // 全屏处理逻辑
  const handleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      const modelContainer = document.getElementById('model-container');
      if (modelContainer) {
        modelContainer.requestFullscreen().catch((err) => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
      }
    } else {
      document.exitFullscreen();
    }
  }, []);

  // 监听全屏状态变化
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // 在Design Section中添加内容
  const DesignContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {designFeatures.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="group relative"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="relative p-8 rounded-2xl glass-card hover:border-gray-700 transition-all duration-500">
            <div className="text-4xl mb-4 animate-float">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 mb-6">{feature.description}</p>
            <ul className="space-y-3">
              {feature.details.map((detail, i) => (
                <li key={i} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );

  // 在Features Section中添加内容
  const FeaturesContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="group relative"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="relative p-8 rounded-2xl glass-card hover:border-gray-700 transition-all duration-500">
            <div className="text-4xl mb-4 animate-float">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 mb-6">{feature.description}</p>
            <ul className="space-y-3">
              {feature.details.map((detail, i) => (
                <li key={i} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );

  // 在Scenarios Section中添加内容
  const ScenariosContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 max-w-5xl mx-auto">
      {scenarios.map((scenario, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="group relative"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="relative p-8 rounded-2xl glass-card hover:border-gray-700 transition-all duration-500">
            <div className="text-4xl mb-4 animate-float">{scenario.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{scenario.title}</h3>
            <p className="text-gray-400 mb-6">{scenario.description}</p>
            <ul className="space-y-3">
              {scenario.details.map((detail, i) => (
                <li key={i} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );

  // 在组件中添加规格部分的渲染
  const SpecsContent = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {Object.entries(specifications).slice(0, 2).map(([key, section]) => (
          <div key={key} className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300">
            <h3 className={`text-xl font-semibold mb-4 text-${section.color}-400`}>{section.title}</h3>
            <div className="space-y-4">
              {section.specs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex justify-between items-center group"
                >
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {spec.label}
                  </span>
                  <span className="text-white font-medium">
                    {spec.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {Object.entries(specifications).slice(2).map(([key, section]) => (
          <div key={key} className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300">
            <h3 className={`text-xl font-semibold mb-4 text-${section.color}-400`}>{section.title}</h3>
            <div className="space-y-4">
              {section.specs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex justify-between items-center group"
                >
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {spec.label}
                  </span>
                  <span className="text-white font-medium">
                    {spec.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <main 
      ref={containerRef}
      className="h-screen overflow-hidden bg-black text-white relative"
    >
      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => setCurrentSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === index 
                ? 'bg-white scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={section.title}
          />
        ))}
      </div>

      {/* Sections Container */}
      <div className="h-screen snap-y snap-mandatory overflow-y-auto">
        {/* Overview Section */}
        <section
          ref={el => sectionsRef.current[0] = el}
          className="relative h-screen snap-start flex items-center justify-center w-full"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black opacity-90 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-blue-900/10 animate-gradient-x"></div>
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-500/20 via-transparent to-transparent blur-3xl"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-blue-900/20 via-transparent to-transparent blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-20 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-blue-400 text-sm tracking-wider font-medium animate-fade-in-up opacity-0" 
                        style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                    SMART ASSISTANT GLASSES
                  </span>
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="inline-block animate-slide-up opacity-0" 
                          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                      智能辅助眼镜
                    </span>
                  </h1>
                  <p className="text-xl text-gray-400 max-w-xl animate-fade-in-up opacity-0" 
                     style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                    采用先进的AI技术和精密的硬件设计，为视障人士提供全方位的生活辅助体验
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 animate-fade-in-up opacity-0" 
                     style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
                    <div className="text-blue-400 font-semibold">12h</div>
                    <div className="text-sm text-gray-400">续航时间</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20">
                    <div className="text-purple-400 font-semibold">IP67</div>
                    <div className="text-sm text-gray-400">防水等级</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20">
                    <div className="text-cyan-400 font-semibold">128g</div>
                    <div className="text-sm text-gray-400">整机重量</div>
                  </div>
                </div>
              </div>
              
              <div id="model-container" className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <ModelViewer isFullscreen={isFullscreen} />
                  <button
                    onClick={handleFullscreen}
                    className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    {isFullscreen ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Section */}
        <section
          ref={el => sectionsRef.current[1] = el}
          className="relative h-screen snap-start flex items-center justify-center w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-900/20"></div>
          <div className="container mx-auto px-6 relative z-20 max-w-7xl">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl font-bold"
                >
                  精工设计，匠心打造
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-gray-400"
                >
                  每一处细节都经过精密计算与反复优化
                </motion.p>
              </div>
              <DesignContent />
            </div>
          </div>
        </section>

        {/* Specs Section */}
        <section
          ref={el => sectionsRef.current[2] = el}
          className="relative h-screen snap-start flex items-center justify-center w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20"></div>
          <div className="container mx-auto px-6 relative z-20 max-w-7xl">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl font-bold">技术规格</h2>
                <p className="text-gray-400">强大的硬件性能，卓越的技术指标</p>
              </div>

              <SpecsContent />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          ref={el => sectionsRef.current[3] = el}
          className="relative h-screen snap-start flex items-center justify-center w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-cyan-900/20"></div>
          <div className="container mx-auto px-6 relative z-20 max-w-7xl">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl font-bold">核心功能</h2>
                <p className="text-gray-400">智能化的辅助功能，提供全方位的生活帮助</p>
              </div>

              <FeaturesContent />
            </div>
          </div>
        </section>

        {/* Scenarios Section */}
        <section
          ref={el => sectionsRef.current[4] = el}
          className="relative h-screen snap-start flex items-center justify-center w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-black"></div>
          <div className="container mx-auto px-6 relative z-20 max-w-7xl">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl font-bold">应用场景</h2>
                <p className="text-gray-400">适应多种日常场景的智能辅助</p>
              </div>

              <ScenariosContent />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 