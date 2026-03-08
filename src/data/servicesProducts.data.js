/**
 * Catalogue détaillé des produits et services par catégorie
 * Chaque service a des catégories avec une liste de produits
 */
export const servicesProducts = {
  print: {
    name: "Impression — tous types",
    icon: "fi fi-rs-print",
    categories: [
      {
        name: "Cartes de visite",
        items: [
          "Standard",
          "Carré",
          "Coins arrondis",
          "Soft Touch",
          "Encre métallisé",
          "Pas cher / Promo",
          "Taille sur mesure",
          "Aimanté",
          "Papier spécial",
          "ICE WHITE",
          "OYSTER SHELL",
          "ACQUERELLO",
          "Papier texturé",
          "Luxe",
          "Vernis sélectif 3D",
          "Dorure en relief 3D",
          "Dorure à chaud",
          "Tranche colorée",
          "Recyclée (Kraft Brun, Oikos Blanc)",
          "Double",
          "2 volets",
        ],
      },
      {
        name: "Cartes rigides",
        items: ["PVC", "PVC transparent", "Badge petit format PVC"],
      },
      {
        name: "Cartes rendez-vous & fidélité",
        items: ["Carte rendez-vous pliée", "Carte de fidélité", "Carte à gratter"],
      },
      {
        name: "Cartes événements",
        items: [
          "Invitation de mariage",
          "Carte postale personnalisée",
          "Accroche-porte personnalisé",
          "Carte d'invitation",
          "Carte de vœux sur mesure",
          "Marque-page personnalisé",
          "Carte perforée",
          "Hang Tag - Carte vêtement avec trou",
        ],
      },
      {
        name: "Flyers & dépliants",
        items: ["Flyers", "Dépliant", "Catalogue", "Brochures"],
      },
      {
        name: "Papeterie & bureautique",
        items: ["Papeterie", "Bureautique"],
      },
      {
        name: "Packaging & étiquettes",
        items: ["Boîtes packaging", "Étiquettes adhésives"],
      },
      {
        name: "Affiches & posters",
        items: ["Affiche", "Poster"],
      },
      {
        name: "Roll-up & PLV",
        items: ["Roll-up", "PLV", "Support souple", "Support rigide"],
      },
      {
        name: "Autres",
        items: ["Photos souvenirs", "Goodies & gadgets", "Menus restaurant"],
      },
    ],
  },
  marketing: {
    name: "Marketing digital, branding & design graphique",
    icon: "fi fi-rs-sparkles",
    categories: [
      {
        name: "Identité visuelle",
        items: [
          "Logo",
          "Charte graphique",
          "Guidelines de marque",
          "Système de marque complet",
          "Storytelling visuel",
        ],
      },
      {
        name: "Design graphique",
        items: [
          "Création visuelle",
          "Packaging design",
          "Supports de communication",
          "Mise en page",
          "Infographies",
          "Illustrations",
        ],
      },
      {
        name: "Stratégie marketing digital",
        items: [
          "Audit digital",
          "Stratégie de contenu",
          "Stratégie réseaux sociaux",
          "Plan marketing",
        ],
      },
      {
        name: "SEO & référencement",
        items: [
          "Audit SEO",
          "Optimisation on-page",
          "Référencement local",
          "Link building",
        ],
      },
      {
        name: "Publicité en ligne",
        items: [
          "Google Ads",
          "Meta Ads (Facebook, Instagram)",
          "LinkedIn Ads",
          "Campagnes display",
          "Remarketing",
        ],
      },
      {
        name: "Community management",
        items: [
          "Gestion réseaux sociaux",
          "Création de contenu",
          "Planification éditoriale",
          "Animation de communauté",
          "Reporting & analytics",
        ],
      },
      {
        name: "Contenu & visuels",
        items: [
          "Photos produits",
          "Vidéos courtes",
          "Stories & reels",
          "Visuels publicitaires",
        ],
      },
    ],
  },
  web: {
    name: "Développement web & applications",
    icon: "fi fi-rs-globe",
    categories: [
      {
        name: "Sites web",
        items: [
          "Site vitrine",
          "Site corporate",
          "Landing page",
          "Site sur mesure",
          "Refonte de site",
        ],
      },
      {
        name: "E-commerce",
        items: [
          "Boutique en ligne",
          "Marketplace",
          "Intégration paiement",
          "Gestion stocks",
        ],
      },
      {
        name: "Applications mobiles",
        items: [
          "Application iOS",
          "Application Android",
          "Application cross-platform",
          "Application sur mesure",
        ],
      },
      {
        name: "Plateformes & SaaS",
        items: [
          "Plateforme SaaS",
          "Web app",
          "Dashboard",
          "Interface d'administration",
        ],
      },
      {
        name: "Outils métier",
        items: [
          "CRM",
          "Outils de gestion",
          "Tableaux de bord",
          "Automatisation",
        ],
      },
      {
        name: "Intégrations & technique",
        items: [
          "Intégrations API",
          "Systèmes tiers",
          "Maintenance",
          "Évolution & mises à jour",
        ],
      },
      {
        name: "UX/UI",
        items: [
          "Conception UX",
          "Design d'interface",
          "Prototypage",
          "Tests utilisateurs",
        ],
      },
    ],
  },
};
