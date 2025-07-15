import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from 'emailjs-com';
import { emailjsConfig } from '../config/email.js';

export const VisitCounter = () => {
  const { t } = useLanguage();
  const [visitCount, setVisitCount] = useState(0);
  const [isNewVisit, setIsNewVisit] = useState(false);

  useEffect(() => {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date().getTime();
    const oneHour = 60 * 60 * 1000; // 1 heure

    if (!lastVisit || now - parseInt(lastVisit) > oneHour) {
      setIsNewVisit(true);
      localStorage.setItem('lastVisit', now.toString());
    }

    const currentCount = parseInt(localStorage.getItem('visitCount') || '0');

    if (isNewVisit) {
      const newCount = currentCount + 1;
      setVisitCount(newCount);
      localStorage.setItem('visitCount', newCount.toString());
      sendVisitNotification(newCount);
    } else {
      setVisitCount(currentCount);
    }
  }, [isNewVisit]);

  const sendVisitNotification = async (count: number) => {
    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          visit_count: count,
          timestamp: new Date().toLocaleString(),
          visitor_info: navigator.userAgent
        },
        emailjsConfig.userId
      );
      console.log('Notification de visite envoyée');
    } catch (error) {
      console.error("Erreur lors de l'envoi de la notification :", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 }}
      className="fixed top-20 right-4 z-40 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center gap-2 text-sm">
        <Eye size={16} className="text-green-600 dark:text-green-400" />
        <span className="font-medium text-gray-700 dark:text-gray-300">
          {visitCount}
        </span>
        <span className="text-gray-500 dark:text-gray-400">
          {visitCount === 1 ? t('visit') : t('visits')}
        </span>
      </div>
    </motion.div>
  );
};
