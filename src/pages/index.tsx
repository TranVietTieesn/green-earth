import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Counter from '@/components/Counter';

export default function Home() {
  const { t } = useLanguage();

  const stats = [
    { value: 4.5, suffix: 'B', label: t.stats_age },
    { value: 71, suffix: '%', label: t.stats_ocean },
    { value: 8.7, suffix: 'M', label: t.stats_species },
    { value: 8.0, suffix: 'B', label: t.stats_population },
  ];

  const highlights = t.hero_highlights;
  const initiatives = t.initiatives;
  const actions = t.actions;

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
              <h2 className="panel-title">{t.hero_panel_title}</h2>
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
            <h2>{t.initiatives_heading}</h2>
            <p>{t.initiatives_description}</p>
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
            <h2>{t.actions_heading}</h2>
            <p>{t.actions_description}</p>
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
            <h2>{t.cta_title}</h2>
            <p>{t.cta_description}</p>
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
