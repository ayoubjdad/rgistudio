import ImageWithText from "../../layouts/image-with-text/ImageWithText";
import CustomSlider from "../../layouts/slider/Slider";
import TextCenter from "../../layouts/text-center/TextCenter";
import TextWithImage from "../../layouts/text-with-image/TextWithImage";
import styles from "./Services.module.scss";

export default function Services() {
  const printServices = [
    "Conception graphique (logos, chartes graphiques, supports visuels)",
    "Impression cartes de visite, flyers, brochures, catalogues",
    "Packaging & étiquettes produits",
    "Signalétique (panneaux, kakémonos, banderoles, affiches grand format)",
    "PLV (Publicité sur Lieu de Vente)",
    "Papeterie d’entreprise (en-têtes, enveloppes, carnets personnalisés)",
  ];

  const digitalServices = [
    "Stratégie digitale & conseil en communication",
    "Campagnes publicitaires (Google Ads, Meta Ads, LinkedIn Ads)",
    "Email marketing & newsletters",
    "SEO (référencement naturel)",
    "SEA (référencement payant)",
    "Content marketing (articles, visuels, vidéos, motion design)",
    "Community management et modération",
    "E-réputation & gestion des avis en ligne",
  ];

  const webServices = [
    "Création de sites vitrines",
    "Développement de sites vitrines",
    "Intégration CMS (WordPress, Shopify, Prestashop…)",
    "Développement sur-mesure (applications web et mobiles)",
    "Maintenance & support technique",
    "Hébergement et gestion de serveurs",
    "Intégration CRM / ERP",
    "Automatisation des processus (chatbots, formulaires intelligents, workflows)",
  ];

  return (
    <section className={styles.main}>
      <ImageWithText
        header="Des solutions complètes pour votre communication"
        subHeader="De la créativité print à la performance digitale, en passant par le développement web, nous accompagnons votre entreprise pour bâtir une image forte et cohérente."
      />
      <TextCenter text="Chez RGI Studio, nous croyons qu’une communication réussie repose sur une identité visuelle forte, une stratégie digitale efficace et des outils web performants. Découvrez nos services et faites passer vos projets au niveau supérieur." />
      <TextWithImage
        header="Print & Design"
        subHeader="Cartes de visite, flyers, brochures, catalogues, signalétiques, packagings… Nous donnons vie à vos idées avec des supports imprimés créatifs et de qualité."
        services={printServices}
      />
      <ImageWithText
        header="Marketing Digital"
        subHeader="Stratégies digitales, community management, campagnes publicitaires, SEO, emailing… nous boostons votre visibilité et générons de la valeur pour votre marque."
        services={digitalServices}
        isDark
      />
      <TextWithImage
        header="Développement Web & Applications"
        subHeader="Sites vitrines, e-commerce, solutions sur-mesure, intégrations et maintenance. Nous développons des outils digitaux modernes adaptés à vos besoins."
        services={webServices}
      />
      <CustomSlider />
    </section>
  );
}
