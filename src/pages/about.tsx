import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Clock, Thermometer, Mountain, Waves } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Clock,
  Thermometer,
  Mountain,
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  const { t } = useLanguage();

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
              className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-emerald-400 to-sky-500 rounded-full flex items-center justify-center shadow-2xl"
            >
              <span className="text-5xl">🌍</span>
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
              {t.about_hero_subtitle}
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
            {t.about_facts_title}
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t.facts.map((fact, index) => {
              const IconComponent = iconMap[fact.icon] || Clock;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card text-center group"
                >
                  <div className="bg-gradient-to-br from-emerald-500 to-sky-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold mb-2 text-slate-700">{fact.title}</h3>
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {fact.value}<span className="text-lg text-slate-500">{fact.unit}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{fact.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
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
            {t.about_structure_title}
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
                  {t.core_label}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {t.layers.map((layer, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-4 h-4 rounded-full ${layer.color} mt-1.5 flex-shrink-0`}></div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{layer.name}</h3>
                    <p className="text-emerald-600 font-medium mb-2">{layer.thickness}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{layer.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Earth's Timeline */}
      <section className="section-padding bg-gradient-to-br from-emerald-50 to-sky-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient"
          >
            {t.about_history_title}
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-emerald-300 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {t.timeline.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-emerald-500 rounded-full transform md:-translate-x-1/2 z-10"></div>

                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="card">
                      <h3 className="font-bold text-emerald-600 mb-2">{event.period}</h3>
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
              {t.about_cta_title}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t.about_cta_description}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}