import styles from "./Home.module.scss";
import { motion } from "framer-motion";
import logo from "../../assets/rgi-logo.png";
import { ReactComponent as Shape } from "../../assets/svg/shape.svg";
import { useNavigate } from "react-router";
import { fadeUp, scaleIn, stagger } from "../../theme/motion-effects";
import Hiring from "../../layouts/hiring/Hiring";
import Instagram from "../../layouts/instagram/Instagram";

const partners = [
  "https://www.wikiberal.org/images/c/c3/Logo_Google.png",
  "https://scontent.frba1-3.fna.fbcdn.net/v/t39.30808-6/492367306_1235766805222082_2646535807164320395_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF1oYTOBT8niskKgxQfEKqfYNyocpdg90Bg3Khyl2D3QCZQdfwIhoTeTYpK3hdPLQb-Qg27_YTcX5UHCi5kv7tB&_nc_ohc=wuHE1B-X9kEQ7kNvwEul4M2&_nc_oc=Admnhh7TdRom5q9X61_-sCrKszT2hYYOQa1p2ioHGAcUbZM-GzLOD8gwcvLyPjQ-mqY&_nc_zt=23&_nc_ht=scontent.frba1-3.fna&_nc_gid=-RrScwv1Ye7uuLOgWQqs4Q&oh=00_AftJPJhX0O_R7oa93LS5_K69_-YISRpKQkXz4jOm7Yw2Tw&oe=699A3A0A",
  "https://www.wikiberal.org/images/c/c3/Logo_Google.png",
  "https://www.wikiberal.org/images/c/c3/Logo_Google.png",
  "https://www.wikiberal.org/images/c/c3/Logo_Google.png",
  "https://www.wikiberal.org/images/c/c3/Logo_Google.png",
  "https://www.wikiberal.org/images/c/c3/Logo_Google.png",
  "https://www.wikiberal.org/images/c/c3/Logo_Google.png",
];

