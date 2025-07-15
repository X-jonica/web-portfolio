import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coffee } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <div>
            <h3 className="text-2xl font-bold mb-4">John Doe</h3>
            <p className="text-gray-300 mb-4">
              Développeur web junior passionné par la création d'applications modernes et performantes.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </motion.a>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item}`}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-all duration-200"
                  >
                    {t(item)}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 jonicahenintsoa@gmail.com</p>
              <p>📞 +261 34 49 384 03</p>
              <p>📍 Fianarantsoa, Madagascar</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 flex items-center justify-center gap-2"
          >
            {t('madeWith')} 
            <Heart size={16} className="text-red-500" />
            {t('and')}
            <Coffee size={16} className="text-yellow-600" />
            {t('by')} Jonica Henintsoa © 2025
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;