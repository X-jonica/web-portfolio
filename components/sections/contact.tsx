"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Facebook, Send } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { SITE_CONFIG } from "@/lib/constants";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "../../config/email";

export function Contact() {
    const { toast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!formRef.current) return;

        try {
            // 1. Envoi EmailJS
            await emailjs.sendForm(
                emailjsConfig.serviceId,
                emailjsConfig.templateId,
                formRef.current,
                emailjsConfig.userId
            );

            // 2. Toast de succès
            toast({
                title: "Message envoyé !",
                description: "Je vous répondrai très bientôt.",
            });

            // 3. Reset form
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error("Email sending error:", error);
            toast({
                title: "Erreur lors de l'envoi",
                description: "Veuillez réessayer plus tard.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 px-4 md:px-8">
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
                            Contact
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Une question, un projet ? N&apos;hésitez pas à me
                            contacter
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6"
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        Envoyez-moi un subject
                                    </CardTitle>
                                    <CardDescription>
                                        Remplissez le formulaire ci-dessous et
                                        je vous répondrai rapidement
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-4"
                                    >
                                        <div className="sr-only">
                                            <Label htmlFor="message">
                                                Don&apos;t fill this out
                                            </Label>
                                            <Input
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        message: e.target.value,
                                                    })
                                                }
                                                tabIndex={-1}
                                                autoComplete="off"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="name">
                                                Nom complet
                                            </Label>
                                            <Input
                                                id="name"
                                                placeholder="Votre nom"
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        name: e.target.value,
                                                    })
                                                }
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="votre.email@example.com"
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        email: e.target.value,
                                                    })
                                                }
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="subject">
                                                subject
                                            </Label>
                                            <Textarea
                                                id="subject"
                                                placeholder="Votre subject..."
                                                value={formData.subject}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        subject: e.target.value,
                                                    })
                                                }
                                                rows={6}
                                                required
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full gap-2"
                                            disabled={isSubmitting}
                                        >
                                            <Send className="w-4 h-4" />
                                            {isSubmitting
                                                ? "Envoi en cours..."
                                                : "Envoyer le message"}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="space-y-6"
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>Coordonnées</CardTitle>
                                    <CardDescription>
                                        Retrouvez-moi également sur ces
                                        plateformes
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <a
                                        href={`mailto:${SITE_CONFIG.contact.email}`}
                                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors group"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <Mail className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <div className="font-medium">
                                                Email
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                {SITE_CONFIG.contact.email}
                                            </div>
                                        </div>
                                    </a>

                                    <a
                                        href={`tel:${SITE_CONFIG.contact.phone}`}
                                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors group"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <Phone className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <div className="font-medium">
                                                Téléphone
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                {SITE_CONFIG.contact.phone}
                                            </div>
                                        </div>
                                    </a>

                                    <a
                                        href={SITE_CONFIG.contact.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors group"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <Linkedin className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <div className="font-medium">
                                                LinkedIn
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                Profil professionnel
                                            </div>
                                        </div>
                                    </a>

                                    <a
                                        href={SITE_CONFIG.contact.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors group"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <Github className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <div className="font-medium">
                                                GitHub
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                Projets open source
                                            </div>
                                        </div>
                                    </a>

                                    <a
                                        href={SITE_CONFIG.contact.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors group"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <Facebook className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <div className="font-medium">
                                                Facebook
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                Réseau social
                                            </div>
                                        </div>
                                    </a>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