const services = [
  {
    name: "Impression tout type",
    icon: "fi fi-rs-print",
    shortDescription: "Supports imprimés pour tous vos besoins.",
    longDescription:
      "Conception graphique et impression de tous types de supports de communication : cartes de visite, flyers, brochures, affiches, bâches, roll-up et autres supports marketing imprimés. Idéal pour renforcer votre image et marquer les esprits.",
    tags: ["impression", "flyers", "cartes de visite", "brochures", "affiches"],
  },
  {
    name: "Grand format & signalétique",
    icon: "fi fi-rs-grid-dividers",
    shortDescription: "Affichage grand format pour événements et entreprises.",
    longDescription:
      "Création et impression de supports grand format : panneaux, roll-ups, bannières, PLV et affichage événementiel. Parfait pour attirer l’attention sur vos salons, événements ou devantures de magasin.",
    tags: ["signalétique", "bannières", "roll-up", "PLV", "panneaux"],
  },
  {
    name: "Branding & identité",
    icon: "fi fi-rs-sparkles",
    shortDescription: "Construisez une identité forte et cohérente.",
    longDescription:
      "Création complète de votre identité visuelle : logos, chartes graphiques, systèmes de marque, packaging et storytelling visuel. Chaque élément est conçu pour transmettre vos valeurs et marquer les esprits.",
    tags: [
      "logo",
      "charte graphique",
      "branding",
      "identité visuelle",
      "packaging",
    ],
  },
  {
    name: "Site Vitrine",
    icon: "fi fi-rs-globe",
    shortDescription: "Sites web modernes, rapides et responsives.",
    longDescription:
      "Création de sites web vitrines, e-commerce, landing pages ou plateformes personnalisées. Optimisés pour l'expérience utilisateur, la performance et le référencement naturel, ils vous aident à attirer et convertir vos visiteurs.",
    tags: [
      "site web",
      "vitrine",
      "e-commerce",
      "landing page",
      "développement web",
    ],
  },
  {
    name: "Application Mobile (Android et iOS)",
    icon: "fi fi-rs-mobile",
    shortDescription: "Applications mobiles natives et cross-platform.",
    longDescription:
      "Développement d’applications mobiles performantes pour Android et iOS. Interfaces intuitives, expérience utilisateur fluide, compatibilité multi-appareils et optimisation pour les performances et la sécurité.",
    tags: ["mobile", "android", "ios", "app mobile", "UX/UI"],
  },
  {
    name: "Applications Web (SaaS et CRM)",
    icon: "fi fi-rs-apps",
    shortDescription: "Applications web sur mesure et performantes.",
    longDescription:
      "Développement d’applications web personnalisées : dashboards, CRM, plateformes SaaS ou outils internes. Technologie moderne, sécurité renforcée et évolutivité pour répondre à vos besoins spécifiques.",
    tags: ["web app", "SaaS", "CRM", "dashboard", "développement web"],
  },
  // {
  //   name: "Référencement naturel SEO",
  //   icon: "fi fi-rs-search",
  //   shortDescription: "Améliorez votre visibilité sur Google.",
  //   longDescription:
  //     "Optimisation complète pour le SEO : audit technique, structure du site, contenu, mots-clés, optimisation locale et backlinks. Votre site gagne en visibilité et attire un trafic organique qualifié sur les moteurs de recherche.",
  //   tags: ["SEO", "référencement", "trafic organique", "Google", "backlinks"],
  // },
  // {
  //   name: "Publicité Google Ads",
  //   icon: "fi fi-rs-megaphone",
  //   shortDescription: "Campagnes Google Ads performantes.",
  //   longDescription:
  //     "Création et gestion de campagnes publicitaires sur Google Ads pour générer du trafic qualifié et maximiser votre ROI. Inclut ciblage précis, optimisation des enchères et suivi des conversions.",
  //   tags: [
  //     "publicité",
  //     "Google Ads",
  //     "SEA",
  //     "trafic payant",
  //     "marketing digital",
  //   ],
  // },
  {
    name: "Community Management",
    icon: "fi fi-rs-users",
    shortDescription: "Animation et gestion de vos réseaux sociaux.",
    longDescription:
      "Gestion complète de vos réseaux sociaux : création de contenu, planification, animation de communauté, stratégie digitale et engagement des abonnés. Renforcez votre présence en ligne et votre relation client.",
    tags: [
      "community",
      "réseaux sociaux",
      "gestion de contenu",
      "engagement",
      "social media",
    ],
  },
];

