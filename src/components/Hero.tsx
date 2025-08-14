import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import me from '../../public/images/me.jpg'

const Hero = () => {
   const { t } = useLanguage();

   const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });
      }
   };

   return (
      <div className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               {/* Contenu à gauche */}
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
               >
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.2 }}
                     className="text-green-600 dark:text-green-400 font-medium text-lg"
                  >
                     {t("hello")}
                  </motion.div>

                  <motion.h1
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.4 }}
                     className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                  >
                     HENINTSOA Jonica
                  </motion.h1>

                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.6 }}
                     className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium"
                  >
                     {t("role")}
                  </motion.div>

                  <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.8 }}
                     className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-md"
                  >
                     {t("description")}
                  </motion.p>

                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 1 }}
                     className="flex flex-col sm:flex-row gap-4 pt-4"
                  >
                     <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection("projects")}
                        className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                     >
                        {t("cta")}
                        <ArrowDown size={18} />
                     </motion.button>

                     <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 border-2 border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                     >
                        <Download size={18} />
                        <a
                           href="https://cvdesignr.com/p/689d9cab81e04"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex items-center"
                        >
                           Télécharger CV
                        </a>
                     </motion.button>
                  </motion.div>
               </motion.div>

               {/* Photo à droite */}
               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex justify-center lg:justify-end"
               >
                  <motion.div
                     whileHover={{ scale: 1.05 }}
                     transition={{ duration: 0.3 }}
                     className="relative"
                  >
                     <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                           src={me}
                           alt="photo de jonica henintsoa"
                           className="w-full h-full object-cover"
                        />
                     </div>

                     {/* Effet de bordure animée */}
                     <motion.div
                        animate={{
                           borderRadius: ["20px", "25px", "20px"],
                        }}
                        transition={{
                           duration: 4,
                           repeat: Infinity,
                           ease: "easeInOut",
                        }}
                        className="absolute inset-0 border-4 border-green-400 rounded-2xl"
                     />
                  </motion.div>
               </motion.div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
