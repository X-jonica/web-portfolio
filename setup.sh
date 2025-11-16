#!/bin/bash

# Script de setup du portfolio
echo "🚀 Configuration du portfolio..."
echo ""

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé. Veuillez l'installer depuis https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Installer les dépendances
echo "📦 Installation des dépendances..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dépendances installées avec succès"
else
    echo "❌ Erreur lors de l'installation des dépendances"
    exit 1
fi

echo ""

# Créer le fichier .env.local s'il n'existe pas
if [ ! -f .env.local ]; then
    echo "📝 Création du fichier .env.local..."
    cp .env.example .env.local
    echo "✅ Fichier .env.local créé"
    echo "⚠️  N'oubliez pas de le personnaliser avec vos informations"
else
    echo "ℹ️  Le fichier .env.local existe déjà"
fi

echo ""

# Vérifier que le dossier images existe
if [ ! -d "public/images" ]; then
    echo "📁 Création du dossier public/images..."
    mkdir -p public/images
    echo "✅ Dossier créé"
else
    echo "✅ Dossier public/images existe"
fi

echo ""

# Build du projet pour vérifier que tout fonctionne
echo "🔨 Test du build..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build réussi !"
    echo ""
    echo "🎉 Setup terminé avec succès !"
    echo ""
    echo "📋 Prochaines étapes :"
    echo "  1. Ajoutez vos images dans public/images/"
    echo "  2. Modifiez lib/constants.ts avec vos informations"
    echo "  3. Personnalisez lib/data/skills.ts et lib/data/projects.ts"
    echo "  4. Lancez le serveur : npm run dev"
    echo "  5. Visitez http://localhost:3000"
    echo ""
    echo "📚 Documentation :"
    echo "  - README.md : Guide principal"
    echo "  - CONTENT-GUIDE.md : Personnalisation du contenu"
    echo "  - DESIGN.md : Documentation design"
    echo "  - DEPLOYMENT.md : Guide de déploiement"
    echo ""
else
    echo ""
    echo "❌ Erreur lors du build"
    echo "Consultez les messages d'erreur ci-dessus"
    exit 1
fi
