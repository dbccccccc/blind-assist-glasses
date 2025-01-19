import Image from "next/image";

export default function SpecsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-8">
              技术规格
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              采用最新的人工智能和硬件技术，为视障人士提供全方位的智能辅助服务
            </p>
          </div>
        </div>
      </section>

      {/* Hardware Specs */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            硬件规格
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "处理器",
                specs: [
                  "主处理器: 高通骁龙XR2",
                  "AI协处理器: 神经网络加速器",
                  "图像处理器: ISP 2.0",
                  "计算能力: 15 TOPS"
                ]
              },
              {
                title: "摄像头",
                specs: [
                  "分辨率: 4K@30fps",
                  "视场角: 120°",
                  "夜视: 支持",
                  "深度感知: ToF传感器"
                ]
              },
              {
                title: "音频系统",
                specs: [
                  "骨传导扬声器: 双通道",
                  "麦克风: 4个阵列式",
                  "降噪: 主动降噪",
                  "音频编解码: aptX HD"
                ]
              },
              {
                title: "传感器",
                specs: [
                  "IMU: 9轴传感器",
                  "光线传感器: 环境光感应",
                  "距离传感器: 超声波",
                  "气压计: 高精度"
                ]
              },
              {
                title: "连接",
                specs: [
                  "Wi-Fi: 6E",
                  "蓝牙: 5.2",
                  "GPS: 双频",
                  "5G: 可选支持"
                ]
              },
              {
                title: "电池",
                specs: [
                  "容量: 2500mAh",
                  "快充: 支持18W",
                  "续航: 12小时",
                  "无线充电: 支持"
                ]
              }
            ].map((spec, index) => (
              <div key={index} className="group relative transform hover:-translate-y-1 transition-all duration-300">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative p-8 rounded-xl bg-gray-900/50 backdrop-blur-xl border border-gray-800 hover:border-gray-700 transition-colors">
                  <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    {spec.title}
                  </h3>
                  <ul className="space-y-4">
                    {spec.specs.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-400 group-hover:translate-x-2 transition-transform duration-300">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover:bg-purple-500 transition-colors"></span>
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

      {/* Software Specs */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            软件规格
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative p-8 rounded-xl bg-gray-900/50 backdrop-blur-xl border border-gray-800">
                  <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    AI模型规格
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium mb-3 text-white">视觉识别模型</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>• 支持200+物体类别实时识别</li>
                        <li>• OCR文字识别准确率99%</li>
                        <li>• 人脸识别支持1:N匹配</li>
                        <li>• 场景理解覆盖50+场景</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-3 text-white">语音处理模型</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>• 支持多语言实时语音识别</li>
                        <li>• 环境声音分类准确率95%</li>
                        <li>• 语音合成自然度评分4.8/5</li>
                        <li>• 支持离线语音识别</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative p-8 rounded-xl bg-gray-900/50 backdrop-blur-xl border border-gray-800">
                  <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    系统性能
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-medium mb-3 text-white">响应速度</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>• 图像识别延迟: &lt;100ms</li>
                        <li>• 语音识别延迟: &lt;200ms</li>
                        <li>• 系统启动时间: &lt;2s</li>
                        <li>• UI响应时间: &lt;50ms</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-3 text-white">资源占用</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>• 内存占用: &lt;4GB</li>
                        <li>• CPU使用率: &lt;30%</li>
                        <li>• GPU使用率: &lt;40%</li>
                        <li>• 存储空间: 64GB</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative p-8 rounded-xl bg-gray-900/50 backdrop-blur-xl border border-gray-800">
                  <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    软件更新
                  </h3>
                  <ul className="space-y-4 text-gray-400">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      OTA在线更新
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      每月安全更新
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      季度功能更新
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      AI模型定期优化
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative p-8 rounded-xl bg-gray-900/50 backdrop-blur-xl border border-gray-800">
                  <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    安全与隐私
                  </h3>
                  <ul className="space-y-4 text-gray-400">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      端到端加密
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      生物识别解锁
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      数据本地存储
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      隐私模式控制
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compatibility */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            兼容性
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "操作系统",
                items: ["iOS 13.0+", "Android 10.0+", "HarmonyOS 2.0+", "Windows 10+"]
              },
              {
                title: "应用生态",
                items: ["APP Store", "Google Play", "华为应用市场", "自有应用商店"]
              },
              {
                title: "智能家居",
                items: ["Apple HomeKit", "Google Home", "小米生态", "华为智选"]
              }
            ].map((compat, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative p-8 rounded-xl bg-gray-900/50 backdrop-blur-xl border border-gray-800">
                  <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    {compat.title}
                  </h3>
                  <ul className="space-y-4">
                    {compat.items.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-400">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
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
    </main>
  );
} 