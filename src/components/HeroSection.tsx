import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";

const HeroSection: React.FC = () => {
   const [displayText, setDisplayText] = useState("");
   const fullText = "<Développeur Web Full-Stack />";

   useEffect(() => {
      let index = 0;
      const timer = setInterval(() => {
         setDisplayText(fullText.slice(0, index));
         index++;
         if (index > fullText.length) {
            clearInterval(timer);
         }
      }, 100);

      return () => clearInterval(timer);
   }, []);

   const scrollToProjects = () => {
      const element = document.querySelector("#projects");
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });
      }
   };

   const socialLinks = [
      { icon: Github, href: "https://github.com/X-jonica", label: "GitHub" },
      {
         icon: Linkedin,
         href: "https://www.linkedin.com/in/jonica-henintsoa-96a198357/",
         label: "LinkedIn",
      },
      { icon: Mail, href: "#contact", label: "Contact" },
   ];

   return (
      <section
         id="home"
         className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-dark-bg dark:via-gray-900 dark:to-dark-bg"
      >
         {/* Animated Background */}
         <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
            <div
               className="absolute top-40 right-20 w-72 h-72 bg-accent-violet rounded-full mix-blend-multiply filter blur-xl animate-float"
               style={{ animationDelay: "2s" }}
            ></div>
            <div
               className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent-cyan rounded-full mix-blend-multiply filter blur-xl animate-float"
               style={{ animationDelay: "4s" }}
            ></div>
         </div>

         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-screen pt-16">
            <div className="text-center">
               <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6"
               >
                  <h2 className="text-3xl md:text-4xl font-space font-bold text-gray-800 dark:text-gray-200">
                     <span className="bg-gradient-to-r from-primary-500 to-accent-violet bg-clip-text text-transparent">
                        Jonica Henintsoa
                     </span>
                  </h2>
               </motion.div>

               {/* Status Badge */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-8"
               >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                  Open to Work
               </motion.div>

               {/* Main Title */}
               <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-5xl md:text-7xl font-space font-bold text-gray-900 dark:text-white mb-6"
               >
                  <span className="bg-gradient-to-r from-primary-500 via-accent-violet to-accent-cyan bg-clip-text text-transparent">
                     {displayText}
                  </span>
                  <motion.span
                     animate={{ opacity: [1, 0] }}
                     transition={{ repeat: Infinity, duration: 1 }}
                     className="text-primary-500"
                  >
                     |
                  </motion.span>
               </motion.h1>

               {/* Subtitle */}
               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto font-inter"
               >
                  Passionné par la création d'expériences web modernes et
                  performantes. Spécialisé en React, Node.js et technologies
                  émergentes.
               </motion.p>

               {/* CTA Buttons */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
               >
                  <motion.button
                     onClick={scrollToProjects}
                     className="group px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
                     whileHover={{ y: -2 }}
                     whileTap={{ y: 0 }}
                  >
                     Voir mes projets
                     <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  </motion.button>

                  <motion.button
                     className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 hover:border-primary-500 text-gray-700 dark:text-gray-300 hover:text-primary-500 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
                     whileHover={{ y: -2 }}
                     whileTap={{ y: 0 }}
                  >
                     <a
                        href="https://cvdesignr.com/p/eEyZKzRepOOOo6A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                     >
                        <Download className="inline-block mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        Télécharger CV
                     </a>
                  </motion.button>
               </motion.div>

               {/* Social Links */}
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="flex justify-center space-x-6"
               >
                  {socialLinks.map((social, index) => (
                     <motion.a
                        key={index}
                        href={social.href}
                        {...(social.href.startsWith("http") && {
                           target: "_blank",
                           rel: "noopener noreferrer",
                        })}
                        className="p-3 bg-white/10 dark:bg-dark-card/50 backdrop-blur-sm rounded-xl hover:bg-white/20 dark:hover:bg-dark-card/70 transition-all duration-300 group"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        title={social.label}
                     >
                        <social.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-500 transition-colors" />
                     </motion.a>
                  ))}
               </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1.5 }}
               className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
               <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
               >
                  <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
               </motion.div>
            </motion.div>
         </div>
      </section>
   );
};

export default HeroSection;
