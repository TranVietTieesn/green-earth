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
      title:
        language === 'en'
          ? 'Resilient biomes'
          : language === 'ja'
          ? 'たくましい生物圏'
          : 'Các quần xã kiên cường',
      description:
        language === 'en'
          ? 'From misty forests to coral cities, Earth balances climates, minerals, and living systems in harmony.'
          : language === 'ja'
          ? '霧の森からサンゴ礁の街まで、地球は気候や鉱物、生態系の調和を保っています。'
          : 'Từ rừng sương mù đến những thành phố san hô, Trái Đất cân bằng khí hậu, khoáng chất và hệ sinh thái trong sự hài hòa.',
    },
    {
      title:
        language === 'en'
          ? 'Water in motion'
          : language === 'ja'
          ? '巡る水'
          : 'Dòng nước vận hành',
      description:
        language === 'en'
          ? 'Rivers, rain, and clouds sustain every community, carrying nutrients from mountain peaks to the sea.'
          : language === 'ja'
          ? '川や雨、雲が栄養を運び、山頂から海まであらゆる命を支えています。'
          : 'Sông ngòi, mưa và mây nuôi dưỡng mọi cộng đồng, đưa dưỡng chất từ đỉnh núi ra biển cả.',
    },
    {
      title:
        language === 'en'
          ? 'Shared atmosphere'
          : language === 'ja'
          ? '分かち合う大気'
          : 'Bầu khí quyển chung',
      description:
        language === 'en'
          ? 'Oceans and forests craft the air we breathe, reminding us that care for nature is care for one another.'
          : language === 'ja'
          ? '海と森が私たちの呼吸する空気をつくり、自然を大切にすることは互いを思いやることだと教えてくれます。'
          : 'Đại dương và rừng tạo nên bầu không khí chúng ta hít thở, nhắc nhở rằng bảo vệ thiên nhiên là bảo vệ lẫn nhau.',
    },
  ];

  const initiatives = [
    {
      emoji: '💡',
      title:
        language === 'en'
          ? 'Cities turning solar'
          : language === 'ja'
          ? 'ソーラー化が進む都市'
          : 'Thành phố hướng tới năng lượng mặt trời',
      description:
        language === 'en'
          ? 'Neighborhood microgrids light up homes with community-owned energy and new green jobs.'
          : language === 'ja'
          ? '地域のマイクログリッドが、コミュニティ所有の電力と新しいグリーン雇用で暮らしを照らします。'
          : 'Các lưới điện siêu nhỏ cung cấp năng lượng sở hữu cộng đồng và tạo việc làm xanh mới.',
    },
    {
      emoji: '🌿',
      title:
        language === 'en'
          ? 'Restoring wild spaces'
          : language === 'ja'
          ? '野生の空間を再生'
          : 'Phục hồi vùng hoang dã',
      description:
        language === 'en'
          ? 'Indigenous-led stewardship revives wetlands, grasslands, and the species that call them home.'
          : language === 'ja'
          ? '先住民が主導する管理が湿地や草原、そこに暮らす生き物をよみがえらせています。'
          : 'Sự quản lý của cộng đồng bản địa làm sống lại vùng đất ngập nước, đồng cỏ và những loài sinh sống ở đó.',
    },
    {
      emoji: '🌊',
      title:
        language === 'en'
          ? 'Cleaning coastal currents'
          : language === 'ja'
          ? '海流を守る清掃'
          : 'Làm sạch dòng hải lưu ven bờ',
      description:
        language === 'en'
          ? 'Floating booms capture plastics before they drift offshore, keeping reefs and fisheries thriving.'
          : language === 'ja'
          ? '沿岸で漂流する前に浮遊ブームがプラスチックを回収し、サンゴ礁と漁場を守ります。'
          : 'Hệ thống chắn nổi thu gom nhựa trước khi trôi ra khơi, bảo vệ rạn san hô và ngư trường.',
    },
  ];

  const actions = [
    {
      title:
        language === 'en'
          ? 'Choose reusables first'
          : language === 'ja'
          ? '繰り返し使えるものを選ぶ'
          : 'Ưu tiên đồ tái sử dụng',
      description:
        language === 'en'
          ? 'Carry bottles, utensils, and bags you love to cut single-use plastic from daily routines.'
          : language === 'ja'
          ? 'お気に入りのボトルやカトラリー、バッグを持ち歩き、使い捨てプラスチックを減らしましょう。'
          : 'Mang theo chai nước, dụng cụ và túi yêu thích để giảm nhựa dùng một lần mỗi ngày.',
    },
    {
      title:
        language === 'en'
          ? 'Eat with the seasons'
          : language === 'ja'
          ? '旬を味わう'
          : 'Ăn theo mùa vụ',
      description:
        language === 'en'
          ? 'Seasonal produce lowers transport emissions and keeps local growers thriving.'
          : language === 'ja'
          ? '旬の食材は輸送時の排出を減らし、地域の生産者を支えます。'
          : 'Nông sản theo mùa giúp giảm phát thải vận chuyển và hỗ trợ nông dân địa phương.',
    },
    {
      title:
        language === 'en'
          ? 'Move mindfully'
          : language === 'ja'
          ? '地球にやさしい移動'
          : 'Di chuyển thân thiện',
      description:
        language === 'en'
          ? 'Walk, cycle, carshare, or ride transit to explore your city with a lighter footprint.'
          : language === 'ja'
          ? '歩く・自転車に乗る・シェアする・公共交通を使って、軽やかに街を楽しみましょう。'
          : 'Đi bộ, đạp xe, đi chung xe hoặc dùng phương tiện công cộng để khám phá thành phố một cách bền vững.',
    },
    {
      title:
        language === 'en'
          ? 'Champion local stories'
          : language === 'ja'
          ? '地域の物語を広める'
          : 'Lan tỏa câu chuyện địa phương',
      description:
        language === 'en'
          ? 'Share climate wins and challenges so neighbors feel informed, hopeful, and ready to act.'
          : language === 'ja'
          ? '気候に関する成功と課題を共有し、地域の人々が希望と行動力を持てるようにしましょう。'
          : 'Chia sẻ thành công và thách thức về khí hậu để cộng đồng thêm hiểu biết, hy vọng và sẵn sàng hành động.',
    },
  ];

  return (
    <div className="overflow-hidden">
      <section className="hero-section">
        <div className="hero-aurora" aria-hidden />
        <div className="hero-glow" aria-hidden />
        <div className="container-custom">
          <div className="hero-layout">
            <div className="hero-copy">
              <span className="hero-kicker">{t.hero_welcome}</span>
              <h1 className="hero-title">
                <span>{t.hero_title}</span>
              </h1>
              <p className="hero-subtitle">{t.hero_subtitle}</p>
              <div className="hero-actions">
                <Link href="/features" className="btn btn-primary">
                  ✨ {t.btn_explore}
                </Link>
                <Link href="/about" className="btn btn-secondary">
                  🌍 {t.btn_learn}
                </Link>
              </div>
            </div>

            <div className="hero-panel">
              <h2 className="panel-title">
                {language === 'en'
                  ? 'Why this planet matters'
                  : language === 'ja'
                  ? '地球が大切である理由'
                  : 'Vì sao hành tinh này quan trọng'}
              </h2>
              <ul className="panel-list">
                {highlights.map((item, index) => (
                  <li key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <Counter
                end={stat.value}
                suffix={stat.suffix}
                decimals={stat.suffix === 'B' || stat.suffix === 'M' ? 1 : 0}
              />
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="section-header">
            <h2>
              {language === 'en'
                ? 'Global movements in motion'
                : language === 'ja'
                ? '世界で進むサステナブルな動き'
                : 'Những phong trào toàn cầu đang chuyển mình'}
            </h2>
            <p>
              {language === 'en'
                ? 'Communities everywhere are designing brighter futures with practical, nature-positive ideas.'
                : language === 'ja'
                ? '世界のコミュニティが、自然と共生する実践的なアイデアで明るい未来を描いています。'
                : 'Các cộng đồng khắp nơi đang kiến tạo tương lai tươi sáng bằng những ý tưởng thực tiễn, tích cực với thiên nhiên.'}
            </p>
          </div>

          <div className="initiative-grid">
            {initiatives.map((initiative, index) => (
              <article key={index} className="initiative-card">
                <div className="initiative-icon">{initiative.emoji}</div>
                <h3>{initiative.title}</h3>
                <p>{initiative.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="section-header">
            <h2>
              {language === 'en'
                ? 'Small steps with big impact'
                : language === 'ja'
                ? '日々の小さな一歩が大きな変化に'
                : 'Những bước nhỏ tạo nên thay đổi lớn'}
            </h2>
            <p>
              {language === 'en'
                ? 'Choose one action this week to celebrate the planet where every story begins.'
                : language === 'ja'
                ? '今週は地球を祝うために、ひとつの行動を選んでみませんか。'
                : 'Hãy chọn một hành động trong tuần này để trân trọng hành tinh khởi nguồn của mọi câu chuyện.'}
            </p>
          </div>

          <div className="action-grid">
            {actions.map((action, index) => (
              <div key={index} className="action-card">
                <h3>{action.title}</h3>
                <p>{action.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding cta-section">
        <div className="container-custom cta-panel">
          <div>
            <h2>
              {language === 'en'
                ? 'Ready to build a greener future?'
                : language === 'ja'
                ? 'より良い未来を一緒に築きましょう'
                : 'Sẵn sàng kiến tạo tương lai xanh?'}
            </h2>
            <p>
              {language === 'en'
                ? 'Explore our guides, stories, and community projects to find your starting point today.'
                : language === 'ja'
                ? 'ガイドやストーリー、コミュニティのプロジェクトから、今日できることを見つけてください。'
                : 'Khám phá hướng dẫn, câu chuyện và dự án cộng đồng để tìm bước khởi đầu ngay hôm nay.'}
            </p>
          </div>
          <div className="hero-actions">
            <Link href="/features" className="btn btn-primary">
              🌟 {t.btn_explore}
            </Link>
            <Link href="/about" className="btn btn-secondary">
              📘 {t.btn_learn}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
