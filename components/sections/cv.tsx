"use client";

import { motion } from "framer-motion";
import { Download, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";

export function CV() {
    return (
        <section id="cv" className="py-20 px-4 md:px-8 bg-secondary/30">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Curriculum Vitae
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Découvrez mon parcours complet et mes expériences
                            professionnelles
                        </p>
                    </div>

                    <Card>
                        <CardContent className="pt-8">
                            <div className="flex flex-col items-center space-y-6">
                                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                                    <FileText className="w-10 h-10 text-primary" />
                                </div>

                                <div className="text-center space-y-2">
                                    <h3 className="text-2xl font-semibold">
                                        Mon CV détaillé
                                    </h3>
                                    <p className="text-muted-foreground max-w-md">
                                        Consultez mon curriculum vitae complet
                                        avec mon parcours académique, mes
                                        expériences professionnelles, mes
                                        compétences techniques et mes
                                        réalisations.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button size="lg" asChild className="gap-2">
                                        <a
                                            href={SITE_CONFIG.cvUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Download className="w-5 h-5" />
                                            Télécharger le CV
                                        </a>
                                    </Button>

                                    <Button
                                        size="lg"
                                        variant="outline"
                                        asChild
                                        className="gap-2"
                                    >
                                        <a
                                            href={SITE_CONFIG.cvUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                            Voir en ligne
                                        </a>
                                    </Button>
                                </div>

                                <div className="pt-6 border-t w-full">
                                    <div className="grid sm:grid-cols-3 gap-6 text-center">
                                        <div>
                                            <div className="text-3xl font-bold text-primary mb-1">
                                                3+
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                Années d&apos;études
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold text-primary mb-1">
                                                08+
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                Projets réalisés
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold text-primary mb-1">
                                                1+
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                Certifications
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
