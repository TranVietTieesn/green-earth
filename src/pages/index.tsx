import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Counter from '@/components/Counter';

export default function Home() {
  const { language, t } = useLanguage();

  const stats = [
    { value: 4.5, suffix: 'B', label: t.stats_age },
    { value: 71, suffix: '%', label: t.stats_ocean },
    { value: 8.7, suffix: 'M', label: t.stats_species },
    { value: 8.0, suffix: 'B', label: t.stats_population },
  ];

  const highlights = [
    {
      emoji: '🌍',
      title: language === 'en' ? 'Diverse Ecosystems' : language === 'ja' ? '多様な生態系' : 'Hệ sinh thái đa dạng',
      description: language === 'en' 
        ? 'From rainforests to deserts, Earth hosts an incredible variety of life forms and environments.'
        : language === 'ja' 
        ? '熱帯雨林から砂漠まで、地球は信じられないほど多様な生命体と環境を育んでいます。'
        : 'Từ rừng mưa đến sa mạc, Trái Đất chứa đựng một sự đa dạng đáng kinh ngạc của các dạng sống và môi trường.',
    },
    {
      emoji: '💧',
      title: language === 'en' ? 'Water Cycle' : language === 'ja' ? '水循環' : 'Chu trình nước',
      description: language === 'en'
        ? 'The continuous movement of water through evaporation, condensation, and precipitation sustains all life.'
        : language === 'ja'
        ? '蒸発、凝縮、降水による水の連続的な移動が全ての生命を支えています。'
        : 'Sự chuyển động liên tục của nước qua bay hơi, ngưng tụ và kết tủa duy trì mọi sự sống.',
    },
    {
      emoji: '🌱',
      title: language === 'en' ? 'Oxygen Production' : language === 'ja' ? '酸素生産' : 'Sản xuất oxy',
      description: language === 'en'
        ? 'Plants and phytoplankton produce the oxygen we breathe through photosynthesis.'
        : language === 'ja'
        ? '植物と植物プランクトンが光合成によって私たちが呼吸する酸素を生産しています。'
        : 'Thực vật và thực vật phù du sản xuất oxy mà chúng ta thở qua quá trình quang hợp.',
    },
    {
      emoji: '🛡️',
      title: language === 'en' ? 'Magnetic Field' : language === 'ja' ? '磁場' : 'Từ trường',
      description: language === 'en'
        ? 'Earth\'s magnetic field protects us from harmful solar radiation and cosmic rays.'
        : language === 'ja'
        ? '地球の磁場は有害な太陽放射線や宇宙線から私たちを守っています。'
        : 'Từ trường Trái Đất bảo vệ chúng ta khỏi bức xạ mặt trời có hại và tia vũ trụ.',
    },
  ];

  const initiatives = [
    {
      emoji: '💨',
      title: language === 'en' ? 'Renewable Energy' : language === 'ja' ? '再生可能エネルギー' : 'Năng lượng tái tạo',
      description: language === 'en'
        ? 'Countries worldwide are investing in solar, wind, and hydroelectric power to reduce carbon emissions and protect our environment.'
        : language === 'ja'
        ? '世界各国が太陽光、風力、水力発電に投資し、炭素排出量を削減し環境を保護しています。'
        : 'Các quốc gia trên thế giới đang đầu tư vào năng lượng mặt trời, gió và thủy điện để giảm phát thải carbon và bảo vệ môi trường.',
    },
    {
      emoji: '🌳',
      title: language === 'en' ? 'Reforestation Projects' : language === 'ja' ? '森林再生プロジェクト' : 'Dự án tái trồng rừng',
      description: language === 'en'
        ? 'Global initiatives are planting billions of trees to combat deforestation and restore natural habitats for wildlife.'
        : language === 'ja'
        ? '世界的な取り組みにより、森林破壊に対抗し、野生生物の自然生息地を回復するために数十億本の木が植えられています。'
        : 'Các sáng kiến toàn cầu đang trồng hàng tỷ cây để chống phá rừng và khôi phục môi trường sống tự nhiên cho động vật hoang dã.',
    },
    {
      emoji: '♻️',
      title: language === 'en' ? 'Ocean Conservation' : language === 'ja' ? '海洋保護' : 'Bảo tồn đại dương',
      description: language === 'en'
        ? 'Marine protection areas and cleanup initiatives are working to preserve ocean ecosystems and reduce plastic pollution.'
        : language === 'ja'
        ? '海洋保護区域と清掃活動により、海洋生態系の保護とプラスチック汚染の削減に取り組んでいます。'
        : 'Các khu bảo tồn biển và các sáng kiến dọn dẹp đang nỗ lực bảo vệ hệ sinh thái đại dương và giảm ô nhiễm nhựa.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-emerald-50 to-slate-50 earth-grid">
        <div className="container-custom text-center z-10">
          <div className="mb-8">
            <div className="text-8xl md:text-9xl animate-spin-slow">🌍</div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            {t.hero_welcome}
            <br />
            <span className="text-gradient">{t.hero_title}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto text-balance">
            {t.hero_subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/features" className="btn btn-primary">
              ✨ {t.btn_explore}
            </Link>
            <Link href="/about" className="btn btn-secondary">
              🌍 {t.btn_learn}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <Counter 
                  end={stat.value} 
                  suffix={stat.suffix}
                  decimals={stat.suffix === 'B' || stat.suffix === 'M' ? 1 : 0}
                />
                <p className="text-slate-600 mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">
              {t.intro_title}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              {language === 'en' 
                ? 'Earth, our magnificent blue planet, is the only known celestial body that harbors life in the universe. From the depths of the oceans to the peaks of the highest mountains, from the polar ice caps to the tropical rainforests, our planet is a complex and beautiful ecosystem that has evolved over billions of years.'
                : language === 'ja'
                ? '地球は、宇宙で生命を宿すことが知られている唯一の天体です。海の深さから最高峰の山々まで、極地の氷冠から熱帯雨林まで、私たちの惑星は何十億年もかけて進化してきた複雑で美しい生態系です。'
                : 'Trái Đất, hành tinh xanh tuyệt đẹp của chúng ta, là thiên thể duy nhất được biết đến trong vũ trụ có sự sống. Từ đáy đại dương sâu thẳm đến những đỉnh núi cao nhất, từ các chỏm băng cực đến rừng mưa nhiệt đới, hành tinh của chúng ta là một hệ sinh thái phức tạp và tuyệt đẹp đã tiến hóa qua hàng tỷ năm.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* World Initiatives Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-emerald-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">
            {t.world_examples_title}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="card group">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 rounded-xl mr-4 group-hover:bg-primary-200 transition-colors">
                    <span className="text-2xl">{initiative.emoji}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{initiative.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earth Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">
            {t.highlights_title}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-primary-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform animate-float">
                  <span className="text-2xl">{highlight.emoji}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{highlight.title}</h3>
                <p className="text-slate-600 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-emerald-600 text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'en' 
                ? 'Take Action for Our Planet' 
                : language === 'ja' 
                ? '私たちの惑星のために行動を' 
                : 'Hành động vì hành tinh của chúng ta'
              }
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {language === 'en'
                ? 'Every small action counts in protecting our beautiful planet. Join the global movement to preserve Earth for future generations.'
                : language === 'ja'
                ? '私たちの美しい惑星を守るために、小さな行動でも大切です。未来の世代のために地球を保護する世界的な運動に参加しましょう。'
                : 'Mọi hành động nhỏ đều có ý nghĩa trong việc bảo vệ hành tinh xinh đẹp của chúng ta. Hãy tham gia phong trào toàn cầu để bảo tồn Trái Đất cho các thế hệ tương lai.'
              }
            </p>
            <Link href="/features" className="btn bg-white text-primary-600 hover:bg-slate-100">
              🌱 {t.btn_explore}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 