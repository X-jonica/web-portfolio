import React from "react";
import { motion, useInView } from "framer-motion";

const SkillsSection: React.FC = () => {
   const ref = React.useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });

   const skillCategories = [
      {
         title: "Frontend",
         color: "from-blue-500 to-cyan-500",
         skills: [
            { name: "React.js", level: 75 },
            { name: "Vue.js", level: 50 },
            { name: "TypeScript", level: 65 },
            { name: "Angular.js", level: 20 },
            { name: "Tailwind CSS", level: 77 },
            { name: "Framer Motion", level: 55 },
         ],
      },
      {
         title: "Backend",
         color: "from-green-500 to-emerald-500",
         skills: [
            { name: "Node.js", level: 80 },
            { name: "Express.js", level: 80 },
            { name: "PostgreSQL", level: 70 },
            { name: "MongoDB", level: 70 },
            { name: "REST APIs", level: 80 },
            { name: "Flask", level: 60 },
         ],
      },
      {
         title: "Outils & DevOps",
         color: "from-purple-500 to-pink-500",
         skills: [
            { name: "Git & GitHub", level: 85 },
            { name: "Docker", level: 30 },
            { name: "Vite", level: 65 },
            { name: "ESLint/Prettier", level: 80 },
            { name: "Jenkins", level: 40 },
            { name: "CI/CD", level: 65 },
         ],
      },
   ];

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.2,
         },
      },
   };

   const cardVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.6,
            ease: "easeOut",
         },
      },
   };

   return (
      <section
         id="skills"
         className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
      >
         {/* Background Image développeur */}
         <div className="absolute inset-0 opacity-30">
            <div
               className="absolute inset-0 bg-cover bg-center"
               style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80')`,
               }}
            ></div>
         </div>

         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6 }}
               className="text-center mb-16"
            >
               <h2 className="text-4xl md:text-5xl font-space font-bold text-gray-900 dark:text-white mb-4">
                  Mes
                  <span className="bg-gradient-to-r from-primary-500 to-accent-stone bg-clip-text text-transparent mx-3">
                     Compétences
                  </span>
               </h2>
               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-inter">
                  Une expertise technique diversifiée pour créer des solutions
                  web complètes et performantes
               </p>
            </motion.div>

            <motion.div
               ref={ref}
               variants={containerVariants}
               initial="hidden"
               animate={isInView ? "visible" : "hidden"}
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
               {skillCategories.map((category, categoryIndex) => (
                  <motion.div
                     key={categoryIndex}
                     variants={cardVariants}
                     className="group"
                  >
                     <div className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-border hover:border-primary-300 dark:hover:border-primary-600">
                        {/* Category Header */}
                        <div className="mb-6">
                           <div
                              className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                           >
                              <div className="w-full h-full bg-white rounded-lg"></div>
                           </div>
                           <h3 className="text-2xl font-space font-semibold text-gray-900 dark:text-white">
                              {category.title}
                           </h3>
                        </div>

                        {/* Skills List */}
                        <div className="space-y-4">
                           {category.skills.map((skill, skillIndex) => (
                              <div key={skillIndex} className="space-y-2">
                                 <div className="flex justify-between items-center">
                                    <span className="text-gray-700 dark:text-gray-300 font-inter font-medium">
                                       {skill.name}
                                    </span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                       {skill.level}%
                                    </span>
                                 </div>
                                 <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
                                    <motion.div
                                       initial={{ width: 0 }}
                                       animate={
                                          isInView
                                             ? {
                                                  width: `${skill.level}%`,
                                               }
                                             : {}
                                       }
                                       transition={{
                                          duration: 1,
                                          delay:
                                             categoryIndex * 0.2 +
                                             skillIndex * 0.1,
                                       }}
                                       className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                                    >
                                       <div className="absolute right-0 top-0 w-1 h-full bg-white/30 rounded-full"></div>
                                    </motion.div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </motion.div>
               ))}
            </motion.div>

            {/* Skills Cloud */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6, delay: 0.8 }}
               className="mt-16 text-center"
            >
               <h3 className="text-2xl font-space font-semibold text-gray-900 dark:text-white mb-8">
                  Technologies expérimentées
               </h3>
               <div className="flex flex-wrap justify-center gap-3">
                  {[
                     "HTML5",
                     "CSS3",
                     "ES6",
                     "React.js",
                     "Angular.js",
                     "Bootstrap",
                     "Tailwind CSS",
                     "JAVA",
                     "Python",
                     "Flask",
                     "PHP",
                     "render",
                     "Vue.js",
                     "PgAdmin",
                     "RestAPI",
                     "Firebase",
                  ].map((tech, index) => (
                     <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                           duration: 0.4,
                           delay: 1 + index * 0.1,
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2  from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 text-primary-500 dark:text-primary-300 rounded text-medium font-medium cursor-default border border-primary-200 dark:border-primary-700 hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-200"
                     >
                        {tech}
                     </motion.span>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default SkillsSection;
