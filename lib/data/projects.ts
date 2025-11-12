export const PROJECTS = [
    {
        id: "Landing page",
        title: "cafe vitrine (projet L1)",
        shortDescription:
            "Création d un simple landing Page en HTML et CSS pour debuter",
        description:
            "Landing page réalisée en HTML et CSS, conçue pour mettre en valeur les produits d’un café local. Le design est responsive pour offrir une expérience optimale sur tous les appareils. Ce projet est actuellement en cours d’amélioration avec l’ajout de nouvelles fonctionnalités.",
        technologies: ["HTML", "CSS", "JAVASCRIPT"],
        challenges: [
            "Respecter la structure de page",
            "Creer quelque chose de beau a voir",
            "Comment creer une insteraction",
        ],
        results: [
            "Un petit site vitrine pret a l emploi",
            "Animation minimal",
            "Deployement facile avec github",
        ],
        githubUrl: "https://github.com/X-jonica/web_cafe_vitrine",
        liveUrl: "https://x-jonica.github.io/web_cafe_vitrine/",
        image: "/images/projects/cafe_vitrine.png",
        featured: true,
    },
    {
        id: "dashboard-analytics",
        title: "Dashboard Analytics",
        shortDescription:
            "Tableau de bord temps réel pour visualisation de données",
        description:
            "Dashboard interactif pour visualisation de métriques en temps réel avec graphiques dynamiques, filtres avancés et exports automatisés.",
        technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
        challenges: [
            "Traitement de données en temps réel",
            "Visualisations complexes et performantes",
            "État global optimisé",
        ],
        results: [
            "Mise à jour en temps réel",
            "Support de 100k+ points de données",
            "Interface intuitive",
        ],
        githubUrl: "https://github.com/henintsoa-jonica/analytics-dashboard",
        liveUrl: "https://analytics-demo.vercel.app",
        image: "/projects/dashboard.jpg",
        featured: true,
    },
    {
        id: "task-manager",
        title: "Gestionnaire de Tâches",
        shortDescription: "Application collaborative de gestion de projets",
        description:
            "Outil de gestion de tâches et projets en équipe avec système de notifications, drag & drop, et synchronisation temps réel.",
        technologies: ["Next.js", "TypeScript", "Supabase", "Framer Motion"],
        challenges: [
            "Synchronisation multi-utilisateurs",
            "Drag & drop fluide",
            "Notifications en temps réel",
        ],
        results: [
            "Collaboration fluide",
            "Synchronisation instantanée",
            "UX optimisée",
        ],
        githubUrl: "https://github.com/henintsoa-jonica/task-manager",
        liveUrl: "https://tasks-demo.vercel.app",
        image: "/projects/tasks.jpg",
        featured: false,
    },
];
