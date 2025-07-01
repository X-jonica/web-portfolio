import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react';
import soundwave from "/images/SoundWave.png";
import portfolio from "/images/portfolio_update.png";
import pandemioTech from "/images/pandemioTech.jpg";
import projet from "/images/projetPage.png";
import technoweb from "/images/technoweb.png";

const ProjectsSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Plateforme de gestion des épidémies',
      description: 'Une plateforme conçu par notre equipe,  gestion des épidémies mondiales, exploitant Big Data et IA pour la visualisation, la prédiction et la recherche cartographique.',
      image: pandemioTech,
      tags: ['React', 'Node.js', 'Tailwind CSS', 'MongoDB'],
      category: 'BigData et IA',
      icon: Globe,
      githubUrl: 'https://github.com/IJwesley601/EMIHACK-T.git',
      liveUrl: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Application de reconnaissance musicale',
      description: 'Application web de recherche musicale intégrant l’IA YAMNet pour analyser le contenu sonore d’un fichier audio. En collaboration avec Judio, Faniry, Madone et Dhelys.',
      image: soundwave,
      tags: ['React.js', 'Neon.tech', 'Flask', 'YEMNET'],
      category: 'IA',
      icon: Smartphone,
      githubUrl: 'https://github.com/X-jonica/audio-python',
      liveUrl: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Petite application E-commerce',
      description: 'Une petite application e-commerce développée avec Vue.js et Node.js, incluant une  authentification, la consultation des produits, et le panier.',
      image: technoweb,
      tags: ['Vue.js', 'Express.js', 'Tailwind', 'Postgres'],
      category: 'Full-stack',
      icon: Globe,
      githubUrl: 'https://github.com/X-jonica/frontend-technoweb-avance',
      liveUrl: 'https://techno-web-avance.vercel.app/',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Application de gestion de projet',
      description: 'Application permettant aux utilisateurs de gérer leurs projets informatique avec des fonctionnalités de trie, de suivis et organisation.',
      image: projet,
      tags: ['React.js', 'JAVA EE', 'Tailwind CSS', 'Postgres', 'Wildfly27'],
      category: 'Full-stack',
      icon: Globe,
      githubUrl: 'https://github.com/X-jonica/web-project-management',
      liveUrl: 'https://github.com/X-jonica/web-project-management',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Mon Portfolio',
      description: 'Un portfolio interactif présentant des animations avancées et une expérience utilisateur immersive.',
      image: portfolio,
      tags: ['React.js', 'Tailwind CSS', 'EmailJS'],
      category: 'Portfolio',
      icon: Code,
      githubUrl: 'https://github.com/X-jonica/404-repo',
      liveUrl: '#',
      color: 'from-emerald-500 to-teal-500'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary-500/10 to-accent-violet/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-accent-cyan/10 to-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold text-gray-900 dark:text-white mb-4">
            Mes <span className="bg-gradient-to-r from-primary-500 to-accent-violet bg-clip-text text-transparent">Projets</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-inter">
            Une sélection de projets qui démontrent ma passion pour l'innovation et l'excellence technique
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              <div className="bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-dark-border hover:border-primary-300 dark:hover:border-primary-600">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Holographic Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-sm font-medium rounded-full flex items-center space-x-1`}>
                      <project.icon className="w-4 h-4" />
                      <span>{project.category}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.githubUrl}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-space font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 font-inter leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.1 + tagIndex * 0.05 }}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 transition-colors cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            target= "_blank"
            className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-violet hover:from-primary-600 hover:to-accent-violet text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            href='https://github.com/X-jonica'
          >
            Voir tous les projets
            <Github className="inline-block ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;