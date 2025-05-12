import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import project from "/images/projetPage.png";
import portfolio from "/images/portfolio.png";
import pandemioTech from "/images/pandemioTech.jpg";

const projects = [
    {
        title: "Plateforme de gestion des épidémies",
        description:
            "Une plateforme conçu par notre equipe,  gestion des épidémies mondiales, exploitant Big Data et IA pour la visualisation, la prédiction et la recherche cartographique.",
        image: pandemioTech,
        technologies: ["React", "Node.js", "MongoDB", "Tailwind css"],
        liveUrl: "#",
        githubUrl: "https://github.com/IJwesley601/EMIHACK-T.git",
    },
    {
        title: "Application de Gestion de Projet",
        description:
            "Application permettant aux utilisateurs de gérer leurs projets informatique avec des fonctionnalités de trie, de suivis et d'organisation",
        image: project,
        technologies: [
            "React.js",
            "PostgreSQL",
            "Tailwind CSS",
            "JAVA EE",
            "wildfly server",
        ],
        liveUrl: "https://github.com/X-jonica/project-management.git",
        githubUrl: "https://github.com/X-jonica/project-management.git",
    },
    {
        title: "Portfolio Créatif",
        description:
            "Un portfolio interactif présentant des animations avancées et une expérience utilisateur immersive",
        image: portfolio,
        technologies: ["React", "TypeScript", "Tailwind CSS", "Framer-motion"],
        liveUrl: "#",
        githubUrl: "https://github.com/X-jonica/mon-portfolio",
    },
];

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
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-20">
            <div className="container">
                <motion.h2
                    className="section-heading text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Projets Récents
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all shadow-md"
                            variants={item}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.2 },
                            }}
                        >
                            <motion.div
                                className="aspect-video overflow-hidden"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300"
                                />
                            </motion.div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-foreground/70 text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="outline"
                                            className="text-xs"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                <motion.div
                                    className="flex gap-3 mt-4"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <Button size="sm" variant="outline" asChild>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="h-4 w-4 mr-2" />{" "}
                                            Live
                                        </a>
                                    </Button>
                                    <Button size="sm" variant="outline" asChild>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github className="h-4 w-4 mr-2" />{" "}
                                            Code
                                        </a>
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
