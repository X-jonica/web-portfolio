import React from "react";
import { User, Code, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const container = {
   hidden: { opacity: 0 },
   show: {
      opacity: 1,
      transition: {
         staggerChildren: 0.2,
      },
   },
};

const item = {
   hidden: { opacity: 0, y: 20 },
   show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
   return (
      <section id="about" className="py-20">
         <div className="container">
            <motion.h2
               className="section-heading text-center"
               initial={{ opacity: 0, y: -20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
            >
               À propos de moi
            </motion.h2>

            <motion.div
               className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10"
               variants={container}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
            >
               <motion.div
                  className="bg-card rounded-lg p-6 shadow-md border border-border hover:border-primary/50 transition-all"
                  variants={item}
               >
                  <User className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Qui suis-je</h3>
                  <p className="text-foreground/70">
                     Développeur web junior passionné, ayant déjà réalisé
                     plusieurs projets et constamment en quête d’apprentissage
                     et de progression. J’aime relever des défis techniques,
                     explorer de nouvelles technologies et affiner mes
                     compétences pour concevoir des applications modernes et
                     performantes. Mon objectif est de toujours évoluer et
                     apporter des solutions efficaces.{" "}
                  </p>
               </motion.div>

               <motion.div
                  className="bg-card rounded-lg p-6 shadow-md border border-border hover:border-primary/50 transition-all"
                  variants={item}
               >
                  <Code className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Ce que je fais</h3>
                  <p className="text-foreground/70">
                     Je développe des applications web dynamiques et responsives
                     en exploitant des technologies modernes. Frontend : React,
                     Vue.js, Angular avec TypeScript et Tailwind CSS pour des
                     interfaces élégantes et intuitives. Backend : Node.js,
                     Express avec MySQL et PostgreSQL pour des API performantes
                     et une gestion efficace des données.
                  </p>
               </motion.div>

               <motion.div
                  className="bg-card rounded-lg p-6 shadow-md border border-border hover:border-primary/50 transition-all"
                  variants={item}
               >
                  <FileText className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Mon parcours</h3>
                  <p className="text-foreground/70">
                     Titulaire d’une licence en informatique, parcours
                     Développement d’Application Internet-Intranet, et
                     actuellement en Master 1 en Modélisation et Ingénierie
                     Informatique, j’ai mené divers défis et projets
                     pédagogiques qui ont renforcé mes compétences en
                     développement web. Mes stages en tant que développeur m’ont
                     permis d’améliorer ma maîtrise des technologies et
                     d’approfondir ma compréhension des bonnes pratiques du
                     secteur.
                  </p>
               </motion.div>
            </motion.div>

            <motion.div
               className="mt-12 text-center space-x-4"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.6, duration: 0.5 }}
            >
               <Button variant="outline" asChild>
                  <a
                     href="/CV_Jonica_Henintsoa_maj.pdf"
                     download="CV_Jonica_Henintsoa.pdf"
                  >
                     <FileText className="mr-2 h-4 w-4" /> Télécharger mon CV
                  </a>
               </Button>

               <Button asChild>
                  <a
                     href="https://cvdesignr.com/p/R1on5ZzXKZ0EyMr"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <FileText className="mr-2 h-4 w-4" /> Voir mon CV en ligne
                  </a>
               </Button>
            </motion.div>
         </div>
      </section>
   );
};

export default AboutSection;
