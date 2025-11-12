# Documentation Design - Portfolio

## 🎨 Choix de la palette de couleurs

### Philosophie

Le portfolio utilise une **palette neutre et professionnelle** inspirée des tons **gris chauds, anthracite et sable**. Ce choix répond à plusieurs objectifs :

1. **Professionnalisme** : Les tons neutres inspirent confiance et sérieux
2. **Confort visuel** : Pas de fatigue oculaire avec des couleurs criardes
3. **Versatilité** : S'adapte parfaitement au mode sombre et clair
4. **Focus sur le contenu** : La palette ne distrait pas du message principal

### Palette technique (HSL)

#### Mode clair
```css
--background: 0 0% 100%        /* Blanc pur */
--foreground: 0 0% 3.9%        /* Noir profond */
--primary: 0 0% 9%             /* Gris anthracite */
--secondary: 0 0% 96.1%        /* Gris clair */
--muted: 0 0% 96.1%            /* Gris doux */
--accent: 0 0% 96.1%           /* Accent neutre */
--border: 0 0% 89.8%           /* Bordures subtiles */
```

#### Mode sombre
```css
--background: 0 0% 3.9%        /* Noir profond */
--foreground: 0 0% 98%         /* Blanc cassé */
--primary: 0 0% 98%            /* Blanc primaire */
--secondary: 0 0% 14.9%        /* Gris foncé */
--muted: 0 0% 14.9%            /* Gris moyen */
--accent: 0 0% 14.9%           /* Accent sombre */
--border: 0 0% 14.9%           /* Bordures discrètes */
```

### Pourquoi pas de bleu, violet ou vert ?

Ces couleurs sont surutilisées dans les portfolios tech. L'objectif est de **se démarquer** avec une identité visuelle sobre et élégante qui met en valeur le contenu plutôt que les effets visuels.

## 🎯 Typographie

### Police principale : Inter

- **Famille** : Inter (Google Fonts)
- **Poids** : 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Raison** : Police moderne, lisible, optimisée pour les écrans

### Hiérarchie typographique

```
Hero Title:     5xl-7xl (60-72px)  - font-bold
Section Titles: 4xl-5xl (36-48px)  - font-bold
Card Titles:    lg-2xl (18-24px)   - font-semibold
Body Text:      base (16px)        - font-normal
Small Text:     sm (14px)          - font-normal
```

### Line-height
- **Headings** : 1.2 (120%)
- **Body** : 1.5 (150%)

## 📐 Spacing & Layout

### Système d'espacement : 8px

Tous les espacements sont des multiples de 8px pour une cohérence visuelle.

```
xs:  0.5rem (8px)
sm:  1rem   (16px)
md:  1.5rem (24px)
lg:  2rem   (32px)
xl:  3rem   (48px)
2xl: 4rem   (64px)
```

### Grid & Conteneurs

- **Container max-width** :
  - Sections standards : 1280px (max-w-6xl)
  - Sections larges : 1536px (max-w-7xl)
  - Sections étroites : 1024px (max-w-4xl)

- **Colonnes** :
  - Mobile : 1 colonne
  - Tablet (md) : 2 colonnes
  - Desktop (lg) : 2-3 colonnes selon le contenu

## 🎭 Animations & Micro-interactions

### Framer Motion

Toutes les animations utilisent Framer Motion pour une fluidité optimale.

