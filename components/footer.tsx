'use client';

import { Github, Linkedin, Mail, Facebook, Heart } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t py-12 px-4 md:px-8 mb-16 lg:mb-0">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{SITE_CONFIG.name}</h3>
            <p className="text-sm text-muted-foreground">
              {SITE_CONFIG.title} passionné par la création de solutions numériques innovantes.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#hero" className="hover:text-primary transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors">
                  Compétences
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Réseaux sociaux</h4>
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-accent transition-colors flex items-center justify-center"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-accent transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="w-10 h-10 rounded-full bg-secondary hover:bg-accent transition-colors flex items-center justify-center"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-accent transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} {SITE_CONFIG.name}. Fait avec <Heart className="w-4 h-4 text-red-500 fill-current" /> à {SITE_CONFIG.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
