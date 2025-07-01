import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/X-jonica', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jonica-henintsoa-96a198357/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/jonicahenintsoa', label: 'Twitter' },
    { icon: Mail, href: '#contact', label: 'Contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <motion.button
              onClick={scrollToTop}
              className="inline-block font-space font-bold text-2xl bg-gradient-to-r from-primary-500 to-accent-violet bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
              whileHover={{ y: -2 }}
            >
              Portfolio
            </motion.button>
            <p className="mt-2 text-gray-600 dark:text-gray-400 font-inter">
              Développeur Web Full-Stack
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 font-inter">
              Passionné par l'innovation et l'excellence technique
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-space font-semibold text-gray-900 dark:text-white mb-4">
              Navigation
            </h3>
            <div className="space-y-2">
              {['Accueil', 'Compétences', 'Projets', 'Contact'].map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 font-inter"
                  whileHover={{ x: 4 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="font-space font-semibold text-gray-900 dark:text-white mb-4">
              Me suivre
            </h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-2 bg-gray-100 dark:bg-dark-card hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-600 dark:text-gray-400 font-inter text-sm flex items-center"
            >
              © {currentYear} Portfolio. Fait avec
              <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
              par un développeur passionné.
            </motion.p>
            
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-500 font-inter">
              <span>Open to Work</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;