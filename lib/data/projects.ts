export const PROJECTS = [
    {
        id: "Landing page",
        title: "Café Vitrine (L1)",
        shortDescription:
            "Création d'une simple landing page en HTML et CSS pour débuter.",
        description:
            "Landing page réalisée en HTML et CSS, conçue pour mettre en valeur les produits d’un café local. Le design est responsive afin d'offrir une expérience optimale sur tous les appareils. Ce projet est actuellement en cours d’amélioration avec l’ajout de nouvelles fonctionnalités.",
        technologies: ["HTML5", "CSS", "JavaScript"],
        challenges: [
            "Respecter la structure de la page",
            "Créer un design esthétique",
            "Ajouter des interactions simples",
        ],
        results: [
            "Un petit site vitrine prêt à l'emploi",
            "Animations minimales mais efficaces",
            "Déploiement facile via GitHub",
        ],
        githubUrl: "https://github.com/X-jonica/web_cafe_vitrine",
        liveUrl: "https://x-jonica.github.io/web_cafe_vitrine/",
        image: "/images/projects/cafe_vitrine.png",
        featured: false,
    },
    {
        id: "to-do-list",
        title: "Mini Todo List (L1)",
        shortDescription: "Petite application de to-do list avec localStorage",
        description:
            "Cette application est une simple todo list réalisée en HTML, CSS et JavaScript. Elle a été conçue pour réviser les bases du DOM, des événements, du stockage local et de la manipulation dynamique d'éléments HTML.",
        technologies: ["HTML5", "CSS", "JavaScript"],
        challenges: [
            "Manipuler le DOM avec JavaScript",
            "Explorer les événements en JavaScript et ES6",
            "Utiliser le localStorage pour la persistance des données",
        ],
        results: [
            "Application permettant d'ajouter, modifier et supprimer des tâches",
            "Meilleure compréhension des événements et d'ES6",
            "Tâches sauvegardées en cas de rafraîchissement de la page",
        ],
        githubUrl: "https://github.com/X-jonica/static-to-do",
        liveUrl: "https://x-jonica.github.io/static-to-do/",
        image: "/images/projects/Todo_list.png",
        featured: false,
    },
    {
        id: "meteo-app",
        title: "Application Météo (L2)",
        shortDescription:
            "Application météo responsive développée avec HTML, Tailwind CSS et JavaScript.",
        description:
            "Cette application utilise l'API OpenWeatherMap pour récupérer les données météorologiques. Il est nécessaire d'obtenir une clé API gratuite et de l'ajouter dans le fichier script.js.",
        technologies: [
            "HTML5",
            "Tailwind CSS3",
            "API OpenWeatherMap",
            "Font Awesome",
        ],
        challenges: [
            "Afficher la météo pour n'importe quelle ville",
            "Détecter automatiquement la position de l'utilisateur",
            "Afficher les prévisions météo pour les jours à venir",
            "Effectuer des appels API avec la méthode Fetch native",
            "Héberger le contenu statique sur GitHub",
        ],
        results: [
            "Consultation de la météo pour n'importe quelle ville",
            "Possibilité de détecter votre position et voir la météo locale",
            "Visualisation des prévisions météo des jours suivants",
        ],
        githubUrl: "https://github.com/X-jonica/web-meteo-app",
        liveUrl: "https://x-jonica.github.io/web-meteo-app/",
        image: "/images/projects/Meteo_app.png",
        featured: false,
    },
    {
        id: "gestion-motdepasse",
        title: "Gestion de mots de passe (PHP)",
        shortDescription:
            "Application web pour gérer les différents mots de passe des utilisateurs",
        description:
            "SecurePass est une application sécurisée de gestion de mots de passe développée en PHP natif, sans framework. Elle permet de stocker, générer et gérer vos mots de passe en toute sécurité. Le projet propose deux modes d’installation : via Docker pour un déploiement rapide et isolé, ou en local avec PHP et un serveur type XAMPP/LAMP.",
        technologies: ["PHP", "JavaScript", "Bcrypt", "Bootstrap", "Docker"],
        challenges: [
            "Containeriser l'application pour que chaque utilisateur puisse l'utiliser en local sans installer PHP ou WAMP",
            "Sécuriser la session de l'utilisateur après la déconnexion",
            "Hasher les mots de passe des utilisateurs pour protéger les données",
            "Implémenter un CRUD complet (Create, Read, Update, Delete) pour l'ajout, la modification et la suppression des mots de passe",
        ],
        results: [
            "Application fonctionnelle avec un simple `docker compose up` et peu de configuration",
            "Interface simple et intuitive",
            "Données sécurisées car stockées localement",
        ],
        githubUrl: "https://github.com/X-jonica/docker_pass_php",
        liveUrl: "https://youtu.be/72arv4oIW8g",
        image: "/images/projects/SecurePass-Home-visible-parts.png",
        featured: false,
    },
    {
        id: "gestion-inscription",
        title: "Gestion d'inscription (L3)",
        shortDescription:
            "Application web pour gérer les inscriptions aux concours d'entrée à l'université.",
        description:
            "Cette application facilite la digitalisation et simplifie l'inscription des étudiants aux concours d'entrée à l'université. Les candidats peuvent s'inscrire facilement et recevoir un retour sur l'acceptation de leur candidature par téléphone, sans se déplacer.",
        technologies: ["React.js", "Bootstrap 4", "Express.js", "SQLite"],
        challenges: [
            "Développer une application fullstack fonctionnelle",
            "Optimiser le temps de réponse des requêtes",
            "Respecter les bonnes pratiques avec Express.js",
            "Implémenter un CRUD complet (Create, Read, Update, Delete)",
        ],
        results: [
            "Application fonctionnelle et responsive pour le formulaire d'inscription",
            "Les étudiants peuvent s'inscrire facilement",
            "L'administrateur peut vérifier et valider les informations avant confirmation",
        ],
        githubUrl: "https://github.com/X-jonica/web_gestion_inscription_perso",
        liveUrl: "https://youtu.be/a8WYK4c-FLw",
        image: "/images/projects/Gestion_inscription.png",
        featured: false,
    },
    {
        id: "e-commerce-simulation",
        title: "Simulation e-commerce ",
        shortDescription:
            "Petite application pour comprendre le fonctionnement d'un e-commerce (In progress...)",
        description:
            "Une petite application e-commerce développée avec Vue.js et Node.js, incluant l'authentification, la consultation des produits et le panier. L'objectif est de créer une application complète pour simuler un e-commerce, débuter dans le déploiement et relier la base de données, le backend et le frontend afin d'obtenir une application entièrement fonctionnelle.",
        technologies: [
            "Vue.js 3",
            "Tailwind CSS 4",
            "Express.js",
            "PostgreSQL",
            "Neon.tech",
            "JWT",
        ],
        challenges: [
            "Développer une application fullstack fonctionnelle et déployée",
            "Commencer progressivement avec Tailwind CSS",
            "Première intégration de JWT avec Express.js",
        ],
        results: [
            "Application fonctionnelle et responsive pour les formulaires d'inscription et de connexion",
            "Responsive, avec quelques imperfections à améliorer",
            "Application simple et facile à utiliser",
        ],
        githubUrl: "https://github.com/X-jonica/frontend-technoweb-avance",
        liveUrl: "https://techno-web-avance.vercel.app/",
        image: "/images/projects/technoweb.png",
        featured: false,
    },
    {
        id: "audio-search",
        title: "Mozik",
        shortDescription:
            "Application de reconnaissance musicale (In progress...)",
        description:
            "Application web de recherche musicale intégrant le modèle d’IA YAMNet pour analyser le contenu sonore d’un fichier audio. Réalisée en collaboration avec Judio, Faniry, Madone et Dhelys dans le cadre de notre projet RNA (Réseau de Neurones Artificiel).",
        technologies: [
            "React.js",
            "Tailwind CSS 4",
            "Flask",
            "PostgreSQL",
            "Neon.tech",
            "JWT",
            "YAMNet",
            "AUDD.io",
            "bolt.new",
        ],
        challenges: [
            "Intégration d’un modèle pré-entraîné",
            "Appels d’API pour récupérer les paroles (lyrics)",
            "Concevoir une solution aboutie grâce à notre passion pour la musique",
        ],
        results: [
            "Modèle intégré et fonctionnel",
            "Deux options de recherche : avec sauvegarde et sans sauvegarde",
            "UI/UX optimisée avec une interface intuitive et minimaliste",
        ],
        githubUrl: "https://github.com/X-jonica/audio-python",
        liveUrl: "https://github.com/X-jonica/audio-python",
        image: "/images/projects/Mozik.png",
        featured: true,
    },
    {
        id: "gestion-epidemi",
        title: "Pandemio-tech ",
        shortDescription:
            "Plateforme de gestion des épidémies (in progress...)",
        description:
            "L’équipe G-RTX a développé une plateforme innovante dédiée à la gestion des épidémies mondiales, qui a remporté la deuxième place lors d’un hackathon interne de l’EMIT le 1er mars 2025, réalisé en seulement 24 heures. Cette solution exploite le Big Data et l’Intelligence Artificielle pour offrir la visualisation, la prédiction et la recherche cartographique des données épidémiologiques à l’échelle mondiale.",
        technologies: [
            "React.js",
            "Tailwind CSS 4",
            "Express.js",
            "PostgreSQL",
            "Python",
            "Réseau de neurones LTS",
        ],
        challenges: [
            "Terminer les éléments essentiels en 24 heures",
            "Travailler efficacement sous pression",
            "Préparer une présentation convaincante",
        ],
        results: [
            "Deuxième prix lors de la présentation",
            "Meilleure présentation grâce au dynamisme exceptionnel de l’équipe",
            "Toute l’équipe a donné le meilleur d’elle-même",
        ],
        githubUrl: "https://github.com/IJwesley601/EMIHACK-T",
        liveUrl: "https://github.com/IJwesley601/EMIHACK-T",
        image: "/images/projects/pandemioTech.jpg",
        featured: true,
    },
    {
        id: "next-auth",
        title: "Next-Auth",
        shortDescription: "Application d'authentification avec NextAuth",
        description:
            "Application développée dans l’objectif de comprendre en profondeur l’intégration d’authentifications modernes utilisées dans les sites professionnels, notamment via Google et GitHub. Ce projet m’a permis d’explorer NextAuth et de mettre en place un système complet de connexion sécurisée avec récupération des informations de l’utilisateur.",
        technologies: ["Next.js", "Tailwind CSS 4", "NextAuth"],
        challenges: [
            "Comprendre l’intégration de l’authentification via Google et GitHub",
            "Récupérer et exploiter les données du profil utilisateur après connexion",
        ],
        results: ["Authentification fonctionnelle avec Google et GitHub"],
        githubUrl: "https://github.com/X-jonica/next-auth-app",
        liveUrl: "https://next-auth-app-black.vercel.app/",
        image: "/images/projects/NextAuth.png",
        featured: true,
    },
    {
        id: "hair-transplant",
        title: "Hair Transplantation Afrika (in progress...)",
        shortDescription:
            "Plateforme regroupant les cliniques de transplantation capillaire africaines",
        description:
            "Plateforme permettant aux cliniques africaines de créer un compte afin d’attirer davantage de clients. Les patients peuvent comparer les meilleures cliniques selon leur localisation en Afrique, leur type de cheveux et leur budget. L’objectif est de rassembler les cliniques les plus fiables et les mieux notées du continent.",
        technologies: ["Next.js", "Tailwind CSS", "HeroUI", "Nest.js"],
        challenges: [
            "Rassembler et référencer les meilleures cliniques africaines",
            "Faciliter la recherche et améliorer l’expérience utilisateur",
        ],
        results: [
            "Un design moderne et optimisé grâce au rendu SSR et SSG de Next.js",
            "Une interface fluide, moderne et responsive grâce à HeroUI",
        ],
        githubUrl: "https://github.com/X-jonica",
        liveUrl: "https://hair-transplantation-plateform.onrender.com/home",
        image: "/images/projects/Clinics-hta.png",
        featured: true,
    },
];
