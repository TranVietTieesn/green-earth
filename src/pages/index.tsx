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
    <div className="page-shell">
      <section className="hero-v2">
        <div className="hero-v2__background" aria-hidden />
        <div className="hero-v2__glow" aria-hidden />
        <div className="container-custom">
          <div className="hero-v2__grid">
            <div className="hero-v2__copy">
              <span className="hero-v2__kicker">{t.hero_welcome}</span>
              <h1 className="hero-v2__title">{t.hero_title}</h1>
              <p className="hero-v2__lead">{t.hero_subtitle}</p>
              <div className="hero-actions">
                <Link href="/features" className="btn btn-primary">
                  ✨ {t.btn_explore}
                </Link>
                <Link href="/about" className="btn btn-secondary">
                  🌍 {t.btn_learn}
                </Link>
              </div>
              <div className="hero-v2__badges" aria-label={t.hero_panel_title}>
                {initiatives.map((initiative, index) => (
                  <span key={index} className="hero-v2__badge">
                    {initiative.title}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-v2__panel">
              <div className="hero-v2__orb" aria-hidden />
              <div className="hero-v2__card">
                <h2>{t.hero_panel_title}</h2>
                <ul>
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
        </div>
      </section>

      <section className="metric-ribbon" aria-label="Planetary indicators">
        <div className="container-custom metric-ribbon__grid">
          {stats.map((stat, index) => (
            <div key={index} className="metric-card">
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

      <section className="section-padding intro-section">
        <div className="container-custom intro-grid">
          <div className="intro-card intro-card--primary">
            <h2>{t.intro_title}</h2>
            <p>{t.hero_panel_title}</p>
            <div className="intro-points">
              {highlights.map((item, index) => (
                <div key={index} className="intro-point">
                  <span className="intro-point__index">0{index + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="intro-card intro-card--secondary">
            <h3>{t.world_examples_title}</h3>
            <p>{t.initiatives_description}</p>
            <ul className="intro-list">
              {initiatives.map((initiative, index) => (
                <li key={index}>
                  <span aria-hidden>{initiative.emoji}</span>
                  <div>
                    <h4>{initiative.title}</h4>
                    <p>{initiative.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section-padding highlight-section">
        <div className="container-custom">
          <div className="section-header">
            <h2>{t.highlights_title}</h2>
            <p>{t.hero_subtitle}</p>
          </div>
          <div className="highlight-grid">
            {highlights.map((item, index) => (
              <article key={index} className="highlight-card">
                <div className="highlight-card__number">0{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding initiative-section">
        <div className="container-custom">
          <div className="section-header">
            <h2>{t.initiatives_heading}</h2>
            <p>{t.initiatives_description}</p>
          </div>
          <div className="initiative-track">
            {initiatives.map((initiative, index) => (
              <article key={index} className="initiative-card">
                <div className="initiative-card__icon">{initiative.emoji}</div>
                <h3>{initiative.title}</h3>
                <p>{initiative.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding action-section">
        <div className="container-custom">
          <div className="section-header">
            <h2>{t.actions_heading}</h2>
            <p>{t.actions_description}</p>
          </div>
          <div className="action-grid">
            {actions.map((action, index) => (
              <div key={index} className="action-card">
                <span className="action-card__index">{index + 1}</span>
                <div>
                  <h3>{action.title}</h3>
                  <p>{action.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding wisdom-section">
        <div className="container-custom wisdom-panel">
          <div className="wisdom-panel__content">
            <h2>{t.wisdom_title}</h2>
            <blockquote>
              <p>{t.footer_quote}</p>
              <cite>{t.footer_author}</cite>
            </blockquote>
          </div>
          <div className="wisdom-panel__accent" aria-hidden>
            <div className="wisdom-panel__orb" />
          </div>
        </div>
      </section>

      <section className="section-padding cta-section">
        <div className="container-custom cta-panel">
          <div className="cta-panel__copy">
            <h2>{t.cta_title}</h2>
            <p>{t.cta_description}</p>
          </div>
          <div className="cta-panel__actions">
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
