import React from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const iconVariants = {
        hover: {
            scale: 1.2,
            rotate: 5,
            transition: { duration: 0.3 },
        },
    };

    const linkVariants = {
        hover: {
            color: "hsl(var(--primary))",
            transition: { duration: 0.2 },
        },
    };

    return (
        <footer className="py-12 bg-card border-t border-border">
            <div className="container">
                <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="text-2xl font-bold text-primary mb-4"
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        DevPortfolio
                    </motion.div>

                    <motion.p
                        className="text-foreground/70 text-sm mb-6 text-center max-w-md"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Développeur web passionné créant des expériences web
                        modernes et performantes
                    </motion.p>

                    <motion.div
                        className="flex gap-6 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.a
                            href="https://github.com/X-jonica"
                            className="hover:text-primary transition-colors"
                            aria-label="GitHub"
                            variants={iconVariants}
                            whileHover="hover"
                        >
                            <Github className="h-5 w-5" />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/jonica-henintsoa-96a198357/"
                            className="hover:text-primary transition-colors"
                            aria-label="LinkedIn"
                            variants={iconVariants}
                            whileHover="hover"
                        >
                            <Linkedin className="h-5 w-5" />
                        </motion.a>
                    </motion.div>

                    <motion.nav
                        className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <motion.a
                            href="#about"
                            className="text-sm text-foreground/70 hover:text-primary transition-colors"
                            variants={linkVariants}
                            whileHover="hover"
                        >
                            À propos
                        </motion.a>
                        <motion.a
                            href="#skills"
                            className="text-sm text-foreground/70 hover:text-primary transition-colors"
                            variants={linkVariants}
                            whileHover="hover"
                        >
                            Compétences
                        </motion.a>
                        <motion.a
                            href="#projects"
                            className="text-sm text-foreground/70 hover:text-primary transition-colors"
                            variants={linkVariants}
                            whileHover="hover"
                        >
                            Projets
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="text-sm text-foreground/70 hover:text-primary transition-colors"
                            variants={linkVariants}
                            whileHover="hover"
                        >
                            Contact
                        </motion.a>
                    </motion.nav>

                    <motion.div
                        className="text-xs text-foreground/50"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        © {currentYear} Jonica Henintsoa. Tous droits réservés.
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
