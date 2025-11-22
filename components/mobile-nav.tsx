"use client";

import { useState, useEffect } from "react";
import { Home, FolderGit2, Code2, FileText, Mail } from "lucide-react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
    { name: "Accueil", href: "#hero", icon: Home },
    { name: "Projets", href: "#projects", icon: FolderGit2 },
    { name: "Compétences", href: "#skills", icon: Code2 },
    { name: "CV", href: "#cv", icon: FileText },
    { name: "Contact", href: "#contact", icon: Mail },
];

export function MobileNav() {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            const sections = NAV_ITEMS.map((item) =>
                item.href.replace("#", "")
            );

            // Trouve la section active en fonction du scroll
            const currentSection = sections.find((section) => {
                const element = document.getElementById(section);
                if (!element) return false;

                const rect = element.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        // Écoute le scroll
        window.addEventListener("scroll", handleScroll);

        // Vérifie aussi au chargement initial
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            // Met à jour immédiatement la section active
            setActiveSection(href.replace("#", ""));
        }
    };

    return (
        <motion.nav
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t"
        >
            <div className="flex justify-around items-center h-16 px-2">
                {NAV_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const sectionId = item.href.replace("#", "");
                    const isActive = activeSection === sectionId;

                    return (
                        <button
                            key={item.name}
                            onClick={() => handleClick(item.href)}
                            className="flex flex-col items-center justify-center gap-1 flex-1 h-full relative min-w-0"
                            aria-label={item.name}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-primary/10 rounded-lg"
                                    transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30,
                                    }}
                                />
                            )}
                            <Icon
                                className={`w-5 h-5 relative z-10 transition-colors ${
                                    isActive
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                }`}
                            />
                            <span
                                className={`text-xs relative z-10 transition-colors truncate max-w-[70px] ${
                                    isActive
                                        ? "text-primary font-medium"
                                        : "text-muted-foreground"
                                }`}
                            >
                                {item.name}
                            </span>
                        </button>
                    );
                })}
            </div>
        </motion.nav>
    );
}
