import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: 'fr' | 'en';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Dictionnaire des traductions
const translations = {
  fr: {
    // Navigation
    home: 'Accueil',
    about: 'À propos',
    skills: 'Compétences',
    projects: 'Projets',
    contact: 'Contact',
    
    // Hero
    hello: 'Salut, je suis',
    role: 'Développeur Web Junior',
    description: 'Passionné par la création d\'applications web modernes et performantes. Toujours en apprentissage et prêt à relever de nouveaux défis.',
    cta: 'Découvrir mon travail',
    
    // About
    aboutTitle: 'À propos de moi',
    aboutDescription: 'Développeur web junior motivé et curieux, je me spécialise dans la création d\'applications web modernes . J\'aime transformer des idées en solutions digitales élégantes et fonctionnelles.',
    
    // Why Me
    whyMeTitle: 'Pourquoi moi ?',
    whyMeSlogan: '"Code avec passion, apprend avec persévérance"',
    whyMeDescription: 'Je ne suis peut-être pas un développeur senior, mais ma motivation, ma curiosité et ma capacité d\'apprentissage rapide sont mes atouts principaux. Chaque ligne de code est une opportunité d\'apprendre et de m\'améliorer.',
    
    // Opportunities
    opportunitiesTitle: 'Ouvert aux opportunités',
    cdi: 'CDI',
    cdd: 'CDD',
    stage: 'Stage',
    freelance: 'Freelance',
    
    // Skills
    skillsTitle: 'Mes compétences',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Outils',
    
    // Projects
    projectsTitle: 'Mes projets',
    viewProject: 'Voir le projet',
    viewCode: 'Voir le code',
    
    // Contact
    contactTitle: 'Contactez-moi',
    contactDescription: 'Je suis toujours ouvert aux nouvelles opportunités et collaborations. N\'hésitez pas à me contacter !',
    location: 'Localisation',
    sendMessage: 'Envoyer un message',
    name: 'Nom',
    email: 'Email',
    message: 'Message',
    send: 'Envoyer',
    
    // Footer
    madeWith: 'Fait avec',
    and: 'et',
    by: 'par',
    
    // Visit counter
    visits: 'visites',
    visit: 'visite'
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    
    // Hero
    hello: 'Hi, I\'m',
    role: 'Junior Web Developer',
    description: 'Passionate about creating modern and performant web applications. Always learning and ready to take on new challenges.',
    cta: 'Discover my work',
    
    // About
    aboutTitle: 'About me',
    aboutDescription: 'Motivated and curious junior web developer, I specialize in creating modern web applications . I love transforming ideas into elegant and functional digital solutions.',
    
    // Why Me
    whyMeTitle: 'Why me?',
    whyMeSlogan: '"Code with passion, learn with perseverance"',
    whyMeDescription: 'I may not be a senior developer, but my motivation, curiosity and rapid learning ability are my main assets. Every line of code is an opportunity to learn and improve.',
    
    // Opportunities
    opportunitiesTitle: 'Open to opportunities',
    cdi: 'Full-time',
    cdd: 'Contract',
    stage: 'Internship',
    freelance: 'Freelance',
    
    // Skills
    skillsTitle: 'My skills',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools',
    
    // Projects
    projectsTitle: 'My projects',
    viewProject: 'View project',
    viewCode: 'View code',
    
    // Contact
    contactTitle: 'Contact me',
    contactDescription: 'I\'m always open to new opportunities and collaborations. Feel free to contact me!',
    location: 'Location',
    sendMessage: 'Send a message',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    
    // Footer
    madeWith: 'Made with',
    and: 'and',
    by: 'by',
    
    // Visit counter
    visits: 'visits',
    visit: 'visit'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  useEffect(() => {
    // Vérifie les préférences sauvegardées ou utilise la langue du navigateur
    const savedLanguage = localStorage.getItem('language') as 'fr' | 'en';
    const browserLanguage = navigator.language.startsWith('fr') ? 'fr' : 'en';
    
    setLanguage(savedLanguage || browserLanguage);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};