#### Entrées de section
```typescript
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

#### Hover effects
```typescript
whileHover={{ y: -8, scale: 1.02 }}
transition={{ type: 'spring', stiffness: 300 }}
```

#### Carousel automatique
- **Durée** : 2 secondes par slide
- **Transition** : Fade (0.5s)
- **Pause** : On hover

### Compteur d'heures de code (Unique)

**Concept** : Micro-interaction qui anime un compteur montrant les heures de code estimées.

**Implémentation** :
- Position : Fixed top-right (desktop only)
- Animation : Progressive count-up (2s)
- Déclencheur : IntersectionObserver
- Style : Card avec gradient subtil

**Pourquoi c'est unique** :
- Humanise le portfolio
- Démontre la passion et l'engagement
- Interaction mémorable sans être intrusive
- Valorise l'expérience concrète

## 📱 Responsive Design

### Breakpoints Tailwind

```
sm:  640px   (Mobile landscape)
md:  768px   (Tablet portrait)
lg:  1024px  (Tablet landscape / Small desktop)
xl:  1280px  (Desktop)
2xl: 1536px  (Large desktop)
```

### Mobile Navigation

**Design** : Bottom tab bar (style application mobile)

**Raison** :
- Accès facilité avec le pouce
- UX mobile-first moderne
- Indicateur visuel de section active
- Animation layout fluide

## ♿ Accessibilité

### Conformité WCAG AA

- **Contrastes** : Minimum 4.5:1 pour texte normal, 3:1 pour texte large
- **Navigation clavier** : Tous les éléments interactifs accessibles
- **ARIA labels** : Sur tous les boutons icône et carousels
- **Focus visible** : Ring visible sur focus keyboard
- **Semantic HTML** : Balises sémantiques (header, nav, main, section, footer)

### Exemples

```typescript
// Bouton accessible
<button aria-label="Previous image">
  <ChevronLeft />
</button>

// Navigation par clavier
<nav aria-label="Main navigation">
  {/* ... */}
</nav>
```

## 🎨 Composants UI personnalisés

### Cards
- **Padding** : 1.5rem (24px)
- **Border-radius** : 0.5rem (8px)
- **Shadow** : subtile (shadow-sm) / Hover : shadow-lg
- **Transition** : 200ms ease

### Buttons
- **Primaire** : bg-primary, text-primary-foreground
- **Secondaire** : bg-secondary, border
- **Ghost** : transparent, hover:bg-accent
- **Tailles** : sm (36px), default (40px), lg (44px)

### Carousel
- **Type** : Rectangle (aspect-ratio 4:5)
- **Controls** : Prev/Next buttons + Dots indicators
- **Auto-play** : 2 secondes, pause on hover
- **Animation** : Fade transition (AnimatePresence)

## 🌟 Petite touche perso

### Compteur animé d'heures de code

**Position** : Top-right fixed (visible desktop uniquement)

**Design** :
```
┌─────────────────────────┐
│  [Icon] Heures de code  │
│                         │
│       5,000             │
│   et ça continue...     │
└─────────────────────────┘
```

**Valeur ajoutée** :
- Démontre l'engagement et la passion
- Crée un point de conversation avec recruteurs
- Humanise le portfolio technique
- Mémorable sans être distrayant

**Implémentation technique** :
- IntersectionObserver pour trigger
- Compteur animé (0 → valeur finale en 2s)
- Gradient subtil avec backdrop-blur
- Font mono pour effet "code"

## 🎯 Principes de design appliqués

1. **Hiérarchie visuelle claire** : Titres > Sous-titres > Corps > Métadonnées
2. **Contraste intentionnel** : Éléments importants se démarquent
3. **Balance & alignement** : Grid cohérent, alignements précis
4. **Mouvement** : Animations subtiles guidant l'attention
5. **Espacement généreux** : Respiration visuelle (white space)
6. **Cohérence** : Composants réutilisables, styles uniformes

## 📊 Performance

### Optimisations

- **Next.js Image** : Lazy loading automatique
- **Static Export** : Génération statique pour vitesse maximale
- **Code splitting** : Chargement progressif des composants
- **Framer Motion** : Utilise GPU pour animations fluides
- **CSS-in-JS** : Tailwind avec purge pour bundle minimal

### Métriques cibles (Lighthouse)

- Performance : > 90
- Accessibility : 100
- Best Practices : > 90
- SEO : 100

## 🔄 Maintenance & évolution

### Design tokens

Tous les tokens sont centralisés dans :
- `app/globals.css` : Variables CSS
- `lib/constants.ts` : Config JavaScript
- `tailwind.config.ts` : Configuration Tailwind

### Ajout de couleurs

Si besoin d'ajouter une couleur d'accent :
1. Définir dans `:root` et `.dark`
2. Ajouter dans `tailwind.config.ts`
3. Documenter l'usage dans ce fichier

### Extension des composants

Tous les composants sont dans `components/ui/` (shadcn/ui).
Pour personnaliser : modifier directement les fichiers.

---

**Design par HENINTSOA Hasimanitriniaina Jonica**
*Fait avec attention aux détails et passion pour l'UX*
