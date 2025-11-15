"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";

export function About() {
    return (
        <section id="about" className="py-20 px-4 md:px-8 bg-secondary/30">
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
                            À propos
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Passionné par la création de solutions numériques
                            innovantes et performantes
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <Card className="h-full">
                                <CardContent className="pt-6 space-y-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">
                                            Localisation
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {SITE_CONFIG.location}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Card className="h-full">
                                <CardContent className="pt-6 space-y-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <GraduationCap className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">
                                            Formation
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {SITE_CONFIG.university}
                                        </p>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            {SITE_CONFIG.program}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <Card className="h-full">
                                <CardContent className="pt-6 space-y-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Target className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">
                                            Objectif
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Rejoindre une équipe dynamique et
                                            contribuer à des projets ambitieux
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                    >
                        <Card>
                            <CardContent className="pt-6">
                                <div className="prose prose-neutral dark:prose-invert max-w-none">
                                    <h3 className="text-2xl font-semibold mb-4">
                                        Mon parcours
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        Étudiant passionné en{" "}
                                        <strong>
                                            Modélisation et Ingénierie
                                            Informatique
                                        </strong>{" "}
                                        à l'EMIT de Fianarantsoa, je me
                                        spécialise dans le développement
                                        d'applications web modernes et
                                        performantes. Mon approche combine
                                        rigueur technique, créativité et sens du
                                        détail pour créer des expériences
                                        utilisateur exceptionnelles.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        À travers mes projets académiques et
                                        personnels, j'ai développé une expertise
                                        solide en{" "}
                                        <strong>
                                            développement full-stack
                                        </strong>
                                        , avec un focus particulier sur les
                                        technologies React/Next.js, TypeScript
                                        et les architectures modernes. Je
                                        m'efforce constamment d'écrire du code
                                        propre, maintenable et optimisé.
                                    </p>
                                    <blockquote className="border-l-4 border-primary pl-4 italic text-lg my-6">
                                        "La technologie au service de
                                        l'innovation : chaque ligne de code est
                                        une opportunité de créer quelque chose
                                        de remarquable."
                                    </blockquote>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Je suis à la recherche d'opportunités
                                        pour mettre en pratique mes compétences
                                        techniques, collaborer avec des équipes
                                        talentueuses et contribuer à des projets
                                        qui ont un impact réel. Mon objectif est
                                        de continuer à apprendre, à grandir et à
                                        relever de nouveaux défis dans le
                                        domaine du développement web.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
