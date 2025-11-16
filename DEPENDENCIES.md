# Dépendances du projet

## 📦 Core Dependencies (Production)

### Framework & React
- **next** `13.5.1` - Framework React avec SSR/SSG
- **react** `18.2.0` - Librairie UI
- **react-dom** `18.2.0` - Rendu React dans le DOM

### TypeScript
- **typescript** `5.2.2` - Superset JavaScript typé

### Styling
- **tailwindcss** `3.3.3` - Framework CSS utility-first
- **autoprefixer** `10.4.15` - Ajoute les préfixes CSS automatiquement
- **postcss** `8.4.30` - Outil de transformation CSS
- **tailwindcss-animate** `^1.0.7` - Animations Tailwind
- **tailwind-merge** `^2.5.2` - Merge intelligent de classes Tailwind
- **clsx** `^2.1.1` - Utilitaire pour classes conditionnelles

### UI Components (shadcn/ui)
- **@radix-ui/react-accordion** `^1.2.0` - Composant Accordion
- **@radix-ui/react-alert-dialog** `^1.1.1` - Dialogs d'alerte
- **@radix-ui/react-avatar** `^1.1.0` - Avatars
- **@radix-ui/react-checkbox** `^1.1.1` - Checkboxes
- **@radix-ui/react-dialog** `^1.1.1` - Modals/Dialogs
- **@radix-ui/react-dropdown-menu** `^2.1.1` - Menus déroulants
- **@radix-ui/react-label** `^2.1.0` - Labels de formulaire
- **@radix-ui/react-popover** `^1.1.1` - Popovers
- **@radix-ui/react-radio-group** `^1.2.0` - Radio buttons
- **@radix-ui/react-scroll-area** `^1.1.0` - Zone de scroll
- **@radix-ui/react-select** `^2.1.1` - Select personnalisé
- **@radix-ui/react-separator** `^1.1.0` - Séparateurs
- **@radix-ui/react-slider** `^1.2.0` - Sliders
- **@radix-ui/react-slot** `^1.1.0` - Composition de composants
- **@radix-ui/react-switch** `^1.1.0` - Toggle switches
- **@radix-ui/react-tabs** `^1.1.0` - Onglets
- **@radix-ui/react-toast** `^1.2.1` - Notifications toast
- **@radix-ui/react-tooltip** `^1.1.2` - Tooltips

### Animations
- **framer-motion** `latest` - Librairie d'animations React

### Icons
- **lucide-react** `^0.446.0` - Icônes modernes et personnalisables

### Forms & Validation
- **react-hook-form** `^7.53.0` - Gestion de formulaires
- **@hookform/resolvers** `^3.9.0` - Resolvers pour validation
- **zod** `^3.23.8` - Validation de schémas TypeScript

### Thèmes
- **next-themes** `^0.3.0` - Dark/Light mode pour Next.js

### Carousel
- **embla-carousel-react** `^8.3.0` - Carousel performant

### Date
- **date-fns** `^3.6.0` - Manipulation de dates
- **react-day-picker** `^8.10.1` - Date picker

### Utilities
- **class-variance-authority** `^0.7.0` - Variants de composants
- **cmdk** `^1.0.0` - Command palette
- **input-otp** `^1.2.4` - Input OTP
- **react-resizable-panels** `^2.1.3` - Panels redimensionnables
- **sonner** `^1.5.0` - Toasts élégants
- **vaul** `^0.9.9` - Drawer mobile

### Charts (optionnel)
- **recharts** `^2.12.7` - Graphiques React

## 🛠️ Dev Dependencies

### Linting
- **eslint** `8.49.0` - Linter JavaScript/TypeScript
- **eslint-config-next** `13.5.1` - Config ESLint pour Next.js

### Types
- **@types/node** `20.6.2` - Types Node.js
- **@types/react** `18.2.22` - Types React
- **@types/react-dom** `18.2.7` - Types React DOM

### Build
- **@next/swc-wasm-nodejs** `13.5.1` - Compilateur SWC

## 📊 Taille des dépendances

### Estimations
- **node_modules/** : ~500 MB (après installation)
- **Build final (.next/)** : ~10-15 MB
- **Export statique (out/)** : ~5 MB

### Bundle JavaScript (First Load)
- **Shared** : ~79.3 kB
- **Page principale** : ~154 kB (total)

## 🔄 Mises à jour

### Vérifier les mises à jour
```bash
npm outdated
```

### Mettre à jour les dépendances
```bash
# Mises à jour mineures (recommandé)
npm update

# Mises à jour majeures (tester d'abord)
npx npm-check-updates -u
npm install
```

### Sécurité
```bash
# Audit de sécurité
npm audit

# Corriger les vulnérabilités
npm audit fix
```

## ⚠️ Notes importantes

### Version Node.js requise
- **Minimum** : Node.js 18.x
- **Recommandé** : Node.js 18.x ou 20.x

### Compatibilité
- Toutes les dépendances sont compatibles React 18
- Next.js 13 utilise l'App Router (nouveau système)

### Performance
- Les composants Radix UI sont optimisés
- Framer Motion utilise le GPU pour animations
- Tailwind CSS purge automatiquement le CSS inutilisé

### Dépendances optionnelles

Vous pouvez retirer si non utilisées :
- **recharts** - Si pas de graphiques
- **react-day-picker** - Si pas de date picker
- **input-otp** - Si pas d'OTP
- **cmdk** - Si pas de command palette

## 🔒 Sécurité

### Packages de confiance
Tous les packages utilisés sont :
- ✅ Maintenus activement
- ✅ Largement utilisés (millions de téléchargements)
- ✅ Open source vérifiés
- ✅ Sans vulnérabilités critiques connues

### Audit régulier
```bash
# Avant déploiement
npm audit
npm audit fix

# Si problèmes critiques
npm audit fix --force  # Avec précaution !
```

## 📈 Alternatives possibles

### Animation
- **react-spring** - Alternative à Framer Motion
- **GSAP** - Plus puissant mais payant (version pro)

### Forms
- **Formik** - Alternative à React Hook Form
- **Final Form** - Plus léger

### Styling
- **styled-components** - CSS-in-JS
- **emotion** - Alternative styled-components

### UI Components
- **Chakra UI** - Framework complet
- **Mantine** - Framework moderne
- **Material-UI** - Google Material Design

*Note : Le choix actuel (shadcn/ui + Tailwind) est optimal pour le contrôle total et la customisation.*

## 🎯 Pourquoi ces choix ?

### shadcn/ui
- ✅ Composants copiés dans le projet (ownership)
- ✅ Customisation totale
- ✅ Pas de dépendance lourde
- ✅ Accessible par défaut

### Tailwind CSS
- ✅ Utility-first très productif
- ✅ Bundle size minimal
- ✅ Design system intégré
- ✅ Responsive facilité

### Framer Motion
- ✅ Animations déclaratives
- ✅ Performance GPU
- ✅ API intuitive
- ✅ TypeScript support

### Next.js 13
- ✅ App Router moderne
- ✅ React Server Components
- ✅ Static export
- ✅ Optimisations automatiques

---

**Dernière mise à jour** : Décembre 2024
