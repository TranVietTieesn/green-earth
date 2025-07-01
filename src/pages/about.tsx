import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Clock, Thermometer, Mountain, Waves } from 'lucide-react';

export default function About() {
  const { language, t } = useLanguage();

  const facts = [
    {
      icon: Clock,
      title: language === 'en' ? 'Age' : language === 'ja' ? '年齢' : 'Tuổi',
      value: '4.54',
      unit: language === 'en' ? 'billion years' : language === 'ja' ? '億年' : 'tỷ năm',
      description: language === 'en' 
        ? 'Earth formed approximately 4.54 billion years ago through gravitational collapse of dust and gas from the solar nebula.'
        : language === 'ja'
        ? '地球は約45.4億年前に太陽系星雲からの塵とガスの重力崩壊によって形成されました。'
        : 'Trái Đất hình thành khoảng 4.54 tỷ năm trước thông qua sự sụp đổ hấp dẫn của bụi và khí từ tinh vân mặt trời.',
    },
    {
      icon: Thermometer,
      title: language === 'en' ? 'Average Temperature' : language === 'ja' ? '平均気温' : 'Nhiệt độ trung bình',
      value: '15',
      unit: '°C',
      description: language === 'en'
        ? 'The global average temperature that supports diverse life forms across different climate zones.'
        : language === 'ja'
        ? '異なる気候帯の多様な生命体を支える地球全体の平均気温。'
        : 'Nhiệt độ trung bình toàn cầu hỗ trợ các dạng sống đa dạng qua các vùng khí hậu khác nhau.',
    },
    {
      icon: Mountain,
      title: language === 'en' ? 'Highest Point' : language === 'ja' ? '最高点' : 'Điểm cao nhất',
      value: '8,849',
      unit: 'm',
      description: language === 'en'
        ? 'Mount Everest, the highest peak above sea level, continues to grow approximately 4mm per year.'
        : language === 'ja'
        ? 'エベレスト山は海抜最高峰で、年間約4mmずつ成長し続けています。'
        : 'Núi Everest, đỉnh cao nhất trên mực nước biển, tiếp tục phát triển khoảng 4mm mỗi năm.',
    },
    {
      icon: Waves,
      title: language === 'en' ? 'Deepest Point' : language === 'ja' ? '最深点' : 'Điểm sâu nhất',
      value: '11,034',
      unit: 'm',
      description: language === 'en'
        ? 'Challenger Deep in the Mariana Trench, the deepest known point in the ocean depths.'
        : language === 'ja'
        ? 'マリアナ海溝のチャレンジャー海淵は、海洋の最深部として知られています。'
        : 'Challenger Deep trong rãnh Mariana, điểm sâu nhất được biết đến trong lòng đại dương.',
    },
  ];

  const layers = [
    {
      name: language === 'en' ? 'Crust' : language === 'ja' ? '地殻' : 'Vỏ Trái Đất',
      thickness: language === 'en' ? '5-70 km' : language === 'ja' ? '5-70km' : '5-70 km',
      color: 'bg-amber-500',
      description: language === 'en'
        ? 'The outermost solid shell, including continents and ocean floors.'
        : language === 'ja'
        ? '大陸と海底を含む最外層の固体殻。'
        : 'Lớp vỏ rắn ngoài cùng, bao gồm các lục địa và đáy đại dương.',
    },
    {
      name: language === 'en' ? 'Mantle' : language === 'ja' ? 'マントル' : 'Lớp phủ',
      thickness: language === 'en' ? '2,900 km' : language === 'ja' ? '2,900km' : '2,900 km',
      color: 'bg-orange-500',
      description: language === 'en'
        ? 'The largest layer, composed of hot, dense rock that flows slowly.'
        : language === 'ja'
        ? '最大の層で、ゆっくりと流れる高温で密度の高い岩石で構成されています。'
        : 'Lớp lớn nhất, bao gồm đá nóng, dày đặc chảy chậm.',
    },
    {
      name: language === 'en' ? 'Outer Core' : language === 'ja' ? '外核' : 'Lõi ngoài',
      thickness: language === 'en' ? '2,300 km' : language === 'ja' ? '2,300km' : '2,300 km',
      color: 'bg-red-500',
      description: language === 'en'
        ? 'Liquid iron and nickel that generates Earth\'s magnetic field.'
        : language === 'ja'
        ? '地球の磁場を生成する液体の鉄とニッケル。'
        : 'Sắt và niken lỏng tạo ra từ trường của Trái Đất.',
    },
    {
      name: language === 'en' ? 'Inner Core' : language === 'ja' ? '内核' : 'Lõi trong',
      thickness: language === 'en' ? '1,220 km' : language === 'ja' ? '1,220km' : '1,220 km',
      color: 'bg-yellow-400',
      description: language === 'en'
        ? 'Solid iron and nickel under extreme pressure and temperature.'
        : language === 'ja'
        ? '極端な圧力と温度下での固体の鉄とニッケル。'
        : 'Sắt và niken rắn dưới áp suất và nhiệt độ cực cao.',
    },
  ];

  const timeline = [
    {
      period: language === 'en' ? '4.6 billion years ago' : language === 'ja' ? '46億年前' : '4.6 tỷ năm trước',
      event: language === 'en' ? 'Earth Formation' : language === 'ja' ? '地球の形成' : 'Hình thành Trái Đất',
      description: language === 'en'
        ? 'Solar system formation and early Earth development from cosmic dust and debris.'
        : language === 'ja'
        ? '太陽系の形成と宇宙の塵と破片からの初期地球の発達。'
        : 'Hình thành hệ mặt trời và phát triển Trái Đất sơ khai từ bụi và mảnh vỡ vũ trụ.',
    },
    {
      period: language === 'en' ? '3.8 billion years ago' : language === 'ja' ? '38億年前' : '3.8 tỷ năm trước',
      event: language === 'en' ? 'First Life' : language === 'ja' ? '最初の生命' : 'Sự sống đầu tiên',
      description: language === 'en'
        ? 'Simple single-celled organisms emerge in Earth\'s primitive oceans.'
        : language === 'ja'
        ? '地球の原始海洋で単純な単細胞生物が出現。'
        : 'Các sinh vật đơn bào đơn giản xuất hiện trong đại dương nguyên thủy của Trái Đất.',
    },
    {
      period: language === 'en' ? '2.5 billion years ago' : language === 'ja' ? '25億年前' : '2.5 tỷ năm trước',
      event: language === 'en' ? 'Oxygen Atmosphere' : language === 'ja' ? '酸素大気' : 'Khí quyển oxy',
      description: language === 'en'
        ? 'Cyanobacteria begin producing oxygen, creating the atmosphere we know today.'
        : language === 'ja'
        ? 'シアノバクテリアが酸素を生産し始め、今日知られている大気を作り出す。'
        : 'Vi khuẩn lam bắt đầu sản xuất oxy, tạo ra bầu khí quyển mà chúng ta biết ngày nay.',
    },
    {
      period: language === 'en' ? '540 million years ago' : language === 'ja' ? '5億4000万年前' : '540 triệu năm trước',
      event: language === 'en' ? 'Cambrian Explosion' : language === 'ja' ? 'カンブリア爆発' : 'Vụ nổ Cambrian',
      description: language === 'en'
        ? 'Rapid diversification of life forms and emergence of complex organisms.'
        : language === 'ja'
        ? '生命体の急速な多様化と複雑な生物の出現。'
        : 'Sự đa dạng hóa nhanh chóng của các dạng sống và sự xuất hiện của các sinh vật phức tạp.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="text-6xl md:text-8xl mb-8"
            >
              🌍
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
            >
              {t.nav_about}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-600 text-balance"
            >
              {language === 'en'
                ? 'Discover the fascinating science and incredible beauty of our home planet'
                : language === 'ja'
                ? '私たちの故郷である惑星の魅力的な科学と信じられないほどの美しさを発見する'
                : 'Khám phá khoa học hấp dẫn và vẻ đẹp không thể tin được của hành tinh quê hương chúng ta'
              }
            </motion.p>
          </div>
        </div>
      </section>

      {/* Earth Facts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient"
          >
            {language === 'en' ? 'Earth by the Numbers' : language === 'ja' ? '数字で見る地球' : 'Trái Đất qua con số'}
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card text-center group"
              >
                <div className="bg-gradient-to-br from-primary-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <fact.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold mb-2 text-slate-700">{fact.title}</h3>
                <div className="text-3xl font-bold text-gradient mb-2">
                  {fact.value}<span className="text-lg text-slate-500">{fact.unit}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{fact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Earth's Layers */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient"
          >
            {language === 'en' ? 'Earth\'s Structure' : language === 'ja' ? '地球の構造' : 'Cấu trúc Trái Đất'}
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto relative">
                {/* Earth layers visualization */}
                <div className="absolute inset-0 rounded-full bg-yellow-400 animate-pulse-slow"></div>
                <div className="absolute inset-4 rounded-full bg-red-500"></div>
                <div className="absolute inset-8 rounded-full bg-orange-500"></div>
                <div className="absolute inset-12 rounded-full bg-amber-500"></div>
                
                {/* Core label */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm">
                  {language === 'en' ? 'Core' : language === 'ja' ? 'コア' : 'Lõi'}
                </div>
              </div>
            </motion.div>
            
            <div className="space-y-6">
              {layers.map((layer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-4 h-4 rounded-full ${layer.color} mt-1.5 flex-shrink-0`}></div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{layer.name}</h3>
                    <p className="text-primary-600 font-medium mb-2">{layer.thickness}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{layer.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Earth's Timeline */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-emerald-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient"
          >
            {language === 'en' ? 'Earth\'s History' : language === 'ja' ? '地球の歴史' : 'Lịch sử Trái Đất'}
          </motion.h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-300 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full transform md:-translate-x-1/2 z-10"></div>
                  
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="card">
                      <h3 className="font-bold text-primary-600 mb-2">{event.period}</h3>
                      <h4 className="text-xl font-semibold mb-3">{event.event}</h4>
                      <p className="text-slate-600 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'en' 
                ? 'Protect Our Amazing Planet' 
                : language === 'ja' 
                ? '私たちの素晴らしい惑星を守る' 
                : 'Bảo vệ hành tinh tuyệt vời của chúng ta'
              }
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {language === 'en'
                ? 'Understanding Earth\'s incredible complexity helps us appreciate why we must protect it for future generations.'
                : language === 'ja'
                ? '地球の信じられないほどの複雑さを理解することで、なぜ未来の世代のためにそれを守らなければならないかがわかります。'
                : 'Hiểu được sự phức tạp đáng kinh ngạc của Trái Đất giúp chúng ta nhận thức tại sao phải bảo vệ nó cho các thế hệ tương lai.'
              }
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 