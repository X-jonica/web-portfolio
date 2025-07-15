import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coffee, Code, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const opportunities = [
    { key: 'cdi', icon: '💼', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' },
    { key: 'cdd', icon: '📝', color: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300' },
    { key: 'stage', icon: '🎓', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300' },
    { key: 'freelance', icon: '🚀', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' }
  ];

  return (
    <div className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t('aboutTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('aboutDescription')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Section "Pourquoi moi ?" */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-r from-green-50 to-gray-50 dark:from-green-900/20 dark:to-gray-800/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Zap className="text-green-600" size={24} />
                {t('whyMeTitle')}
              </h3>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-6"
              >
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2 italic">
                  {t('whyMeSlogan')}
                </div>
              </motion.div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('whyMeDescription')}
              </p>
            </div>

            {/* Petites stats/infos */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
              >
                <Code className="text-green-600 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">10+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Projets codés</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
              >
                <Coffee className="text-green-600 mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">∞</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Cafés bus</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Section Opportunités */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-r from-gray-50 to-green-50 dark:from-gray-800/20 dark:to-green-900/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Heart className="text-green-600" size={24} />
                {t('opportunitiesTitle')}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {opportunities.map((opportunity, index) => (
                  <motion.div
                    key={opportunity.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`p-4 rounded-xl ${opportunity.color} text-center font-medium`}
                  >
                    <div className="text-2xl mb-2">{opportunity.icon}</div>
                    <div>{t(opportunity.key)}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Localisation */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                📍 {t('location')}
              </h4>
              <div className="text-gray-600 dark:text-gray-300 mb-4">
                Fianarantsoa, Madagascar
              </div>
              <div className="h-40 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.7!2d47.086!3d-21.453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21ecaf6e8c8b12b7%3A0x4f6e5b4d3c2a1b0!2sFianarantsoa%2C%20Madagascar!5e0!3m2!1sfr!2s!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;