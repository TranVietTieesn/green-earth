'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ja' | 'vi';

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
    footer_author: '- Native American Proverb'
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
    footer_author: '- ネイティブアメリカンの格言'
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
    footer_author: '- Câu ngạn ngữ của người bản địa Mỹ'
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