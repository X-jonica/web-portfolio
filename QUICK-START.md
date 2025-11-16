# Quick Start - Portfolio en 10 minutes

Guide express pour lancer votre portfolio rapidement.

## ⚡ Installation (2 min)

```bash
# 1. Cloner/télécharger le projet
cd portfolio

# 2. Installer
npm install

# 3. Lancer en développement
npm run dev
```

Visitez [http://localhost:3000](http://localhost:3000)

## ✏️ Personnalisation rapide (5 min)

### 1. Informations personnelles (1 min)

**Fichier : `lib/constants.ts`**

```typescript
export const SITE_CONFIG = {
  name: 'VOTRE NOM COMPLET',           // ← Changer
  title: 'VOTRE TITRE',                 // ← Changer
  tagline: 'Votre accroche',            // ← Changer
  cvUrl: 'LIEN_VOTRE_CV',               // ← Changer

  contact: {
    email: 'votre@email.com',           // ← Changer
    phone: '+261 XX XX XXX XX',         // ← Changer
    linkedin: 'https://...',            // ← Changer
    github: 'https://...',              // ← Changer
    facebook: 'https://...',            // ← Changer
    whatsapp: 'https://wa.me/...',      // ← Changer
  },

  codingHours: 5000,                    // ← Estimer vos heures
};
```

### 2. Ajouter vos photos (2 min)

**Dossier : `public/images/`**

Ajoutez :
- `profile-1.jpg` (portrait vertical)
- `profile-2.jpg` (portrait vertical)
- `profile-3.jpg` (portrait vertical)
- `profile-4.jpg` (portrait vertical)

**Format recommandé** : 800x1000px, JPG/PNG

### 3. Section À propos (2 min)

**Fichier : `components/sections/about.tsx`**

Ligne ~48-52 et suivantes, remplacez le texte par le vôtre :

```typescript
<p className="text-muted-foreground leading-relaxed mb-4">
  Votre présentation...
</p>
```

**Ligne ~63, changez la citation** :

```html
<blockquote className="...">
  "Votre devise ou philosophie professionnelle"
</blockquote>
```

## 🚀 Déploiement express (3 min)

### Sur Vercel

```bash
# 1. Installer Vercel CLI
npm i -g vercel

# 2. Se connecter
vercel login

# 3. Déployer
vercel --prod
```

Ou via interface :
1. Allez sur [vercel.com](https://vercel.com)
2. New Project
3. Importez votre repo GitHub
4. Deploy ✨

## 📝 Checklist minimaliste

Avant de partager votre portfolio :

- [ ] Nom, titre, tagline modifiés
- [ ] 4 photos profil ajoutées
- [ ] Lien CV mis à jour
- [ ] Contacts mis à jour (email, LinkedIn, GitHub)
- [ ] Texte "À propos" personnalisé
- [ ] Citation personnalisée
- [ ] Testé localement (`npm run dev`)
- [ ] Build réussi (`npm run build`)
- [ ] Déployé sur Vercel

## 💡 Personnalisation avancée (plus tard)

Une fois le portfolio en ligne, revenez pour :

1. **Compétences** : `lib/data/skills.ts`
   - Ajoutez vos vraies compétences
   - Niveaux réalistes
   - Exemples de projets

2. **Projets** : `lib/data/projects.ts`
   - Remplacez par vos projets réels
   - Ajoutez liens GitHub/démo
   - Défis + résultats mesurables

3. **Bibliothèque** : `components/sections/library.tsx`
   - Photos équipes (`public/images/team-X.jpg`)
   - Certificats (`public/images/cert-X.jpg`)

4. **Thème** : `app/globals.css`
   - Ajustez les couleurs si besoin
   - Gardez la palette neutre

## 🎯 Version minimale viable (MVP)

Pour avoir un portfolio présentable :

**Absolument nécessaire :**
- ✅ Nom et titre
- ✅ Photo profil (au moins 1)
- ✅ Lien CV
- ✅ Contacts (email, LinkedIn)
- ✅ Texte "À propos" personnalisé

**Peut attendre :**
- ⏳ 4 photos carousel (1 suffit au début)
- ⏳ Projets détaillés (garder les exemples)
- ⏳ Compétences détaillées (exemples OK)
- ⏳ Photos équipes et certificats

## 🔧 Problèmes fréquents

### Build échoue
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Images ne s'affichent pas
- Vérifier le chemin : `/images/nom-fichier.jpg`
- Fichier dans `public/images/`
- Nom exact (majuscules/minuscules)

### Port 3000 déjà utilisé
```bash
# Utiliser un autre port
PORT=3001 npm run dev
```

## 📚 Pour aller plus loin

**Documents à consulter :**
1. **README.md** - Guide complet
2. **CONTENT-GUIDE.md** - Personnalisation détaillée
3. **DESIGN.md** - Comprendre le design
4. **DEPLOYMENT.md** - Déploiement avancé

## ⏱️ Timeline réaliste

- **10 min** : Portfolio fonctionnel en local
- **30 min** : Portfolio personnalisé basique
- **2h** : Portfolio complet avec projets/compétences
- **1 jour** : Portfolio optimisé + domaine personnalisé

## 🎉 Vous êtes prêt !

Lancez `npm run dev` et commencez à personnaliser.

**Besoin d'aide ?** Consultez CONTENT-GUIDE.md pour les détails.

---

**Bon courage !** 🚀
