import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('frontend'),
      icon: '🎨',
      skills: [
        { name: 'React', level: 70, color: 'bg-blue-500' },
        { name: 'Vue', level: 80, color: 'bg-green-500' },
        { name: 'Angular', level: 30, color: 'bg-red-500' },
        { name: 'TypeScript', level: 50, color: 'bg-blue-600' },
        { name: 'Tailwind CSS', level: 70, color: 'bg-cyan-500' },
        { name: 'HTML/CSS', level: 90, color: 'bg-orange-500' },
        { name: 'JavaScript', level: 78, color: 'bg-yellow-500' }
      ]
    },
    {
      title: t('backend'),
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 70, color: 'bg-green-600' },
        { name: 'Express', level: 75, color: 'bg-gray-600' },
        { name: 'Laravel', level: 40, color: 'bg-red-600' },
        { name: 'Python', level: 50, color: 'bg-blue-600' },
        { name: 'JAVA', level: 40, color: 'bg-orange-600' },
        { name: 'MongoDB', level: 40, color: 'bg-green-500' },
        { name: 'API REST', level: 75, color: 'bg-indigo-500' }
      ]
    },
    {
      title: t('tools'),
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 95, color: 'bg-red-500' },
        { name: 'GitHub', level: 70, color: 'bg-gray-500' },
        { name: 'VS Code', level: 95, color: 'bg-blue-500' },
        { name: 'postman', level: 95, color: 'bg-red-500' },
        { name: 'Figma', level: 70, color: 'bg-purple-500' },
        { name: 'Docker', level: 30, color: 'bg-blue-500' },
        { name: 'Vite', level: 80, color: 'bg-yellow-600' }
      ]
    }
  ];

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t('skillsTitle')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;