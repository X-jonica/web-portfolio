"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SKILL_GROUPS = [
    {
        title: "💻 Full-Stack Development",
        skills: [
            "React/Next.js/Vue.js",
            "Javascript/TypeScript",
            "Node.js/Express.js/Nest.js",
            "Python/FastApi",
            "MySQL/PostgreSQL/MongoDB",
            "Tailwind CSS",
        ],
    },
    {
        title: "🛠️ DevOps & Outils",
        skills: [
            "Git/GitHub",
            "Docker",
            "Vercel",
            "Testing Library",
            "Figma",
            "SonarQube",
        ],
    },
    {
        title: "🚀 Spécialités",
        skills: [
            "Applications Performantes",
            "APIs REST",
            "Dévéloppement Web",
            "Integration",
            "UI/UX Modern",
            "Responsive Design",
        ],
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-20 px-4 md:px-8 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-12"
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Expertise Technique
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Stack moderne et compétences orientées résultats
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {SKILL_GROUPS.map((group, index) => (
                            <motion.div
                                key={group.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 border-0 bg-background">
                                    <CardHeader>
                                        <CardTitle className="text-xl">
                                            {group.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            {group.skills.map((skill) => (
                                                <div
                                                    key={skill}
                                                    className="px-4 py-3 bg-primary/5 rounded-lg border hover:bg-primary/10 transition-colors"
                                                >
                                                    <span className="font-medium text-foreground">
                                                        {skill}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Call-to-action pour voir plus */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center pt-8"
                    >
                        <p className="text-muted-foreground">
                            💡 <strong>Curieux des détails techniques ?</strong>
                            <a
                                href="#projects"
                                className="text-primary hover:underline ml-1"
                            >
                                Voir mes projets en action →
                            </a>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
