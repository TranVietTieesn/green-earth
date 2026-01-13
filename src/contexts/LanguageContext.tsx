import React, { createContext, useContext, useState, useEffect } from 'react';

import en from '@/lib/i18n/en.json';
import vi from '@/lib/i18n/vi.json';
import ja from '@/lib/i18n/ja.json';

export type Language = 'en' | 'ja' | 'vi';

interface HighlightTranslation {
  title: string;
  description: string;
}

interface InitiativeTranslation {
  icon: string;
  title: string;
  description: string;
}

interface ActionTranslation {
  title: string;
  description: string;
}

interface FactTranslation {
  icon: string;
  title: string;
  value: string;
  unit: string;
  description: string;
}

interface LayerTranslation {
  name: string;
  thickness: string;
  color: string;
  description: string;
}

interface TimelineTranslation {
  period: string;
  event: string;
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
  about_hero_subtitle: string;
  about_facts_title: string;
  about_structure_title: string;
  about_history_title: string;
  about_cta_title: string;
  about_cta_description: string;
  facts: FactTranslation[];
  layers: LayerTranslation[];
  timeline: TimelineTranslation[];
  core_label: string;
}

const translations: Record<Language, Translations> = {
  en: en as Translations,
  vi: vi as Translations,
  ja: ja as Translations,
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