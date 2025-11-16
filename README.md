# Portfolio - HENINTSOA Hasimanitriniaina Jonica

Portfolio professionnel moderne et responsive, construit avec **Next.js 13**, **TypeScript**, **Tailwind CSS**, **shadcn/ui** et **Framer Motion**.

## 🚀 Caractéristiques

### Design & UX
- ✨ Design moderne et épuré avec palette neutre professionnelle
- 🌓 Mode sombre/clair avec transition fluide
- 📱 Responsive design avec menu mobile fixe en bas
- 🎨 Animations fluides avec Framer Motion
- ♿ Accessible (WCAG AA)

### Sections
1. **Hero** - Présentation avec carousel photo automatique (2s), bouton CV et liens sociaux
2. **À propos** - Parcours, formation et objectifs professionnels
3. **Compétences** - Catégorisées (Frontend, Backend, Outils, Tests, Langages, Autres)
4. **Projets** - Cartes détaillées avec défis, résultats et liens GitHub/démo
5. **Bibliothèque** - Carousel d'équipes et certificats avec lightbox
6. **CV** - Section dédiée avec lien de téléchargement
7. **Contact** - Formulaire validé + coordonnées complètes

### Fonctionnalités uniques
- 🔢 **Compteur animé d'heures de code** (micro-interaction unique, visible desktop)
- 🎯 Navigation fluide avec détection de section active
- 🔒 Anti-spam (honeypot) sur formulaire de contact
- ⚡ Optimisé pour les performances (Lighthouse-friendly)

## 📦 Stack technique

- **Framework**: Next.js 13 (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS
- **Composants**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Thèmes**: next-themes

## 🛠️ Installation

```bash
# Cloner le projet
git clone https://github.com/henintsoa-jonica/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📜 Scripts disponibles

```bash
npm run dev       # Démarre le serveur de développement
npm run build     # Compile le projet pour production
npm run start     # Démarre le serveur de production
npm run lint      # Vérifie le code avec ESLint
npm run typecheck # Vérifie les types TypeScript
```

## 📂 Structure du projet

```
.
├── app/
│   ├── layout.tsx          # Layout principal avec ThemeProvider
│   ├── page.tsx            # Page d'accueil avec toutes les sections
│   └── globals.css         # Styles globaux et design tokens
├── components/
│   ├── sections/           # Composants des sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   ├── library.tsx
│   │   ├── cv.tsx
│   │   └── contact.tsx
│   ├── ui/                 # Composants shadcn/ui
│   ├── header.tsx          # En-tête avec navigation
│   ├── footer.tsx          # Pied de page
│   ├── mobile-nav.tsx      # Navigation mobile (bottom)
│   ├── theme-toggle.tsx    # Bouton dark/light
│   └── coding-counter.tsx  # Compteur animé (unique)
├── lib/
│   ├── constants.ts        # Configuration et constantes
│   ├── utils.ts            # Utilitaires
│   └── data/               # Données structurées
│       ├── skills.ts
│       └── projects.ts
└── public/
    └── images/             # Assets (photos, certificats)
```

## 🎨 Palette de couleurs

Le portfolio utilise une **palette neutre professionnelle** :
- Tons gris chauds et anthracite
- Contraste optimal pour accessibilité
- **Pas de bleu, violet ou vert dominant**
- Transition fluide entre modes clair/sombre

## 📸 Assets nécessaires

Ajoutez vos images dans `public/images/` :
- `profile-1.jpg`, `profile-2.jpg`, `profile-3.jpg`, `profile-4.jpg` (carousel Hero)
- `team-1.jpg`, `team-2.jpg`, `team-3.jpg` (équipes)
- `cert-1.jpg`, `cert-2.jpg`, `cert-3.jpg` (certificats)

## ⚙️ Configuration

Modifiez les informations personnelles dans `/lib/constants.ts` :

```typescript
export const SITE_CONFIG = {
  name: 'HENINTSOA Hasimanitriniaina Jonica',
  title: 'Développeur FullStack',
  // ... autres configs
};
```

Mettez à jour vos compétences dans `/lib/data/skills.ts` et projets dans `/lib/data/projects.ts`.

## 🚀 Déploiement sur Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel --prod
```

Ou connectez votre repo GitHub à Vercel pour déploiement automatique.

## ✅ Checklist qualité

- ✅ TypeScript strict mode
- ✅ ESLint configuration
- ✅ Responsive design (mobile-first)
- ✅ Accessibilité WCAG AA
- ✅ Performance optimisée
- ✅ SEO-friendly (metadata)
- ✅ Dark/Light mode
- ✅ Smooth scrolling
- ✅ Form validation
- ✅ Anti-spam (honeypot)

## 🎯 Prochaines étapes

1. Ajouter vos photos/images dans `public/images/`
2. Mettre à jour les informations dans `lib/constants.ts`
3. Personnaliser les compétences et projets
4. Configurer les vraies URLs de contact
5. Déployer sur Vercel

## 📧 Contact

- **Email**: henintsoa.jonica@example.com
- **LinkedIn**: [Profil LinkedIn](https://www.linkedin.com/in/henintsoa-jonica)
- **GitHub**: [GitHub Profile](https://github.com/henintsoa-jonica)

## 📄 Licence

© 2025 HENINTSOA Hasimanitriniaina Jonica. Tous droits réservés.

---

**Fait avec ❤️ à Fianarantsoa, Madagascar**
