import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import cafe_vitrine from '../../public/images/cafe_vitrine.png'
import pandemioTech from '../../public/images/pandemioTech.jpg'
import soundWave from '../../public/images/SoundWave.png'
import technoWeb from '../../public/images/technoweb.png'
import projetPage from '../../public/images/projetPage.png'
import monPortfolio from '../../public/images/mon_portfolio.png'
import todo from '../../public/images/Todo_list.png'

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Landing page",
      description:
        "Une landing page réalisée en HTML et CSS pour mettre en valeur les produits d’un café. Design responsive, projet en cours d’amélioration.",
      image: cafe_vitrine,
      tech: ["HTML", "CSS"],
      github: "https://github.com/X-jonica/web_cafe_vitrine",
      live: "https://x-jonica.github.io/web_cafe_vitrine/",
    },
    {
      title: "Mini Todo List",
      description:
        "Cette application est une simple todo list réalisée en HTML, CSS et JavaScript. Elle a été conçue dans le but de réviser les bases du DOM, des événements, du stockage local et de la manipulation dynamique d'éléments HTML.",
      image: todo,
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/X-jonica/static-to-do",
      live: "https://x-jonica.github.io/static-to-do/",
    },
    {
      title: "Plateforme de gestion des épidémies",
      description:
        "Une plateforme conçu par notre equipe,  gestion des épidémies mondiales, exploitant Big Data et IA pour la visualisation, la prédiction et la recherche cartographique.",
      image: pandemioTech,
      tech: ["React", "Tailwind CSS", "Exress.js", "Python", "chatgpt"],
      github: "https://github.com/IJwesley601/EMIHACK-T",
      live: "#",
    },
    {
      title: "Application de reconnaissance musicale",
      description:
        "Application web de recherche musicale intégrant l’IA YAMNet pour analyser le contenu sonore d’un fichier audio. En collaboration avec Judio, Faniry, Madone et Dhelys.",
      image: soundWave,
      tech: [
        "React",
        "API REST",
        "Flask",
        "AUDD",
        "JWT",
        "Neon.tech",
        "chatgpt",
      ],
      github: "https://github.com/X-jonica/audio-python",
      live: "https://audio-python-beta.vercel.app/",
    },
    {
      title: "Mini-application E-commerce",
      description:
        "Une petite application e-commerce développée avec Vue.js et Node.js, incluant une  authentification, la consultation des produits, et le panier.",
      image: technoWeb,
      tech: [
        "Vue.js",
        "Express",
        "Neon.tech",
        "JWT",
        "postgreSQL",
        "render.com",
        "chatgpt",
      ],
      github: "https://github.com/X-jonica/frontend-technoweb-avance",
      live: "https://techno-web-avance.vercel.app/",
    },
    {
      title: "Application de gestion de projet",
      description:
        "Application permettant aux utilisateurs de gérer leurs projets informatique avec des fonctionnalités de trie, de suivis et organisation.",
      image: projetPage,
      tech: ["React", "JAVA EE", "Wildfly 27.0.0", "postgreSQL", "chatgpt"],
      github: "https://github.com/X-jonica/web-project-management",
      live: "https://github.com/X-jonica/web-project-management",
    },
    {
      title: "Mon Portfolio",
      description:
        "Un portfolio interactif présentant des animations avancées et une expérience utilisateur immersive.",
      image: monPortfolio,
      tech: ["React", "Tailwind css", "bolt.new", "EmailJS", "deepseek"],
      github: "https://github.com/X-jonica/web-portfolio",
      live: "https://mon-portfolio-beta-two.vercel.app/",
    },
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
            {t('projectsTitle')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    {t('viewProject')}
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  >
                    <Github size={16} />
                    {t('viewCode')}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;