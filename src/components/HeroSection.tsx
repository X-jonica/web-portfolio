import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import image_me from "@/assets/image.jpg";

const HeroSection = () => {
   return (
      <section id="hero" className="min-h-screen pt-16 flex items-center">
         <div className="container flex flex-col-reverse lg:flex-row items-center gap-12">
            <motion.div
               className="flex flex-col gap-6 lg:w-1/2"
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
            >
               <motion.p
                  className="text-primary font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
               >
                  Développeur Web Fullstack
               </motion.p>
               <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
               >
                  Bonjour, je suis{" "}
                  <span className="text-gradient">Jonica Henintsoa</span>
               </motion.h1>
               <motion.p
                  className="text-foreground/70 text-lg md:text-xl lg:pr-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
               >
                  Je conçois et développe des applications web modernes avec
                  passion, en utilisant les technologies les plus récentes pour
                  créer des expériences utilisateur exceptionnelles.
               </motion.p>
               <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
               >
                  <Button asChild>
                     <a href="#projects">
                        Voir mes projets <ArrowRight className="ml-2 h-4 w-4" />
                     </a>
                  </Button>
                  <Button variant="outline" asChild>
                     <a href="#contact">Me contacter</a>
                  </Button>
               </motion.div>
            </motion.div>

            <motion.div
               className="lg:w-1/2 flex justify-center lg:justify-end"
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{
                  duration: 0.8,
                  ease: [0, 0.71, 0.2, 1.01],
               }}
            >
               <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-full border-4 border-primary/20">
                  <img
                     src={image_me}
                     alt="Profile"
                     className="w-full h-full object-cover"
                  />
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default HeroSection;
