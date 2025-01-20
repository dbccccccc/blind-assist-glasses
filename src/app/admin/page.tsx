'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [selectedTab, setSelectedTab] = useState('overview');

  // 模拟实时数据
  const mockData = {
    activeUsers: 128,
    totalDevices: 156,
    alertsToday: 3,
    batteryLow: 5,
    onlineRate: "96.8%",
    avgUsageTime: "4.2小时",
    totalDistance: "1,286km",
    safetyScore: "92",
  };

  // 模拟用户列表
  const mockUsers = [
    {
      id: 1,
      name: '张先生',
      location: '北京市朝阳区',
      lastActive: '2分钟前',
      batteryLevel: 85,
      deviceStatus: 'online',
      currentActivity: '步行',
      speed: '3.2km/h',
      surroundings: '人行道，行人稀少',
      lastAlert: null,
      usageTime: '2小时23分钟',
      coordinates: { lat: '39.9219°N', lng: '116.4403°E' },
    },
    {
      id: 2,
      name: '李女士',
      location: '上海市浦东新区',
      lastActive: '5分钟前',
      batteryLevel: 32,
      deviceStatus: 'online',
      currentActivity: '静止',
      speed: '0km/h',
      surroundings: '室内，商场环境',
      lastAlert: {
        type: '电池低电量',
        time: '10分钟前',
        level: 'warning'
      },
      usageTime: '5小时47分钟',
      coordinates: { lat: '31.2304°N', lng: '121.4737°E' },
    },
    {
      id: 3,
      name: '王先生',
      location: '广州市天河区',
      lastActive: '刚刚',
      batteryLevel: 96,
      deviceStatus: 'online',
      currentActivity: '乘车',
      speed: '35km/h',
      surroundings: '公交车内，拥挤环境',
      lastAlert: {
        type: '环境危险',
        time: '1小时前',
        level: 'warning',
        details: '前方施工区域'
      },
      usageTime: '1小时15分钟',
      coordinates: { lat: '23.1291°N', lng: '113.2644°E' },
    },
  ];

  // 模拟预警信息
  const mockAlerts = [
    {
      id: 1,
      user: '张先生',
      type: '环境危险',
      time: '10分钟前',
      status: 'warning',
      details: '前方50米处发现道路施工',
      location: '北京市朝阳区建国路',
      action: '已发送语音提醒',
      aiSuggestion: '建议改道：向东200米有安全通道'
    },
    {
      id: 2,
      user: '李女士',
      type: '跌倒检测',
      time: '30分钟前',
      status: 'danger',
      details: '检测到剧烈晃动，可能发生跌倒',
      location: '上海市浦东新区陆家嘴',
      action: '已通知紧急联系人'
    },
    {
      id: 3,
      user: '王先生',
      type: '电池低电量',
      time: '1小时前',
      status: 'warning',
      details: '电池电量低于20%',
      location: '广州市天河区天河路',
      action: '已发送语音提醒'
    },
    {
      id: 4,
      user: '赵女士',
      type: '异常行为',
      time: '15分钟前',
      status: 'warning',
      details: '检测到用户可能偏离预设安全路线',
      location: '深圳市南山区科技园',
      action: '已通知家属',
      aiSuggestion: '建议开启实时导航'
    }
  ];

  // 模拟环境识别记录
  const mockRecognitions = [
    {
      id: 1,
      user: '张先生',
      type: '自动截图',
      time: '2分钟前',
      description: '您正在一个室内环境，前方5米处有一个楼梯，左侧是一扇窗户，右侧有一个书架。',
      objects: ['楼梯', '窗户', '书架'],
      confidence: 0.95
    },
    {
      id: 2,
      user: '李女士',
      type: '手动识别',
      time: '5分钟前',
      description: '您正在人行横道前等待，当前红灯，请等待15秒后绿灯亮起再通行。',
      objects: ['人行横道', '红绿灯', '行人'],
      confidence: 0.98
    }
  ];

  // 添加设备健康状态记录
  const mockDeviceHealth = [
    {
      id: 1,
      deviceId: 'DEV-2024001',
      user: '张先生',
      lastMaintenance: '2024-02-15',
      batteryHealth: '95%',
      cameraStatus: '正常',
      sensors: {
        accelerometer: '正常',
        gyroscope: '正常',
        gps: '正常',
        proximity: '需要校准'
      },
      nextMaintenanceDate: '2024-05-15'
    },
    // ... more device health records
  ];

  // 添加用户行为分析数据
  const mockBehaviorAnalytics = [
    {
      userId: 1,
      name: '张先生',
      weeklyStats: {
        avgDailySteps: 6500,
        avgDailyDistance: '4.2km',
        mostActiveTime: '9:00-11:00',
        restingPeriods: '13:00-14:00',
        riskBehaviors: 2,
        safetyScore: 95
      },
      commonRoutes: [
        '家 → 公园 → 超市',
        '家 → 社区中心',
      ],
      suggestions: [
        '建议增加午间休息时间',
        '避免夜间外出活动'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Top Bar */}
      <div className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                智能眼镜管理平台
              </h1>
            </div>
            <Link 
              href="/"
              className="text-gray-300 hover:text-white transition-all px-4 py-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/50 hover:border-gray-500/50 backdrop-blur-sm"
            >
              返回官网
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {Object.entries(mockData).map(([key, value]) => (
            <div key={key} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all hover:transform hover:scale-[1.02] cursor-pointer">
              <div className="text-gray-400 mb-2">{
                key === 'activeUsers' ? '活跃用户' :
                key === 'totalDevices' ? '设备总数' :
                key === 'alertsToday' ? '今日预警' :
                key === 'batteryLow' ? '低电量设备' :
                key === 'onlineRate' ? '在线率' :
                key === 'avgUsageTime' ? '平均使用时长' :
                key === 'totalDistance' ? '总行程距离' : '安全评分'
              }</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {value}
              </div>
              <div className="text-green-400 text-sm mt-2 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 10-2 0v4a1 1 0 102 0V7z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                </svg>
                实时更新
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-4 border-b border-gray-700/50">
          {['overview', 'alerts', 'recognition', 'devices', 'analytics'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 font-medium transition-all ${
                selectedTab === tab
                  ? 'text-blue-400 border-b-2 border-blue-400 bg-blue-500/10'
                  : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/30'
              } rounded-t-lg`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab === 'overview' ? '实时概览' :
               tab === 'alerts' ? '预警信息' :
               tab === 'recognition' ? '环境识别' :
               tab === 'devices' ? '设备管理' : '行为分析'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-300 ease-in-out">
          {selectedTab === 'overview' && (
            <div className="space-y-4 animate-fadeIn">
              {mockUsers.map(user => (
                <div key={user.id} 
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all hover:transform hover:scale-[1.01]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* User Info */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-white font-medium flex items-center">
                          <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                          {user.name}
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs ${
                          user.deviceStatus === 'online' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                        }`}>
                          {user.deviceStatus === 'online' ? '在线' : '离线'}
                        </div>
                      </div>
                      <div className="text-gray-400 text-sm">{user.location}</div>
                      <div className="text-gray-400 text-sm">最后活动：{user.lastActive}</div>
                    </div>

                    {/* Device Status */}
                    <div className="space-y-2">
                      <div className="text-gray-300 text-sm">设备状态</div>
                      <div className={`text-sm ${
                        user.batteryLevel > 80 ? 'text-green-400' :
                        user.batteryLevel > 40 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        电量 {user.batteryLevel}%
                      </div>
                      <div className="text-gray-400 text-sm">使用时长：{user.usageTime}</div>
                    </div>

                    {/* Activity */}
                    <div className="space-y-2">
                      <div className="text-gray-300 text-sm">当前活动</div>
                      <div className="text-white">{user.currentActivity}</div>
                      <div className="text-gray-400 text-sm">速度：{user.speed}</div>
                      <div className="text-gray-400 text-sm">环境：{user.surroundings}</div>
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                      <div className="text-gray-300 text-sm">位置信息</div>
                      <div className="text-gray-400 text-sm">
                        经度：{user.coordinates.lng}<br />
                        纬度：{user.coordinates.lat}
                      </div>
                      {user.lastAlert && (
                        <div className={`text-sm ${
                          user.lastAlert.level === 'danger' ? 'text-red-400' : 'text-yellow-400'
                        }`}>
                          最近预警：{user.lastAlert.type}（{user.lastAlert.time}）
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedTab === 'alerts' && (
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-medium text-white mb-4">预警信息列表</h3>
              <div className="space-y-4">
                {mockAlerts.map(alert => (
                  <div key={alert.id} className="bg-gray-700/50 rounded-lg p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-white font-medium">{alert.user}</div>
                          <div className={`px-2 py-1 rounded text-xs ${
                            alert.status === 'danger' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {alert.status === 'danger' ? '紧急' : '警告'}
                          </div>
                        </div>
                        <div className="text-gray-400">{alert.type}</div>
                        <div className="text-gray-500 text-sm">{alert.time}</div>
                      </div>
                      <div>
                        <div className="text-gray-300 mb-2">详细信息</div>
                        <div className="text-gray-400">{alert.details}</div>
                        <div className="text-gray-500 text-sm mt-1">{alert.location}</div>
                      </div>
                      <div>
                        <div className="text-gray-300 mb-2">处理状态</div>
                        <div className="text-gray-400">{alert.action}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'recognition' && (
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-medium text-white mb-4">环境识别记录</h3>
              <div className="space-y-4">
                {mockRecognitions.map(record => (
                  <div key={record.id} className="bg-gray-700/50 rounded-lg p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-white font-medium">{record.user}</div>
                          <div className="text-gray-400 text-sm">{record.time}</div>
                        </div>
                        <div className="text-gray-400 mb-2">{record.type}</div>
                        <div className="text-gray-300">{record.description}</div>
                      </div>
                      <div>
                        <div className="text-gray-300 mb-2">识别对象</div>
                        <div className="flex flex-wrap gap-2">
                          {record.objects.map((obj, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm"
                            >
                              {obj}
                            </span>
                          ))}
                        </div>
                        <div className="text-gray-400 text-sm mt-2">
                          识别准确度：{(record.confidence * 100).toFixed(1)}%
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'devices' && (
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-medium text-white mb-4">设备健康状态</h3>
              <div className="space-y-4">
                {mockDeviceHealth.map(device => (
                  <div key={device.id} className="bg-gray-700/50 rounded-lg p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div>
                        <div className="text-white font-medium mb-2">设备 ID: {device.deviceId}</div>
                        <div className="text-gray-400">使用者: {device.user}</div>
                        <div className="text-gray-400">上次维护: {device.lastMaintenance}</div>
                      </div>
                      <div>
                        <div className="text-gray-300 mb-2">传感器状态</div>
                        {Object.entries(device.sensors).map(([sensor, status]) => (
                          <div key={sensor} className="flex justify-between text-sm mb-1">
                            <span className="text-gray-400">{sensor}</span>
                            <span className={status === '正常' ? 'text-green-400' : 'text-yellow-400'}>
                              {status}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="text-gray-300 mb-2">下次维护日期</div>
                        <div className="text-gray-400">{device.nextMaintenanceDate}</div>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                          查看详细报告
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'analytics' && (
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-medium text-white mb-4">用户行为分析</h3>
              <div className="space-y-4">
                {mockBehaviorAnalytics.map(analytics => (
                  <div key={analytics.userId} className="bg-gray-700/50 rounded-lg p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div>
                        <div className="text-white font-medium mb-2">{analytics.name}</div>
                        <div className="space-y-2">
                          <div className="text-gray-400">日均步数: {analytics.weeklyStats.avgDailySteps}</div>
                          <div className="text-gray-400">日均距离: {analytics.weeklyStats.avgDailyDistance}</div>
                          <div className="text-gray-400">活跃时段: {analytics.weeklyStats.mostActiveTime}</div>
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-300 mb-2">常用路线</div>
                        {analytics.commonRoutes.map((route, index) => (
                          <div key={index} className="text-gray-400 mb-1">• {route}</div>
                        ))}
                      </div>
                      <div>
                        <div className="text-gray-300 mb-2">AI 建议</div>
                        {analytics.suggestions.map((suggestion, index) => (
                          <div key={index} className="text-gray-400 mb-1">• {suggestion}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 