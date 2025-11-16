# Guide de contenu - Portfolio

Ce guide vous aide à personnaliser le contenu de votre portfolio.

## 📝 Configuration de base

### Fichier : `lib/constants.ts`

```typescript
export const SITE_CONFIG = {
  name: 'HENINTSOA Hasimanitriniaina Jonica',
  title: 'Développeur FullStack',
  tagline: 'Transformer des idées en solutions numériques performantes',
  location: 'Fianarantsoa, Madagascar',
  university: 'École de Management et d\'Innovation Technologique (EMIT)',
  program: 'Modélisation et Ingénierie Informatique',
  cvUrl: 'https://cvdesignr.com/p/689d9cab81e04',

  contact: {
    email: 'votre.email@example.com',        // À MODIFIER
    phone: '+261 XX XX XXX XX',              // À MODIFIER
    linkedin: 'https://linkedin.com/in/...',  // À MODIFIER
    github: 'https://github.com/...',         // À MODIFIER
    facebook: 'https://facebook.com/...',     // À MODIFIER
    whatsapp: 'https://wa.me/261XXXXXXXXX',   // À MODIFIER
  },

  codingHours: 5000, // Estimez vos heures de code
};
```

## 💼 Compétences

### Fichier : `lib/data/skills.ts`

Structure d'une compétence :
```typescript
{
  name: 'Nom de la technologie',
  level: 'Avancé' | 'Intermédiaire',
  description: 'Description courte',
  examples: ['Exemple 1', 'Exemple 2', 'Exemple 3']
}
```

### Catégories disponibles

1. **frontend** - React, Vue, Angular, etc.
2. **backend** - Node.js, Python, PHP, etc.
3. **tools** - Git, Docker, CI/CD, etc.
4. **testing** - Jest, Cypress, etc.
5. **languages** - JavaScript, Python, etc.
6. **other** - Soft skills, méthodologies, etc.

### Exemple personnalisé

```typescript
frontend: [
  {
    name: 'Vue.js 3',
    level: 'Avancé',
    description: 'Framework progressif pour interfaces modernes',
    examples: [
      'Application de gestion de stock',
      'Dashboard d\'analytics temps réel',
      'E-commerce responsive'
    ],
  },
]
```

## 🚀 Projets

### Fichier : `lib/data/projects.ts`

Structure d'un projet :
```typescript
{
  id: 'identifiant-unique',
  title: 'Titre du projet',
  shortDescription: 'Description courte (1 ligne)',
  description: 'Description détaillée (2-3 phrases)',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  challenges: [
    'Défi technique 1',
    'Défi technique 2',
    'Défi technique 3',
  ],
  results: [
    'Résultat mesurable 1',
    'Résultat mesurable 2',
    'Résultat mesurable 3',
  ],
  githubUrl: 'https://github.com/...',
  liveUrl: 'https://demo.example.com',
  image: '/projects/image.jpg',
  featured: true, // Mettre en avant
}
```

### Conseils pour les projets

#### Challenges (Défis)
Mettez en avant les **problèmes techniques** que vous avez résolus :
- ❌ "Faire un site web"
- ✅ "Optimiser les performances pour gérer 10k+ produits"

#### Results (Résultats)
Utilisez des **métriques mesurables** :
- ❌ "Bon résultat"
- ✅ "Temps de chargement < 2s"

#### Technologies
Listez les **technologies principales** (5 max) :
- Framework (Next.js, React, Vue)
- Langage (TypeScript, Python)
- Backend (Node.js, Supabase)
- Styling (Tailwind CSS)
- Autre tech clé (Stripe, etc.)

### Exemple personnalisé

```typescript
{
  id: 'app-mobile-agricole',
  title: 'Application Mobile Agricole',
  shortDescription: 'Solution pour agriculteurs malgaches',
  description: 'Application mobile permettant aux agriculteurs de suivre leurs cultures, gérer leurs stocks et accéder aux prix du marché en temps réel. Interface en français et malgache.',
  technologies: ['React Native', 'TypeScript', 'Supabase', 'Expo'],
  challenges: [
    'Fonctionnement offline-first pour zones rurales',
    'Synchronisation intelligente des données',
    'Interface multilingue intuitive',
  ],
  results: [
    '500+ utilisateurs actifs',
    'Disponibilité offline 100%',
    'Note 4.8/5 sur les stores',
  ],
  githubUrl: 'https://github.com/username/agri-app',
  liveUrl: 'https://play.google.com/store/...',
  image: '/projects/agri-app.jpg',
  featured: true,
}
```

## 📚 Bibliothèque (Équipes & Certificats)

### Fichier : `components/sections/library.tsx`

