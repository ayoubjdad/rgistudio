import ImageWithText from "../../layouts/image-with-text/ImageWithText";
import CustomSlider from "../../layouts/slider/Slider";
import TextCenter from "../../layouts/text-center/TextCenter";
import TextWithImage from "../../layouts/text-with-image/TextWithImage";
import styles from "./Services.module.scss";
import tshirt from "../../assets/images/tshirt.jpg";

export default function Services() {
  const printServices = [
    "Identité visuelle complète (logos, chartes graphiques, univers de marque)",
    "Création et impression de cartes de visite, flyers, brochures et catalogues",
    "Packaging & étiquettes sur mesure",
    "Signalétique intérieure et extérieure (panneaux, kakémonos, affiches grand format)",
    "PLV et supports de communication pour points de vente",
    "Papeterie professionnelle (en-têtes, enveloppes, carnets, dossiers)",
  ];

  const digitalServices = [
    "Stratégie digitale & accompagnement marketing",
    "Campagnes publicitaires multicanales (Google Ads, Meta Ads, LinkedIn Ads)",
    "Email marketing & séquences automatisées",
    "SEO avancé (audits, optimisation, contenus)",
    "SEA : gestion et optimisation des campagnes payantes",
    "Création de contenus (visuels, vidéos, articles, motion design)",
    "Community management & animation des réseaux sociaux",
    "Gestion de l’e-réputation & modération",
  ];

  const webServices = [
    "Création de sites vitrines et corporate",
    "Développement de boutiques e-commerce",
    "Intégration CMS (WordPress, Shopify, Prestashop…)",
    "Développement sur-mesure (applications web & mobiles)",
    "Maintenance, support & optimisation des performances",
    "Hébergement, gestion de serveurs & sécurité",
    "Intégration d’outils métiers : CRM, ERP, API, connecteurs",
    "Automatisation et workflows intelligents (chatbots, formulaires dynamiques)",
  ];

  const printTags = [
    "Logo Design",
    "Brand Identity",
    "Packaging",
    "Motion Design",
    "Printing",
  ];

  const digitalTags = [
    "Marketing",
    "SEO",
    "Email Marketing",
    "Social Media",
    "Content Creation",
  ];

  const webServicesTags = [
    "UX/UI",
    "Website",
    "Landing Page",
    "Figma",
    "Wireframes",
    "Moodboard",
    "Design System",
    "Responsive Designs",
  ];

  return (
    <section className={styles.main}>
      <ImageWithText
        image={tshirt}
        header="Des solutions globales pour propulser votre communication"
        subHeader="Du design print au marketing digital, en passant par le développement web et applicatif, RGI Studio vous accompagne à chaque étape de votre croissance pour renforcer votre visibilité et votre impact."
      />
      <TextCenter text="Chez RGI Studio, nous créons des expériences visuelles cohérentes et performantes. Notre mission : allier créativité, stratégie et technologie pour vous offrir des solutions sur mesure qui font réellement la différence." />
      <TextWithImage
        id="print"
        image={tshirt}
        header="Print & Design"
        subHeader="Cartes de visite, flyers, brochures, catalogues, signalétiques, packagings… Nous donnons vie à vos idées avec des supports imprimés créatifs et de qualité."
        services={printServices}
        tags={printTags}
      />
      <ImageWithText
        id="digital"
        image={tshirt}
        header="Branding & Marketing Digital"
        subHeader="Nous élaborons des stratégies digitales performantes pour développer votre visibilité, attirer de nouveaux clients et optimiser votre présence en ligne."
        services={digitalServices}
        isDark
        tags={digitalTags}
      />
      <TextWithImage
        id="web"
        image={tshirt}
        header="Développement Web & Applications"
        subHeader="Nous concevons des sites et applications modernes, rapides et sécurisés, adaptés à vos objectifs et à vos contraintes métiers."
        services={webServices}
        tags={webServicesTags}
      />
      <CustomSlider />
    </section>
  );
}
