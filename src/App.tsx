import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import { LanguageProvider } from "./contexts/LanguageContext";
import { VisitCounter } from "./components/VisitCounter";

function App() {
   const [activeSection, setActiveSection] = useState("home");

   useEffect(() => {
      const handleScroll = () => {
         const sections = ["home", "about", "skills", "projects", "contact"];
         const scrollPosition = window.scrollY + 100;

         for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
               const offsetTop = element.offsetTop;
               const offsetBottom = offsetTop + element.offsetHeight;

               if (
                  scrollPosition >= offsetTop &&
                  scrollPosition < offsetBottom
               ) {
                  setActiveSection(section);
                  break;
               }
            }
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <LanguageProvider>
         <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navigation activeSection={activeSection} />
            <VisitCounter />

            <main>
               <section id="home">
                  <Hero />
               </section>

               <section id="about">
                  <About />
               </section>

               <section id="skills">
                  <Skills />
               </section>

               <section id="projects">
                  <Projects />
               </section>

               <section id="contact">
                  <Contact />
               </section>
            </main>

            <Footer />
            <MobileNavigation activeSection={activeSection} />
         </div>
      </LanguageProvider>
   );
}

export default App;