const jobsOpened = [
  {
    tags: ["Design graphique", "Temps plein"],
    title: "Senior Brand & Print Designer",
    link: "#",
  },
  {
    tags: ["Développement", "Temps plein"],
    title: "Développeur Frontend Web (React)",
    link: "#",
  },
  {
    tags: ["Marketing", "Temps plein"],
    title: "Spécialiste Marketing",
    link: "#",
  },
  {
    tags: ["Production", "Sur site"],
    title: "Responsable Production Impression",
    link: "#",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.hero_container}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.hero_left} variants={stagger}>
            <motion.h1 variants={fadeUp}>
              Impression, branding & solutions digitales pour développer votre
              entreprise
            </motion.h1>
            <motion.p variants={fadeUp}>
              Nous concevons, imprimons et développons des expériences à fort
              impact — de la production imprimée premium et du branding visuel
              aux sites web, plateformes SaaS et applications mobiles conçus
              pour convertir et évoluer.
            </motion.p>

            <motion.div className={styles.hero_buttons} variants={fadeUp}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${styles.hero_button} ${styles.hero_button_secondary}`}
                onClick={() => navigate("/get-a-quote")}
              >
                Demander un devis
                <i className="fi fi-rs-arrow-small-right"></i>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.hero_button}
                onClick={() => navigate("/work")}
              >
                Voir nos réalisations
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.hero_right}
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            <GlowShape />

            <motion.div className={styles.hero_cards} variants={stagger}>
              <motion.div className={styles.hero_card} variants={fadeUp}>
                <h1>100+</h1>
                <hr />
                <p>
                  projets imprimés livrés avec une qualité constante et des
                  délais rapides
                </p>
              </motion.div>
              <motion.div className={styles.hero_card} variants={fadeUp}>
                <h1>70+</h1>
                <hr />
                <p>
                  marques accompagnées grâce au design, marketing et croissance
                  digitale
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* PRESENTATION */}
      <motion.section
        className={styles.presentation}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.presentation_container}>
          <motion.p variants={fadeUp}>
            <span>Chez RGI Studio</span>, nous combinons impression haut de
            gamme, branding créatif et innovation digitale pour aider les
            entreprises à se démarquer, mieux communiquer et grandir plus
            rapidement — en ligne et hors ligne.
          </motion.p>
          <motion.p variants={fadeUp}>
            De la carte de visite au panneau publicitaire, des landing pages aux
            plateformes SaaS, nous livrons des solutions évolutives conçues pour
            la performance, la durabilité et l’impact de marque à long terme.
          </motion.p>
        </div>
      </motion.section>

      {/* PRODUCTS / SERVICES */}
      <motion.section
        className={styles.products}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.products_container}>
          <motion.div className={styles.products_header} variants={fadeUp}>
            <div className={styles.products_left}>
              <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                360°
              </motion.h1>
            </div>
            <div className={styles.products_right}>
              <div className={styles.products_smallTitle}>
                <h3 className={styles.products_title}>
                  services<span>.</span>
                </h3>
                <p>
                  Une agence de production et digitale complète couvrant
                  impression, design, marketing, plateformes web et applications
                  mobiles — tout sous un même toit.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div className={styles.products_content} variants={stagger}>
            {services.map((product, index) => (
              <motion.div
                key={index}
                className={styles.product}
                variants={fadeUp}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <div className={styles.product_info}>
                  <motion.div
                    initial={{ scale: 0.6, rotate: -15, opacity: 0 }}
                    whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(254, 80, 17)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                    }}
                  >
                    <i className={product.icon} style={{ fontSize: 24 }} />
                  </motion.div>
                  <h3>{product.name}</h3>
                  <p>{product.shortDescription}</p>
                </div>
                <div className={styles.product_image}>
                  <img
                    src="https://framerusercontent.com/images/8XqwUzzsLJM74vFK57g4JBMUzk.png"
                    alt=""
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            className={`${styles.hero_button} ${styles.hero_button_secondary}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeUp}
            onClick={() => navigate("/services")}
          >
            Explorer tous les services
            <i className="fi fi-rs-arrow-small-right"></i>
          </motion.button>
        </div>
      </motion.section>

      {/* PROCESS (NEW SECTION — MATCHES YOUR DESIGN SYSTEM) */}
      <motion.section
        className={styles.keyNumbers}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.keyNumbers_container}>
          <motion.div className={styles.keyNumbers_title}>
            <h1>
              Notre processus<span>.</span>
            </h1>
            <p>
              De l’idée à la livraison, nous gérons chaque étape — stratégie,
              design, production, développement et déploiement — avec précision
              et cohérence.
            </p>
          </motion.div>

          <motion.div className={styles.keyNumbers_content_wrapper}>
            <motion.div className={styles.keyNumbers_content}>
              <motion.div className={styles.keyNumbers_content_left}>
                <h1>01</h1>
                <p>
                  <b>Stratégie & conseil</b> — comprendre votre activité, votre
                  marché et vos objectifs
                </p>
                <GlowShape />
              </motion.div>

              <motion.div className={styles.keyNumbers_content_right}>
                <h1>02</h1>
                <p>
                  <b>Design & création</b> — branding, visuels, UX/UI et
                  contenus conçus pour l’impact
                </p>
              </motion.div>
            </motion.div>

            <motion.div className={styles.keyNumbers_content_bottom}>
              <motion.div className={styles.keyNumbers_content_bottom_text}>
                <h1>03</h1>
                <p>
                  <b>Production & développement</b> — impression premium,
                  plateformes web, SaaS et applications mobiles
                </p>
              </motion.div>

              <MotionVideo />
            </motion.div>

            <motion.div className={styles.keyNumbers_content}>
              <motion.div className={styles.keyNumbers_content_right}>
                <h1>04</h1>
                <p>
                  <b>Croissance & optimisation</b> — marketing, analytics et
                  amélioration continue
                </p>
              </motion.div>

              <motion.div className={styles.keyNumbers_content_left_bottom}>
                <h1>05</h1>
                <p>
                  <b>Lancement & distribution</b> — logistique, déploiement et
                  mise en ligne
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* PARTNERS */}
      <motion.section
        className={styles.partners}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.partners_container}>
          <motion.div className={styles.partners_title} variants={fadeUp}>
            <h1>
              Nos partenaires<span>.</span>
            </h1>
            <p>
              Faites partie de l'aventure, des entreprises performantes nous
              font déjà confiance
            </p>
          </motion.div>

          <motion.div
            className={styles.partners_track}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
          >
            {[...partners, ...partners].map((item, index) => (
              <div key={index} className={styles.partners_header_item}>
                <img src={item} alt="" className={styles.partners_logo} />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* OUR TEAM */}
      <motion.section
        className={styles.ourTeam}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.ourTeam_container}>
          <motion.div className={styles.ourTeam_title} variants={fadeUp}>
            <h1>
              Notre équipe<span>.</span>
            </h1>
            <p>
              Designers, imprimeurs, développeurs et marketeurs travaillant
              ensemble pour offrir une exécution de haute qualité sur les
              expériences physiques et digitales.
            </p>
          </motion.div>

          <motion.div
            className={styles.ourTeam_content_wrapper}
            variants={stagger}
          >
            <motion.div className={styles.ourTeam_content} variants={fadeUp}>
              <motion.img
                src="https://framerusercontent.com/images/buZgrBSPTLLdUd6qW7p83vduUA.jpg?scale-down-to=2048&width=5328&height=4000"
                className={styles.ourTeam_image_large}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 180 }}
              />
              <motion.img
                src="https://framerusercontent.com/images/x19uVpPtOO9Btagp9VmrahtUQ.jpg?scale-down-to=512&width=5328&height=4000"
                className={styles.ourTeam_image_small}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 180 }}
              />
            </motion.div>
            <motion.img
              src="https://framerusercontent.com/images/buZgrBSPTLLdUd6qW7p83vduUA.jpg?scale-down-to=2048&width=5328&height=4000"
              className={styles.ourTeam_image_big}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 180 }}
            />
            <motion.div className={styles.ourTeam_content} variants={fadeUp}>
              <motion.img
                src="https://framerusercontent.com/images/x19uVpPtOO9Btagp9VmrahtUQ.jpg?scale-down-to=512&width=5328&height=4000"
                className={styles.ourTeam_image_small}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 180 }}
              />
              <motion.img
                src="https://framerusercontent.com/images/buZgrBSPTLLdUd6qW7p83vduUA.jpg?scale-down-to=2048&width=5328&height=4000"
                className={styles.ourTeam_image_large}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 180 }}
              />
            </motion.div>

            {/* <div className={styles.ourTeam_buttons}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${styles.ourTeam_button} ${styles.ourTeam_button_secondary}`}
              >
                Rejoindre notre équipe
                <i className="fi fi-rs-arrow-small-right"></i>
              </motion.button>
            </div> */}
          </motion.div>
        </div>
      </motion.section>

      {/* WE ARE HIRING */}
      <Hiring />

      {/* INSTAGRAM */}
      <Instagram />
    </>
  );
}

const MotionVideo = () => {
  return (
    <motion.div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        perspective: 900,
        willChange: "transform",
      }}
    >
      <motion.video
        src="https://framerusercontent.com/assets/OIgm9zKi72y7IttffNKf15uihks.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100px",
          objectFit: "cover",
          transformStyle: "preserve-3d",
          boxShadow: "0 40px 80px rgba(0,0,0,0.25)",
        }}
      />
    </motion.div>
  );
};

const GlowShape = () => {
  return (
    <div className={styles.glowShape}>
      <div style={{ height: "100%", width: "100%" }}>
        <Shape />
      </div>
    </div>
  );
};
