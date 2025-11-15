"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, CheckCircle2, Lightbulb } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { PROJECTS } from "@/lib/data/projects";

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<
        (typeof PROJECTS)[0] | null
    >(null);

    return (
        <section id="projects" className="py-20 px-4 md:px-8 bg-secondary/30">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-12"
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Projets
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Une sélection de mes réalisations techniques les
                            plus significatives
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PROJECTS.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                <Card
                                    className="h-full cursor-pointer hover:shadow-xl transition-shadow overflow-hidden group"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <div
                                        className="relative aspect-video overflow-hidden bg-cover bg-center"
                                        style={{
                                            backgroundImage: `url(${project.image})`,
                                        }}
                                    >
                                        {project.featured && (
                                            <Badge className="absolute top-4 right-4">
                                                Featured
                                            </Badge>
                                        )}
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="group-hover:text-primary transition-colors">
                                            {project.title}
                                        </CardTitle>
                                        <CardDescription>
                                            {project.shortDescription}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies
                                                .slice(0, 3)
                                                .map((tech) => (
                                                    <Badge
                                                        key={tech}
                                                        variant="secondary"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            {project.technologies.length >
                                                3 && (
                                                <Badge variant="outline">
                                                    +
                                                    {project.technologies
                                                        .length - 3}
                                                </Badge>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <Dialog
                        open={!!selectedProject}
                        onOpenChange={() => setSelectedProject(null)}
                    >
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle className="text-3xl">
                                    {selectedProject.title}
                                </DialogTitle>
                            </DialogHeader>

                            <div className="space-y-6">
                                <div
                                    className="relative aspect-video rounded-lg overflow-hidden bg-center bg-cover"
                                    style={{
                                        backgroundImage: `url(${selectedProject.image})`,
                                    }}
                                ></div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">
                                        Description
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">
                                        Technologies utilisées
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies.map(
                                            (tech) => (
                                                <Badge
                                                    key={tech}
                                                    variant="secondary"
                                                >
                                                    {tech}
                                                </Badge>
                                            )
                                        )}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                            <Lightbulb className="w-5 h-5 text-primary" />
                                            Défis relevés
                                        </h3>
                                        <ul className="space-y-2">
                                            {selectedProject.challenges.map(
                                                (challenge, index) => (
                                                    <li
                                                        key={index + 1}
                                                        className="flex items-start gap-2 text-muted-foreground"
                                                    >
                                                        <span className="text-primary mt-1">
                                                            •
                                                        </span>
                                                        <span>{challenge}</span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                            Résultats
                                        </h3>
                                        <ul className="space-y-2">
                                            {selectedProject.results.map(
                                                (result, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start gap-2 text-muted-foreground"
                                                    >
                                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                                        <span>{result}</span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-4 border-t">
                                    {selectedProject.githubUrl && (
                                        <Button asChild>
                                            <a
                                                href={selectedProject.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="gap-2"
                                            >
                                                <Github className="w-4 h-4" />
                                                Voir le code
                                            </a>
                                        </Button>
                                    )}
                                    {selectedProject.liveUrl && (
                                        <Button variant="outline" asChild>
                                            <a
                                                href={selectedProject.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="gap-2"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Voir la démo
                                            </a>
                                        </Button>
                                    )}
                                    <Button
                                        variant="secondary"
                                        asChild
                                        className="ml-auto"
                                    >
                                        <a href="#contact">
                                            Discuter de ce projet
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                )}
            </AnimatePresence>
        </section>
    );
}
