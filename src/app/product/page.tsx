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

// 修改动画配置
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const slideUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

// 修改 OverviewContent 组件，传递 isFullscreen 状态
const OverviewContent = ({ 
  handleFullscreen, 
  isFullscreen 
}: { 
  handleFullscreen: () => void;
  isFullscreen: boolean;
}) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    <div className="space-y-8">
      <div className="space-y-4">
        <span className="text-blue-400 text-sm tracking-wider font-medium">
          SMART ASSISTANT GLASSES
        </span>
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
          智能辅助眼镜
        </h1>
        <p className="text-xl text-gray-400 max-w-xl">
          采用先进的AI技术和精密的硬件设计，为视障人士提供全方位的生活辅助体验
        </p>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
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
      <div className={`absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 ${isFullscreen ? 'hidden' : ''}`}></div>
      <div className="relative">
        <ModelViewer isFullscreen={isFullscreen} />
        <button
          onClick={handleFullscreen}
          className={`absolute top-4 right-4 p-2 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 ${
            isFullscreen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
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
);

// 添加防抖函数
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export default function ProductPage() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef<number>(0);

  const sections = [
    { id: 'overview', title: '概览' },
    { id: 'design', title: '设计' },
    { id: 'specs', title: '规格' },
    { id: 'features', title: '功能' },
    { id: 'scenarios', title: '场景' }
  ];

  // 优化滚动处理逻辑
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isTransitioning || isFullscreen) return;

      const now = Date.now();
      if (now - lastScrollTime.current < 1000) return; // 1秒内不重复触发

      const delta = e.deltaY;
      const threshold = 50;

      if (Math.abs(delta) < threshold) return;

      if (delta > 0 && currentSection < sections.length - 1) {
        setIsTransitioning(true);
        setCurrentSection(prev => prev + 1);
        lastScrollTime.current = now;
      } else if (delta < 0 && currentSection > 0) {
        setIsTransitioning(true);
        setCurrentSection(prev => prev - 1);
        lastScrollTime.current = now;
      }
    };

    const handleTransitionEnd = debounce(() => {
      setIsTransitioning(false);
    }, 1000);

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      container.addEventListener('transitionend', handleTransitionEnd as any);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('transitionend', handleTransitionEnd as any);
      }
    };
  }, [currentSection, sections.length, isTransitioning, isFullscreen]);

  // 移除不必要的滚动效果
  useEffect(() => {
    const section = sectionsRef.current[currentSection];
    if (section) {
      section.style.visibility = 'visible';
      section.style.opacity = '1';
    }
  }, [currentSection]);

  // 全屏处理逻辑
  const handleFullscreen = useCallback(() => {
    setIsFullscreen(prev => !prev);
  }, []);

  // 监听全屏状态变化
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // 优化动画组件
  const AnimatedSection = ({ 
    children, 
    show, 
    delay = 0 
  }: { 
    children: React.ReactNode; 
    show: boolean;
    delay?: number;
  }) => (
    <motion.div
      initial={false}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.6,
        delay,
        ease: [0.19, 1, 0.22, 1]
      }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );

  // 修改各个内容组件，使用 AnimatedSection
  const DesignContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {designFeatures.map((feature, index) => (
        <AnimatedSection 
          key={index} 
          show={currentSection === 1} 
          delay={index * 0.1}
        >
          <div className="group relative will-change-transform">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-8 rounded-2xl glass-card hover:border-gray-700 transition-all duration-300">
              <div className="text-4xl mb-4 opacity-80">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 mb-6">{feature.description}</p>
              <ul className="space-y-3">
                {feature.details.map((detail, i) => (
                  <li key={i} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );

  // 在Features Section中添加内容
  const FeaturesContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {features.map((feature, index) => (
        <AnimatedSection 
          key={index} 
          show={currentSection === 3} 
          delay={index * 0.2}
        >
          <div className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative p-8 rounded-2xl glass-card hover:border-gray-700 transition-all duration-500">
              <div className="text-4xl mb-4 opacity-80">{feature.icon}</div>
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
          </div>
        </AnimatedSection>
      ))}
    </div>
  );

  // 在Scenarios Section中添加内容
  const ScenariosContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 max-w-5xl mx-auto">
      {scenarios.map((scenario, index) => (
        <AnimatedSection 
          key={index} 
          show={currentSection === 4} 
          delay={index * 0.2}
        >
          <div className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative p-8 rounded-2xl glass-card hover:border-gray-700 transition-all duration-500">
              <div className="text-4xl mb-4 opacity-80">{scenario.icon}</div>
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
          </div>
        </AnimatedSection>
      ))}
    </div>
  );

  // 修改 SpecsContent 组件
  const SpecsContent = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {Object.entries(specifications).map(([key, section], index) => (
        <AnimatedSection 
          key={key} 
          show={currentSection === 2} 
          delay={index * 0.1}
        >
          <div className="glass-card p-6 hover:scale-[1.01] transition-transform duration-200">
            <h3 className={`text-xl font-semibold mb-4 text-${section.color}-400`}>{section.title}</h3>
            <div className="space-y-4">
              {section.specs.map((spec, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center group transition-colors duration-200"
                >
                  <span className="text-gray-400 group-hover:text-gray-300">
                    {spec.label}
                  </span>
                  <span className="text-white font-medium">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );

  // 修改背景渐变动画
  const backgroundStyles = {
    transition: 'background-position 15s ease-in-out',
    backgroundSize: '200% 200%',
    willChange: 'background-position',
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-hidden">
      {/* Main Content */}
      <main 
        ref={containerRef}
        className="flex-1 relative h-screen"
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
        <div className="absolute inset-0">
          {sections.map((section, index) => (
            <div
              key={section.id}
              ref={el => sectionsRef.current[index] = el}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out transform ${
                index === currentSection 
                  ? 'translate-y-0 opacity-100 visible pointer-events-auto' 
                  : index < currentSection
                    ? '-translate-y-full opacity-0 invisible pointer-events-none'
                    : 'translate-y-full opacity-0 invisible pointer-events-none'
              }`}
              style={{
                transitionProperty: 'transform, opacity, visibility',
                willChange: 'transform, opacity'
              }}
            >
              {/* Background */}
              <div className="absolute inset-0" style={backgroundStyles}>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black opacity-90 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-blue-900/10"></div>
                <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-500/20 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="relative h-full flex items-center justify-center">
                <div className="container mx-auto px-6 relative z-20 max-w-7xl">
                  <AnimatedSection show={index === currentSection}>
                    {/* Section Title */}
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        {section.title}
                      </h2>
                    </div>
                    {index === 0 && (
                      <OverviewContent 
                        handleFullscreen={handleFullscreen} 
                        isFullscreen={isFullscreen}
                      />
                    )}
                    {index === 1 && <DesignContent />}
                    {index === 2 && <SpecsContent />}
                    {index === 3 && <FeaturesContent />}
                    {index === 4 && <ScenariosContent />}
                  </AnimatedSection>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-50 bg-black/50 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-400">
              © 2024 智能辅助眼镜. 保留所有权利.
            </div>
            <nav className="space-x-6">
              <a href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                首页
              </a>
              <a href="/product" className="text-sm text-gray-400 hover:text-white transition-colors">
                产品
              </a>
              <a href="/tech" className="text-sm text-gray-400 hover:text-white transition-colors">
                技术规格
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
} 