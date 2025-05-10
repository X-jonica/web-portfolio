import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skills = {
    frontend: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Angular.js",
        "Vue.js",
        "Tailwind CSS",
        "...",
    ],
    backend: [
        "Node.js",
        "Express",
        "PHP",
        "Laravel",
        "REST API",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "JAVA",
        "...",
    ],
    tools: [
        "Git",
        "Docker",
        "Vite",
        "GitHub Actions",
        "VS Code",
        "Figma",
        "Adobe XD",
        "postman",
        "pgAdmin",
        "Eclipse IDE",
        "netbeans",
        "chatgpt",
        "Deepseek",
        "...",
    ],
};

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 bg-secondary/30">
            <div className="container">
                <motion.h2
                    className="section-heading text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Compétences
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.div
                        className="bg-card rounded-lg p-6 shadow-md border border-border"
                        initial={{ y: 50 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-bold mb-4 text-primary">
                            Frontend
                        </h3>
                        <motion.div
                            className="flex flex-wrap gap-2"
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {skills.frontend.map((skill) => (
                                <motion.div key={skill} variants={item}>
                                    <Badge
                                        variant="secondary"
                                        className="text-sm py-1 px-3"
                                    >
                                        {skill}
                                    </Badge>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="bg-card rounded-lg p-6 shadow-md border border-border"
                        initial={{ y: 50 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-bold mb-4 text-primary">
                            Backend
                        </h3>
                        <motion.div
                            className="flex flex-wrap gap-2"
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {skills.backend.map((skill) => (
                                <motion.div key={skill} variants={item}>
                                    <Badge
                                        variant="secondary"
                                        className="text-sm py-1 px-3"
                                    >
                                        {skill}
                                    </Badge>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="bg-card rounded-lg p-6 shadow-md border border-border"
                        initial={{ y: 50 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-xl font-bold mb-4 text-primary">
                            Outils & Technologies
                        </h3>
                        <motion.div
                            className="flex flex-wrap gap-2"
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {skills.tools.map((skill) => (
                                <motion.div key={skill} variants={item}>
                                    <Badge
                                        variant="secondary"
                                        className="text-sm py-1 px-3"
                                    >
                                        {skill}
                                    </Badge>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