#### Images d'équipes
```typescript
const TEAM_IMAGES = [
  {
    src: '/images/team-1.jpg',
    title: 'Hackathon EMIT 2023',
    description: 'Équipe gagnante - 1ère place'
  },
  {
    src: '/images/team-2.jpg',
    title: 'Projet académique Web',
    description: 'Développement application de gestion'
  },
]
```

#### Certificats
```typescript
const CERTIFICATES = [
  {
    src: '/images/cert-1.jpg',
    title: 'Certification React Advanced',
    description: 'Meta - Juin 2023'
  },
  {
    src: '/images/cert-2.jpg',
    title: 'AWS Cloud Practitioner',
    description: 'Amazon Web Services - 2024'
  },
]
```

## 📧 Section À propos

### Fichier : `components/sections/about.tsx`

Personnalisez le texte de présentation :

```typescript
<p className="text-muted-foreground leading-relaxed mb-4">
  Étudiant passionné en <strong>Modélisation et Ingénierie Informatique</strong>
  à l'EMIT de Fianarantsoa, je me spécialise dans le développement d'applications
  web modernes et performantes. Mon approche combine rigueur technique, créativité
  et sens du détail.
</p>
```

### Structure recommandée

1. **Paragraphe 1** : Qui vous êtes + formation + spécialisation
2. **Paragraphe 2** : Expérience + expertise technique
3. **Citation** : Votre philosophie/devise
4. **Paragraphe 3** : Objectifs + ce que vous recherchez

### Exemple de citation personnalisée

```html
<blockquote className="border-l-4 border-primary pl-4 italic text-lg my-6">
  "Chaque ligne de code est une opportunité de créer une expérience
  utilisateur exceptionnelle et de résoudre un problème concret."
</blockquote>
```

## 🎨 Images

### Structure des dossiers
```
public/
  images/
    profile-1.jpg    (Portrait 1 - carousel hero)
    profile-2.jpg    (Portrait 2 - carousel hero)
    profile-3.jpg    (Portrait 3 - carousel hero)
    profile-4.jpg    (Portrait 4 - carousel hero)
    team-1.jpg       (Photo équipe 1)
    team-2.jpg       (Photo équipe 2)
    team-3.jpg       (Photo équipe 3)
    cert-1.jpg       (Certificat 1)
    cert-2.jpg       (Certificat 2)
    cert-3.jpg       (Certificat 3)
    projects/
      projet-1.jpg
      projet-2.jpg
```

### Recommandations images

#### Photos profil (Hero carousel)
- **Format** : Portrait vertical
- **Ratio** : 4:5 (800x1000px recommandé)
- **Qualité** : Haute résolution
- **Background** : Sobre et professionnel
- **Variété** : 4 photos différentes (angles, tenues)

#### Photos équipe
- **Format** : Paysage
- **Ratio** : 16:9 (1920x1080px)
- **Contenu** : Vous avec collaborateurs/équipe
- **Contexte** : Hackathon, projets, formations

#### Certificats
- **Format** : Paysage
- **Ratio** : 16:9 ou A4
- **Qualité** : Scan haute résolution
- **Lisibilité** : Texte net et contrasté

## ✅ Checklist de personnalisation

### Configuration
- [ ] Modifier `SITE_CONFIG` avec vos infos
- [ ] Mettre à jour les URLs de contact
- [ ] Changer le lien CV
- [ ] Ajuster `codingHours` estimé

### Compétences
- [ ] Ajouter/supprimer des compétences
- [ ] Vérifier les niveaux (Avancé/Intermédiaire)
- [ ] Rédiger des exemples concrets
- [ ] Organiser par catégories pertinentes

### Projets
- [ ] Créer 3-5 projets minimum
- [ ] Rédiger défis techniques clairs
- [ ] Ajouter métriques de résultats
- [ ] Vérifier les liens GitHub/démo
- [ ] Marquer 1-2 projets en "featured"

### Images
- [ ] Ajouter 4 photos profil (carousel)
- [ ] Ajouter 3+ photos équipe
- [ ] Ajouter 3+ certificats
- [ ] Optimiser les images (compression)

### Textes
- [ ] Personnaliser section À propos
- [ ] Rédiger tagline/accroche unique
- [ ] Ajuster citation personnelle
- [ ] Vérifier orthographe/grammaire

### Tests
- [ ] Tester mode clair/sombre
- [ ] Vérifier responsive (mobile/tablet/desktop)
- [ ] Tester navigation mobile
- [ ] Vérifier tous les liens
- [ ] Tester formulaire contact

## 🚀 Prochaines étapes

1. Personnaliser le contenu avec ce guide
2. Ajouter vos images dans `public/images/`
3. Tester localement : `npm run dev`
4. Vérifier le build : `npm run build`
5. Déployer sur Vercel

---

**Besoin d'aide ?** Relisez les exemples dans ce guide et dans les fichiers de données.
