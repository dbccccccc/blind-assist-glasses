'use client';

import React, { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiCpu, FiCamera, FiHeadphones, FiRadio, FiWifi, FiBattery } from 'react-icons/fi';
import { IconType } from 'react-icons';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", onMouseEnter, onMouseLeave }) => (
  <div
    className={`relative group ${className}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(59, 130, 246, 0.1)',
        borderRadius: '1rem',
      }}
    />
    <div className="relative p-8 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">
      {children}
    </div>
  </div>
);

interface SpecItemProps {
  icon: IconType;
  title: string;
  specs: string[];
}

const SpecItem: React.FC<SpecItemProps> = ({ icon: Icon, title, specs }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <GlassCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start space-x-4">
        <div className="p-3 rounded-xl bg-blue-500/10">
          <Icon className="w-6 h-6 text-blue-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
            {title}
          </h3>
          <ul className="space-y-3">
            {specs.map((spec, i) => (
              <motion.li
                key={i}
                initial={{ x: 0 }}
                animate={{ x: isHovered ? 10 : 0 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                style={{ display: 'flex', alignItems: 'center', color: 'rgb(156 163 175)' }}
              >
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                {spec}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </GlassCard>
  );
};

export default function SpecsPage() {
  const hardwareSpecs = [
    {
      icon: FiCpu,
      title: "处理器",
      specs: [
        "主处理器: 高通骁龙XR2 @2.84GHz",
        "AI协处理器: 神经网络加速器 15 TOPS",
        "图像处理器: ISP 2.0 2.7GP/s",
        "计算能力: 8核心AI引擎",
        "内存: 8GB LPDDR5",
        "存储: 128GB UFS 3.1"
      ]
    },
    {
      icon: FiCamera,
      title: "摄像头",
      specs: [
        "分辨率: 4K@30fps HDR10+",
        "视场角: 120° 超广角",
        "夜视: 超感光夜视2.0",
        "深度感知: ToF+结构光双系统",
        "图像防抖: 6轴防抖",
        "对焦系统: PDAF相位对焦"
      ]
    },
    {
      icon: FiHeadphones,
      title: "音频系统",
      specs: [
        "骨传导扬声器: 双通道高保真",
        "麦克风: 4个阵列式波束成形",
        "降噪: AI主动降噪 35dB",
        "音频编解码: aptX HD/LDAC",
        "语音识别: 远场拾音5米",
        "空间音频: 360°全景声"
      ]
    },
    {
      icon: FiRadio,
      title: "传感器",
      specs: [
        "IMU: 9轴高精度传感器",
        "光线传感器: 双光谱环境感应",
        "距离传感器: 毫米波雷达",
        "气压计: 高精度气压高度计",
        "生物传感器: 心率/体温监测",
        "姿态检测: 6DoF运动追踪"
      ]
    },
    {
      icon: FiWifi,
      title: "连接",
      specs: [
        "Wi-Fi: 6E 三频段",
        "蓝牙: 5.2 低功耗",
        "GPS: 双频+北斗+伽利略",
        "5G: SA/NSA双模",
        "NFC: 支持读写",
        "USB: Type-C 3.2"
      ]
    },
    {
      icon: FiBattery,
      title: "电池",
      specs: [
        "容量: 2500mAh高密度电池",
        "快充: 支持18W快充",
        "续航: 12小时持续使用",
        "无线充电: Qi 15W",
        "紧急模式: 24小时待机",
        "电池健康: 智能电量管理"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section with Background Image */}
      <section className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/3fd281e7fa956c90a67ddb0d2640ad92.png"
            alt="Background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: '4.5rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '2rem'
            }}
          >
            技术规格
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: '1.25rem',
              color: '#E5E7EB',
              maxWidth: '42rem',
              margin: '0 auto',
              lineHeight: '1.75'
            }}
          >
            采用最新的人工智能和硬件技术，为视障人士提供全方位的智能辅助服务
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <div className="w-1 h-3 bg-white rounded-full mx-auto animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Hardware Specs */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: '2.25rem',
              fontWeight: 'bold',
              marginBottom: '4rem',
              color: 'white',
              textAlign: 'center'
            }}
          >
            硬件规格
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardwareSpecs.map((spec, index) => (
              <SpecItem key={index} {...spec} />
            ))}
          </div>
        </div>
      </section>

      {/* Software Features */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: '2.25rem',
              fontWeight: 'bold',
              marginBottom: '4rem',
              color: 'white',
              textAlign: 'center'
            }}
          >
            软件特性
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <GlassCard>
              <h3 className="text-2xl font-semibold text-white mb-6">
                AI模型规格
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-3 text-white">视觉识别模型</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      支持200+物体类别实时识别，准确率达98%
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      OCR文字识别支持多语言，精度99%
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3 text-white">语音处理模型</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      支持中英日韩等多语言实时识别
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      环境声音分类准确率95%以上
                    </li>
                  </ul>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="text-2xl font-semibold text-white mb-6">
                系统性能
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-3 text-white">响应速度</h4>
                  <div className="space-y-4">
                    {[
                      { label: "图像识别延迟", value: "100ms", percent: 90 },
                      { label: "语音识别延迟", value: "200ms", percent: 85 },
                      { label: "系统启动时间", value: "2s", percent: 95 }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm text-gray-300 mb-1">
                          <span>{item.label}</span>
                          <span>{item.value}</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.percent}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className="h-full bg-blue-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </main>
  );
} 