'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import GlassCard from './GlassCard';

interface ClimateData {
  year: number;
  temperature: number;
  co2: number;
  seaLevel: number;
  precipitation: number;
}

interface ClimateChartProps {
  className?: string;
}

export default function ClimateChart({ className = '' }: ClimateChartProps) {
  const { language } = useLanguage();
  const [selectedMetric, setSelectedMetric] = useState<'temperature' | 'co2' | 'seaLevel' | 'precipitation'>('temperature');
  const [animatedData, setAnimatedData] = useState<ClimateData[]>([]);

  // Sample climate data - In a real app, this would come from an API
  const climateData: ClimateData[] = [
    { year: 2000, temperature: 14.2, co2: 370, seaLevel: 0, precipitation: 100 },
    { year: 2005, temperature: 14.5, co2: 380, seaLevel: 1.2, precipitation: 98 },
    { year: 2010, temperature: 14.8, co2: 390, seaLevel: 2.8, precipitation: 95 },
    { year: 2015, temperature: 15.1, co2: 405, seaLevel: 4.5, precipitation: 93 },
    { year: 2020, temperature: 15.4, co2: 415, seaLevel: 6.2, precipitation: 91 },
    { year: 2023, temperature: 15.7, co2: 425, seaLevel: 7.8, precipitation: 89 },
  ];

  const metrics = {
    temperature: {
      name: language === 'en' ? 'Global Temperature' : language === 'ja' ? '地球の平均気温' : 'Nhiệt độ toàn cầu',
      unit: '°C',
      color: '#ef4444',
      icon: '🌡️'
    },
    co2: {
      name: language === 'en' ? 'CO₂ Levels' : language === 'ja' ? 'CO₂濃度' : 'Nồng độ CO₂',
      unit: 'ppm',
      color: '#f59e0b',
      icon: '🏭'
    },
    seaLevel: {
      name: language === 'en' ? 'Sea Level Rise' : language === 'ja' ? '海面上昇' : 'Mực nước biển tăng',
      unit: 'cm',
      color: '#3b82f6',
      icon: '🌊'
    },
    precipitation: {
      name: language === 'en' ? 'Precipitation Index' : language === 'ja' ? '降水指数' : 'Chỉ số lượng mưa',
      unit: '%',
      color: '#10b981',
      icon: '🌧️'
    }
  };

  useEffect(() => {
    // Animate data loading
    const timer = setTimeout(() => {
      setAnimatedData(climateData);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getMetricValue = (data: ClimateData, metric: keyof typeof metrics) => {
    switch (metric) {
      case 'temperature': return data.temperature;
      case 'co2': return data.co2;
      case 'seaLevel': return data.seaLevel;
      case 'precipitation': return data.precipitation;
      default: return 0;
    }
  };

  const getMaxValue = (metric: keyof typeof metrics) => {
    return Math.max(...climateData.map(data => getMetricValue(data, metric)));
  };

  const getMinValue = (metric: keyof typeof metrics) => {
    return Math.min(...climateData.map(data => getMetricValue(data, metric)));
  };

  const normalizeValue = (value: number, metric: keyof typeof metrics) => {
    const max = getMaxValue(metric);
    const min = getMinValue(metric);
    return ((value - min) / (max - min)) * 100;
  };

  return (
    <div className={`w-full ${className}`}>
      <GlassCard className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">
            {language === 'en' 
              ? 'Climate Data Trends' 
              : language === 'ja' 
              ? '気候データの傾向' 
              : 'Xu hướng dữ liệu khí hậu'
            }
          </h3>
          <p className="text-slate-600">
            {language === 'en'
              ? 'Interactive visualization of key climate indicators over time'
              : language === 'ja'
              ? '主要な気候指標の時系列インタラクティブ可視化'
              : 'Trực quan hóa tương tác các chỉ số khí hậu chính theo thời gian'
            }
          </p>
        </div>

        {/* Metric Selector */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {(Object.keys(metrics) as Array<keyof typeof metrics>).map((metric) => (
            <motion.button
              key={metric}
              onClick={() => setSelectedMetric(metric)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-xl font-medium transition-all ${
                selectedMetric === metric
                  ? 'bg-gradient-to-r from-primary-500 to-emerald-500 text-white shadow-lg'
                  : 'bg-white/50 text-slate-700 hover:bg-white/70 border border-white/30'
              }`}
            >
              <div className="text-2xl mb-2">{metrics[metric].icon}</div>
              <div className="text-sm font-semibold">{metrics[metric].name}</div>
            </motion.button>
          ))}
        </div>

        {/* Chart */}
        <div className="relative h-64 bg-white/30 rounded-xl p-6 mb-6">
          <div className="flex h-full items-end justify-between">
            {animatedData.map((data, index) => {
              const value = getMetricValue(data, selectedMetric);
              const height = normalizeValue(value, selectedMetric);
              
              return (
                <motion.div
                  key={data.year}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: `${height}%`, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                  className="flex-1 mx-1 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full rounded-t-lg relative"
                    style={{ 
                      backgroundColor: metrics[selectedMetric].color,
                      height: '100%',
                      minHeight: '20px'
                    }}
                  >
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {data.year}: {value.toFixed(1)}{metrics[selectedMetric].unit}
                    </div>
                  </motion.div>
                  
                  {/* Year label */}
                  <div className="text-center text-sm font-medium text-slate-600 mt-2">
                    {data.year}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Current Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {(Object.keys(metrics) as Array<keyof typeof metrics>).map((metric) => {
            const currentValue = getMetricValue(climateData[climateData.length - 1], metric);
            const previousValue = getMetricValue(climateData[climateData.length - 2], metric);
            const change = currentValue - previousValue;
            const isIncrease = change > 0;

            return (
              <motion.div
                key={metric}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center p-4 bg-white/40 rounded-lg"
              >
                <div className="text-2xl mb-2">{metrics[metric].icon}</div>
                <div className="text-lg font-bold text-slate-800">
                  {currentValue.toFixed(1)}{metrics[metric].unit}
                </div>
                <div className={`text-sm font-medium ${
                  metric === 'precipitation' 
                    ? (isIncrease ? 'text-green-600' : 'text-red-600')
                    : (isIncrease ? 'text-red-600' : 'text-green-600')
                }`}>
                  {isIncrease ? '↗' : '↘'} {Math.abs(change).toFixed(1)}{metrics[metric].unit}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Impact Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 p-4 bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200 rounded-lg"
        >
          <div className="flex items-start space-x-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <h4 className="font-semibold text-orange-800 mb-1">
                {language === 'en'
                  ? 'Climate Impact Alert'
                  : language === 'ja'
                  ? '気候影響警告'
                  : 'Cảnh báo tác động khí hậu'
                }
              </h4>
              <p className="text-orange-700 text-sm">
                {language === 'en'
                  ? 'These trends indicate significant climate changes that require immediate global action to protect our planet.'
                  : language === 'ja'
                  ? 'これらの傾向は、地球を保護するために即座な世界的行動が必要な重大な気候変動を示しています。'
                  : 'Những xu hướng này cho thấy những thay đổi khí hậu đáng kể đòi hỏi hành động toàn cầu ngay lập tức để bảo vệ hành tinh của chúng ta.'
                }
              </p>
            </div>
          </div>
        </motion.div>
      </GlassCard>
    </div>
  );
} 