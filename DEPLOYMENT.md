# Guide de déploiement

## 🚀 Déploiement sur Vercel (Recommandé)

Vercel est la plateforme idéale pour Next.js (créée par la même équipe).

### Méthode 1 : Via l'interface Vercel (Plus simple)

1. **Créer un compte Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Connectez-vous avec GitHub

2. **Importer le projet**
   - Cliquez sur "New Project"
   - Sélectionnez votre repo GitHub
   - Vercel détecte automatiquement Next.js

3. **Configuration**
   - Framework : Next.js (auto-détecté)
   - Build Command : `npm run build`
   - Output Directory : `.next` (auto)
   - Install Command : `npm install`

4. **Déployer**
   - Cliquez "Deploy"
   - Vercel construit et déploie automatiquement
   - URL : `votre-projet.vercel.app`

5. **Domaine personnalisé (optionnel)**
   - Allez dans Settings > Domains
   - Ajoutez votre domaine
   - Configurez les DNS

### Méthode 2 : Via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

### Configuration automatique

Chaque push sur la branche `main` déclenche un déploiement automatique.

Les branches feature créent des preview deployments.

## 🌐 Déploiement sur Netlify

### Via l'interface Netlify

1. **Créer un compte** sur [netlify.com](https://netlify.com)
2. **New site from Git** > Connecter GitHub
3. **Configuration** :
   - Build command : `npm run build`
   - Publish directory : `out`
   - Environment : Node 18.x

4. **Build settings** (netlify.toml) :

```toml
[build]
  command = "npm run build"
  publish = "out"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

## 📦 Build statique

Le portfolio est configuré pour export statique :

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
};
```

Cela génère des fichiers HTML/CSS/JS purs dans le dossier `out/`.

## 🔧 Variables d'environnement

### Localement

Créer `.env.local` :
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=votre.email@example.com
```

### En production (Vercel)

1. Allez dans Settings > Environment Variables
2. Ajoutez :
   - `NEXT_PUBLIC_SITE_URL` = `https://votre-domaine.com`
   - `NEXT_PUBLIC_CONTACT_EMAIL` = `votre.email@example.com`

3. Redéployez le projet

## ✅ Checklist pré-déploiement

### Contenu
- [ ] Toutes les informations personnelles sont à jour
- [ ] Les images sont ajoutées et optimisées
- [ ] Les liens sociaux sont valides
- [ ] Le lien CV fonctionne
- [ ] Les projets ont des liens GitHub/démo valides

### Technique
- [ ] `npm run build` fonctionne sans erreur
- [ ] `npm run lint` passe
- [ ] Tester en local avec `npm run start`
- [ ] Mode sombre/clair testés
- [ ] Responsive testé (mobile/tablet/desktop)

### SEO & Performance
- [ ] Meta title et description personnalisés
- [ ] Open Graph tags configurés
- [ ] Images optimisées (< 500KB)
- [ ] Lighthouse score > 90

### Sécurité
- [ ] Pas de clés API dans le code
- [ ] Variables sensibles dans `.env`
- [ ] `.env` dans `.gitignore`
- [ ] Formulaire avec honeypot anti-spam

## 🔒 Sécurité

### Headers de sécurité

Ajouter dans `next.config.js` :

```javascript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
      ],
    },
  ],
};
```

## 📊 Monitoring

### Vercel Analytics

Activer dans le dashboard Vercel :
1. Allez dans Analytics
2. Enable Analytics
3. Suivez les métriques en temps réel

### Google Analytics (optionnel)

1. Créer une propriété GA4
2. Ajouter l'ID dans `.env`
3. Ajouter le script dans `app/layout.tsx`

## 🔄 Mise à jour

### Déploiement automatique

Avec Vercel/Netlify :
1. `git add .`
2. `git commit -m "Update content"`
3. `git push origin main`
4. ✨ Déploiement automatique

### Déploiement manuel

```bash
# Build local
npm run build

# Tester le build
npm run start

# Déployer via CLI
vercel --prod
```

## 🌍 Domaine personnalisé

### Acheter un domaine

Recommandations :
- [Namecheap](https://namecheap.com)
- [Google Domains](https://domains.google)
- [OVH](https://ovh.com)

### Configurer DNS (Vercel)

1. Dans Vercel : Settings > Domains
2. Ajouter votre domaine : `votredomaine.com`
3. Configurer les DNS chez votre registrar :

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

4. Attendre propagation DNS (jusqu'à 48h)

## 🐛 Dépannage

### Build échoue

```bash
# Nettoyer cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Images ne s'affichent pas

Vérifier que les images sont dans `public/` et les chemins commencent par `/`.

### Mode sombre ne fonctionne pas

Vérifier que `next-themes` est installé et configuré dans `layout.tsx`.

### 404 sur navigation

Avec export statique, utiliser `#anchors` pour navigation interne (déjà configuré).

## 📱 PWA (optionnel)

Pour transformer en Progressive Web App :

```bash
npm install next-pwa
```

Ajouter dans `next.config.js` :

```javascript
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
  // config
});
```

## 📈 Performance

### Optimisations appliquées

- ✅ Static export pour vitesse maximale
- ✅ Code splitting automatique
- ✅ Lazy loading des images
- ✅ Minification CSS/JS
- ✅ Compression Gzip/Brotli (Vercel)

### Vérifier les performances

```bash
# Lighthouse CLI
npm install -g lighthouse
lighthouse https://votre-site.com --view
```

Ou utiliser Chrome DevTools > Lighthouse.

## 🎯 Objectifs de performance

- Performance : > 90
- Accessibility : 100
- Best Practices : > 90
- SEO : 100
- First Contentful Paint : < 1.5s
- Time to Interactive : < 3.5s

---

**Félicitations !** Votre portfolio est maintenant en ligne et accessible au monde entier.
