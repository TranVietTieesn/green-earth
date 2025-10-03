import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ja' | 'vi';

interface HighlightTranslation {
  title: string;
  description: string;
}

interface InitiativeTranslation {
  emoji: string;
  title: string;
  description: string;
}

interface ActionTranslation {
  title: string;
  description: string;
}

export interface Translations {
  nav_home: string;
  nav_about: string;
  nav_features: string;
  hero_welcome: string;
  hero_title: string;
  hero_subtitle: string;
  btn_explore: string;
  btn_learn: string;
  stats_age: string;
  stats_ocean: string;
  stats_species: string;
  stats_population: string;
  intro_title: string;
  world_examples_title: string;
  highlights_title: string;
  wisdom_title: string;
  footer_quote: string;
  footer_author: string;
  hero_panel_title: string;
  hero_highlights: HighlightTranslation[];
  initiatives_heading: string;
  initiatives_description: string;
  initiatives: InitiativeTranslation[];
  actions_heading: string;
  actions_description: string;
  actions: ActionTranslation[];
  cta_title: string;
  cta_description: string;
}

const translations: Record<Language, Translations> = {
  en: {
    nav_home: 'Home',
    nav_about: 'About Earth',
    nav_features: 'Features',
    hero_welcome: 'Welcome to',
    hero_title: 'Green Planet',
    hero_subtitle: 'Discover the beauty and mystery of Earth - our shared home',
    btn_explore: 'Explore Now',
    btn_learn: 'Learn More',
    stats_age: 'billion years old',
    stats_ocean: '% ocean coverage',
    stats_species: 'million species',
    stats_population: 'billion people',
    intro_title: 'Earth - The Blue Gem of the Universe',
    world_examples_title: 'Global Earth Protection Initiatives',
    highlights_title: 'Earth\'s Mysteries',
    wisdom_title: 'Natural Philosophy',
    footer_quote: '"We do not inherit the earth from our ancestors; we borrow it from our children"',
    footer_author: '- Native American Proverb',
    hero_panel_title: 'Why this planet matters',
    hero_highlights: [
      {
        title: 'Resilient biomes',
        description:
          'From misty forests to coral cities, Earth balances climates, minerals, and living systems in harmony.',
      },
      {
        title: 'Water in motion',
        description:
          'Rivers, rain, and clouds sustain every community, carrying nutrients from mountain peaks to the sea.',
      },
      {
        title: 'Shared atmosphere',
        description:
          'Oceans and forests craft the air we breathe, reminding us that care for nature is care for one another.',
      },
    ],
    initiatives_heading: 'Global movements in motion',
    initiatives_description:
      'Communities everywhere are designing brighter futures with practical, nature-positive ideas.',
    initiatives: [
      {
        emoji: '💡',
        title: 'Cities turning solar',
        description: 'Neighborhood microgrids light up homes with community-owned energy and new green jobs.',
      },
      {
        emoji: '🌿',
        title: 'Restoring wild spaces',
        description: 'Indigenous-led stewardship revives wetlands, grasslands, and the species that call them home.',
      },
      {
        emoji: '🌊',
        title: 'Cleaning coastal currents',
        description: 'Floating booms capture plastics before they drift offshore, keeping reefs and fisheries thriving.',
      },
    ],
    actions_heading: 'Small steps with big impact',
    actions_description:
      'Choose one action this week to celebrate the planet where every story begins.',
    actions: [
      {
        title: 'Choose reusables first',
        description: 'Carry bottles, utensils, and bags you love to cut single-use plastic from daily routines.',
      },
      {
        title: 'Eat with the seasons',
        description: 'Seasonal produce lowers transport emissions and keeps local growers thriving.',
      },
      {
        title: 'Move mindfully',
        description: 'Walk, cycle, carshare, or ride transit to explore your city with a lighter footprint.',
      },
      {
        title: 'Champion local stories',
        description:
          'Share climate wins and challenges so neighbors feel informed, hopeful, and ready to act.',
      },
    ],
    cta_title: 'Ready to build a greener future?',
    cta_description:
      'Explore our guides, stories, and community projects to find your starting point today.',
  },
  ja: {
    nav_home: 'ホーム',
    nav_about: '地球について',
    nav_features: '特徴',
    hero_welcome: 'ようこそ',
    hero_title: '緑の惑星へ',
    hero_subtitle: '地球の美しさと神秘を発見しよう - 私たちの共通の家',
    btn_explore: '今すぐ探索',
    btn_learn: '詳しく学ぶ',
    stats_age: '億年前に誕生',
    stats_ocean: '% 海洋の割合',
    stats_species: '万種の生物',
    stats_population: '億人の人口',
    intro_title: '地球 - 宇宙の青い宝石',
    world_examples_title: '世界の地球保護の取り組み',
    highlights_title: '地球の神秘',
    wisdom_title: '日本の自然哲学',
    footer_quote: '「地球は私たちから祖先から受け継いだものではなく、子どもたちから借りているものである」',
    footer_author: '- ネイティブアメリカンの格言',
    hero_panel_title: '地球が大切である理由',
    hero_highlights: [
      {
        title: 'たくましい生物圏',
        description: '霧の森からサンゴ礁の街まで、地球は気候や鉱物、生態系の調和を保っています。',
      },
      {
        title: '巡る水',
        description: '川や雨、雲が栄養を運び、山頂から海まであらゆる命を支えています。',
      },
      {
        title: '分かち合う大気',
        description: '海と森が私たちの呼吸する空気をつくり、自然を大切にすることは互いを思いやることだと教えてくれます。',
      },
    ],
    initiatives_heading: '世界で進むサステナブルな動き',
    initiatives_description:
      '世界のコミュニティが、自然と共生する実践的なアイデアで明るい未来を描いています。',
    initiatives: [
      {
        emoji: '💡',
        title: 'ソーラー化が進む都市',
        description: '地域のマイクログリッドが、コミュニティ所有の電力と新しいグリーン雇用で暮らしを照らします。',
      },
      {
        emoji: '🌿',
        title: '野生の空間を再生',
        description: '先住民が主導する管理が湿地や草原、そこに暮らす生き物をよみがえらせています。',
      },
      {
        emoji: '🌊',
        title: '海流を守る清掃',
        description: '沿岸で漂流する前に浮遊ブームがプラスチックを回収し、サンゴ礁と漁場を守ります。',
      },
    ],
    actions_heading: '日々の小さな一歩が大きな変化に',
    actions_description: '今週は地球を祝うために、ひとつの行動を選んでみませんか。',
    actions: [
      {
        title: '繰り返し使えるものを選ぶ',
        description: 'お気に入りのボトルやカトラリー、バッグを持ち歩き、使い捨てプラスチックを減らしましょう。',
      },
      {
        title: '旬を味わう',
        description: '旬の食材は輸送時の排出を減らし、地域の生産者を支えます。',
      },
      {
        title: '地球にやさしい移動',
        description: '歩く・自転車に乗る・シェアする・公共交通を使って、軽やかに街を楽しみましょう。',
      },
      {
        title: '地域の物語を広める',
        description: '気候に関する成功と課題を共有し、地域の人々が希望と行動力を持てるようにしましょう。',
      },
    ],
    cta_title: 'より良い未来を一緒に築きましょう',
    cta_description: 'ガイドやストーリー、コミュニティのプロジェクトから、今日できることを見つけてください。',
  },
  vi: {
    nav_home: 'Trang Chủ',
    nav_about: 'Về Trái Đất',
    nav_features: 'Đặc Điểm',
    hero_welcome: 'Chào Mừng Đến Với',
    hero_title: 'Hành Tinh Xanh',
    hero_subtitle: 'Khám phá vẻ đẹp và sự kỳ diệu của Trái Đất - ngôi nhà chung của chúng ta',
    btn_explore: 'Khám Phá Ngay',
    btn_learn: 'Tìm Hiểu Thêm',
    stats_age: 'tỷ năm tuổi',
    stats_ocean: '% bề mặt là nước',
    stats_species: 'triệu loài sinh vật',
    stats_population: 'tỷ dân số',
    intro_title: 'Trái Đất - Viên Ngọc Xanh Của Vũ Trụ',
    world_examples_title: 'Các Sáng Kiến Bảo Vệ Trái Đất Toàn Cầu',
    highlights_title: 'Những Điều Kỳ Diệu Của Trái Đất',
    wisdom_title: 'Triết Lý Tự Nhiên',
    footer_quote: '"Chúng ta không thừa hưởng trái đất từ tổ tiên mà mượn nó từ con cháu"',
    footer_author: '- Câu ngạn ngữ của người bản địa Mỹ',
    hero_panel_title: 'Vì sao hành tinh này quan trọng',
    hero_highlights: [
      {
        title: 'Các quần xã kiên cường',
        description:
          'Từ rừng sương mù đến những thành phố san hô, Trái Đất cân bằng khí hậu, khoáng chất và hệ sinh thái trong sự hài hòa.',
      },
      {
        title: 'Dòng nước vận hành',
        description:
          'Sông ngòi, mưa và mây nuôi dưỡng mọi cộng đồng, đưa dưỡng chất từ đỉnh núi ra biển cả.',
      },
      {
        title: 'Bầu khí quyển chung',
        description:
          'Đại dương và rừng tạo nên bầu không khí chúng ta hít thở, nhắc nhở rằng bảo vệ thiên nhiên là bảo vệ lẫn nhau.',
      },
    ],
    initiatives_heading: 'Những phong trào toàn cầu đang chuyển mình',
    initiatives_description:
      'Các cộng đồng khắp nơi đang kiến tạo tương lai tươi sáng bằng những ý tưởng thực tiễn, tích cực với thiên nhiên.',
    initiatives: [
      {
        emoji: '💡',
        title: 'Thành phố hướng tới năng lượng mặt trời',
        description: 'Các lưới điện siêu nhỏ cung cấp năng lượng sở hữu cộng đồng và tạo việc làm xanh mới.',
      },
      {
        emoji: '🌿',
        title: 'Phục hồi vùng hoang dã',
        description: 'Sự quản lý của cộng đồng bản địa làm sống lại vùng đất ngập nước, đồng cỏ và những loài sinh sống ở đó.',
      },
      {
        emoji: '🌊',
        title: 'Làm sạch dòng hải lưu ven bờ',
        description: 'Hệ thống chắn nổi thu gom nhựa trước khi trôi ra khơi, bảo vệ rạn san hô và ngư trường.',
      },
    ],
    actions_heading: 'Những bước nhỏ tạo nên thay đổi lớn',
    actions_description: 'Hãy chọn một hành động trong tuần này để trân trọng hành tinh khởi nguồn của mọi câu chuyện.',
    actions: [
      {
        title: 'Ưu tiên đồ tái sử dụng',
        description: 'Mang theo chai nước, dụng cụ và túi yêu thích để giảm nhựa dùng một lần mỗi ngày.',
      },
      {
        title: 'Ăn theo mùa vụ',
        description: 'Nông sản theo mùa giúp giảm phát thải vận chuyển và hỗ trợ nông dân địa phương.',
      },
      {
        title: 'Di chuyển thân thiện',
        description: 'Đi bộ, đạp xe, đi chung xe hoặc dùng phương tiện công cộng để khám phá thành phố một cách bền vững.',
      },
      {
        title: 'Lan tỏa câu chuyện địa phương',
        description: 'Chia sẻ thành công và thách thức về khí hậu để cộng đồng thêm hiểu biết, hy vọng và sẵn sàng hành động.',
      },
    ],
    cta_title: 'Sẵn sàng kiến tạo tương lai xanh?',
    cta_description:
      'Khám phá hướng dẫn, câu chuyện và dự án cộng đồng để tìm bước khởi đầu ngay hôm nay.',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 