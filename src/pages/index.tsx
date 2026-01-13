import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Counter from '@/components/Counter';
import { Sparkles, Globe, Star, BookOpen, Lightbulb, Sprout, Waves } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Lightbulb,
  Sprout,
  Waves,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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
            <motion.div
              className="hero-v2__copy"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="hero-v2__kicker">{t.hero_welcome}</span>
              <h1 className="hero-v2__title">{t.hero_title}</h1>
              <p className="hero-v2__lead">{t.hero_subtitle}</p>
              <div className="hero-actions">
                <Link href="/features" className="btn btn-primary">
                  <Sparkles className="w-5 h-5" />
                  {t.btn_explore}
                </Link>
                <Link href="/about" className="btn btn-secondary">
                  <Globe className="w-5 h-5" />
                  {t.btn_learn}
                </Link>
              </div>
              <div className="hero-v2__badges" aria-label={t.hero_panel_title}>
                {initiatives.map((initiative, index) => (
                  <motion.span
                    key={index}
                    className="hero-v2__badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {initiative.title}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="hero-v2__panel"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      <section className="metric-ribbon" aria-label="Planetary indicators">
        <motion.div
          className="container-custom metric-ribbon__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} className="metric-card" variants={itemVariants}>
              <Counter
                end={stat.value}
                suffix={stat.suffix}
                decimals={stat.suffix === 'B' || stat.suffix === 'M' ? 1 : 0}
              />
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section-padding intro-section">
        <div className="container-custom intro-grid">
          <motion.div
            className="intro-card intro-card--primary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>

          <motion.aside
            className="intro-card intro-card--secondary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>{t.world_examples_title}</h3>
            <p>{t.initiatives_description}</p>
            <ul className="intro-list">
              {initiatives.map((initiative, index) => {
                const IconComponent = iconMap[initiative.icon] || Lightbulb;
                return (
                  <li key={index}>
                    <span aria-hidden className="initiative-icon-wrapper">
                      <IconComponent className="w-6 h-6 text-emerald-500" />
                    </span>
                    <div>
                      <h4>{initiative.title}</h4>
                      <p>{initiative.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.aside>
        </div>
      </section>

      <section className="section-padding highlight-section">
        <div className="container-custom">
          <div className="section-header">
            <h2>{t.highlights_title}</h2>
            <p>{t.hero_subtitle}</p>
          </div>
          <motion.div
            className="highlight-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((item, index) => (
              <motion.article key={index} className="highlight-card" variants={itemVariants}>
                <div className="highlight-card__number">0{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding initiative-section">
        <div className="container-custom">
          <div className="section-header">
            <h2>{t.initiatives_heading}</h2>
            <p>{t.initiatives_description}</p>
          </div>
          <motion.div
            className="initiative-track"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {initiatives.map((initiative, index) => {
              const IconComponent = iconMap[initiative.icon] || Lightbulb;
              return (
                <motion.article key={index} className="initiative-card" variants={itemVariants}>
                  <div className="initiative-card__icon">
                    <IconComponent className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3>{initiative.title}</h3>
                  <p>{initiative.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-padding action-section">
        <div className="container-custom">
          <div className="section-header">
            <h2>{t.actions_heading}</h2>
            <p>{t.actions_description}</p>
          </div>
          <motion.div
            className="action-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {actions.map((action, index) => (
              <motion.div key={index} className="action-card" variants={itemVariants}>
                <span className="action-card__index">{index + 1}</span>
                <div>
                  <h3>{action.title}</h3>
                  <p>{action.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding wisdom-section">
        <div className="container-custom wisdom-panel">
          <motion.div
            className="wisdom-panel__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>{t.wisdom_title}</h2>
            <blockquote>
              <p>{t.footer_quote}</p>
              <cite>{t.footer_author}</cite>
            </blockquote>
          </motion.div>
          <div className="wisdom-panel__accent" aria-hidden>
            <div className="wisdom-panel__orb" />
          </div>
        </div>
      </section>

      <section className="section-padding cta-section">
        <div className="container-custom cta-panel">
          <motion.div
            className="cta-panel__copy"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>{t.cta_title}</h2>
            <p>{t.cta_description}</p>
          </motion.div>
          <motion.div
            className="cta-panel__actions"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/features" className="btn btn-primary">
              <Star className="w-5 h-5" />
              {t.btn_explore}
            </Link>
            <Link href="/about" className="btn btn-secondary">
              <BookOpen className="w-5 h-5" />
              {t.btn_learn}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
