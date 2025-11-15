export const PROJECTS = [
    {
        id: "Landing page",
        title: "Café Vitrine (projet L1)",
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
        featured: true,
    },
    {
        id: "to-do-list",
        title: "Mini Todo List (projet L1)",
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
        featured: true,
    },
    {
        id: "meteo-app",
        title: "Application Météo (projet L2)",
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
        featured: true,
    },
    {
        id: "gestion-inscription",
        title: "Application de gestion d'inscription en ligne (projet L3)",
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
        featured: true,
    },
];
