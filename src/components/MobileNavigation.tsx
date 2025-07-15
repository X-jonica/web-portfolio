import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code, FolderOpen, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface MobileNavigationProps {
  activeSection: string;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ activeSection }) => {
  const { t } = useLanguage();

  const navItems = [
    { id: 'home', label: t('home'), icon: Home },
    { id: 'about', label: t('about'), icon: User },
    { id: 'skills', label: t('skills'), icon: Code },
    { id: 'projects', label: t('projects'), icon: FolderOpen },
    { id: 'contact', label: t('contact'), icon: Mail }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 md:hidden"
    >
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
            >
              <Icon size={20} />
              <span className="text-xs mt-1">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeMobileSection"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 dark:bg-green-400"
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default MobileNavigation;