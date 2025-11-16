'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function CodingCounter() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = SITE_CONFIG.codingHours / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCount(Math.min(currentStep * increment, SITE_CONFIG.codingHours));
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('coding-counter');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      id="coding-counter"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="fixed top-20 right-4 md:right-8 z-40 hidden lg:block"
    >
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 backdrop-blur-sm border border-primary/20 shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Code2 className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
