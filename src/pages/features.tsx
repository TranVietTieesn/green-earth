import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import ClimateChart from '@/components/ClimateChart';
import GlassCard from '@/components/GlassCard';
import ParticleBackground from '@/components/ParticleBackground';

export default function Features() {
  const { language, t } = useLanguage();

  const biomes = [
    {
      name: language === 'en' ? 'Tropical Rainforest' : language === 'ja' ? '熱帯雨林' : 'Rừng mưa nhiệt đới',
      emoji: '🌳',
      description: language === 'en'
        ? 'Home to 50% of world\'s species despite covering only 6% of Earth\'s surface.'
        : language === 'ja'
        ? '地球表面の6%しか占めていないが、世界の種の50%の故郷。'
        : 'Nơi cư trú của 50% các loài trên thế giới mặc dù chỉ chiếm 6% bề mặt Trái Đất.',
      color: 'bg-green-500',
    },
    {
      name: language === 'en' ? 'Ocean' : language === 'ja' ? '海洋' : 'Đại dương',
      emoji: '🌊',
      description: language === 'en'
        ? 'Covers 71% of Earth\'s surface and produces 70% of our oxygen.'
        : language === 'ja'
        ? '地球表面の71%を覆い、酸素の70%を生産。'
        : 'Bao phủ 71% bề mặt Trái Đất và sản xuất 70% oxy của chúng ta.',
      color: 'bg-blue-500',
    },
    {
      name: language === 'en' ? 'Desert' : language === 'ja' ? '砂漠' : 'Sa mạc',
      emoji: '🏜️',
      description: language === 'en'
        ? 'Extreme environments that host uniquely adapted life forms.'
        : language === 'ja'
        ? '独特に適応した生命体が住む極端な環境。'
        : 'Môi trường khắc nghiệt nơi sinh sống của các dạng sống thích ứng độc đáo.',
      color: 'bg-yellow-500',
    },
    {
      name: language === 'en' ? 'Arctic Tundra' : language === 'ja' ? '北極ツンドラ' : 'Đồng cỏ Bắc Cực',
      emoji: '❄️',
      description: language === 'en'
        ? 'Frozen landscapes crucial for global climate regulation.'
        : language === 'ja'
        ? '地球気候調節に重要な凍結した景観。'
        : 'Cảnh quan đóng băng quan trọng cho việc điều hòa khí hậu toàn cầu.',
      color: 'bg-blue-300',
    },
    {
      name: language === 'en' ? 'Mountains' : language === 'ja' ? '山脈' : 'Núi',
      emoji: '⛰️',
      description: language === 'en'
        ? 'Vertical ecosystems with diverse climate zones at different altitudes.'
        : language === 'ja'
        ? '異なる高度で多様な気候帯を持つ垂直生態系。'
        : 'Hệ sinh thái dọc với các vùng khí hậu đa dạng ở độ cao khác nhau.',
      color: 'bg-gray-500',
    },
    {
      name: language === 'en' ? 'Grasslands' : language === 'ja' ? '草原' : 'Đồng cỏ',
      emoji: '🌾',
      description: language === 'en'
        ? 'Vast plains supporting large herbivore populations and agriculture.'
        : language === 'ja'
        ? '大型草食動物と農業を支える広大な平原。'
        : 'Đồng bằng rộng lớn hỗ trợ các quần thể động vật ăn cỏ lớn và nông nghiệp.',
      color: 'bg-lime-500',
    },
  ];

  const phenomena = [
    {
      icon: '🌈',
      name: language === 'en' ? 'Aurora Borealis' : language === 'ja' ? 'オーロラ' : 'Cực quang',
      description: language === 'en'
        ? 'Spectacular light displays caused by solar particles interacting with Earth\'s magnetosphere.'
        : language === 'ja'
        ? '太陽粒子が地球の磁気圏と相互作用することで起こる壮観な光のディスプレイ。'
        : 'Màn trình diễn ánh sáng spectacular do các hạt mặt trời tương tác với từ quyển Trái Đất.',
    },
    {
      icon: '🌪️',
      name: language === 'en' ? 'Weather Systems' : language === 'ja' ? '気象システム' : 'Hệ thống thời tiết',
      description: language === 'en'
        ? 'Complex atmospheric dynamics that create diverse weather patterns worldwide.'
        : language === 'ja'
        ? '世界中で多様な気象パターンを作る複雑な大気力学。'
        : 'Động lực học khí quyển phức tạp tạo ra các mô hình thời tiết đa dạng trên toàn thế giới.',
    },
    {
      icon: '🌋',
      name: language === 'en' ? 'Volcanic Activity' : language === 'ja' ? '火山活動' : 'Hoạt động núi lửa',
      description: language === 'en'
        ? 'Geological processes that shape landscapes and create new land formations.'
        : language === 'ja'
        ? '景観を形作り、新しい地形を作る地質学的プロセス。'
        : 'Các quá trình địa chất định hình cảnh quan và tạo ra các cấu trúc đất mới.',
    },
    {
      icon: '🌊',
      name: language === 'en' ? 'Ocean Currents' : language === 'ja' ? '海流' : 'Dòng hải lưu',
      description: language === 'en'
        ? 'Massive water movements that regulate global climate and distribute nutrients.'
        : language === 'ja'
        ? '地球気候を調節し栄養素を分配する大規模な水の動き。'
        : 'Chuyển động nước khổng lồ điều hòa khí hậu toàn cầu và phân phối chất dinh dưỡng.',
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-emerald-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-6xl md:text-8xl mb-8">🌍</div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              {t.nav_features}
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 text-balance">
              {language === 'en'
                ? 'Explore Earth\'s incredible diversity of ecosystems and natural phenomena'
                : language === 'ja'
                ? '地球の信じられないほど多様な生態系と自然現象を探索する'
                : 'Khám phá sự đa dạng đáng kinh ngạc của các hệ sinh thái và hiện tượng tự nhiên trên Trái Đất'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Biomes Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">
            {language === 'en' ? 'Earth\'s Biomes' : language === 'ja' ? '地球のバイオーム' : 'Các quần xã sinh vật trên Trái Đất'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {biomes.map((biome, index) => (
              <div
                key={index}
                className="card group"
              >
                <div className={`w-16 h-16 ${biome.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl">{biome.emoji}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{biome.name}</h3>
                <p className="text-slate-600 leading-relaxed text-center">{biome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Natural Phenomena */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-primary-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">
            {language === 'en' ? 'Natural Phenomena' : language === 'ja' ? '自然現象' : 'Hiện tượng tự nhiên'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {phenomena.map((phenomenon, index) => (
              <div
                key={index}
                className="card group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform">
                    {phenomenon.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gradient">{phenomenon.name}</h3>
                    <p className="text-slate-600 leading-relaxed">{phenomenon.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation Stats */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-emerald-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {language === 'en' 
                ? 'Protecting Earth\'s Wonders' 
                : language === 'ja' 
                ? '地球の驚異を守る' 
                : 'Bảo vệ những kỳ quan của Trái Đất'
              }
            </h2>
            <p className="text-xl opacity-90 mb-8">
              {language === 'en'
                ? 'Each biome and natural phenomenon plays a crucial role in maintaining Earth\'s delicate balance.'
                : language === 'ja'
                ? '各バイオームと自然現象は、地球の微妙なバランスを維持する上で重要な役割を果たしています。'
                : 'Mỗi quần xã sinh vật và hiện tượng tự nhiên đều đóng vai trò quan trọng trong việc duy trì sự cân bằng tinh tế của Trái Đất.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Climate Data Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50 relative">
        <ParticleBackground particleCount={20} />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              {language === 'en' 
                ? 'Climate Monitoring' 
                : language === 'ja' 
                ? '気候監視' 
                : 'Giám sát khí hậu'
              }
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Track real-time climate data and understand the changes affecting our planet'
                : language === 'ja'
                ? 'リアルタイムの気候データを追跡し、私たちの惑星に影響を与える変化を理解する'
                : 'Theo dõi dữ liệu khí hậu thời gian thực và hiểu những thay đổi ảnh hưởng đến hành tinh của chúng ta'
              }
            </p>
          </motion.div>
          
          <ClimateChart />
        </div>
      </section>
    </div>
  );
} 