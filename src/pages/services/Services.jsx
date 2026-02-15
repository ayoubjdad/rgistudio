import styles from "./Services.module.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fadeUp, scaleIn, stagger } from "../../theme/motion-effects";

const services = [
  {
    name: "Branding & Identité",
    description:
      "Stratégie de marque, logos, design packaging et storytelling visuel pour créer reconnaissance et confiance.",
    tags: ["Stratégie de marque", "Logos", "Packaging", "Systèmes visuels"],
  },
  {
    name: "Impression commerciale",
    description:
      "Impression offset et digitale premium pour brochures, catalogues, magazines, livres et supports marketing.",
    tags: ["Offset", "Digital", "Finitions", "Contrôle qualité"],
  },
  {
    name: "Grand format & signalétique",
    description:
      "Solutions de signalétique à fort impact pour retail, expositions, campagnes outdoor et environnements de marque.",
    tags: ["Panneaux", "PLV", "Expositions", "Affichage retail"],
  },
  {
    name: "Sites web & plateformes",
    description:
      "Sites marketing performants, dashboards et portails conçus pour la rapidité et la conversion.",
    tags: ["React", "SEO", "Performance", "CMS"],
  },
  {
    name: "Applications SaaS & mobiles",
    description:
      "Plateformes SaaS évolutives et applications mobiles construites pour la croissance, la sécurité et la performance.",
    tags: ["SaaS", "iOS", "Android", "Cloud"],
  },
  {
    name: "Marketing digital & croissance",
    description:
      "SEO, campagnes payantes, réseaux sociaux et stratégies de croissance pilotées par l’analyse.",
    tags: ["SEO", "Publicités", "Analytics", "CRO"],
  },
  {
    name: "Design UI/UX",
    description:
      "Recherche utilisateur, design d’interface et optimisation d’expérience pour des produits appréciés.",
    tags: ["Recherche UX", "Design UI", "Prototypage", "Tests"],
  },
  {
    name: "Production & logistique",
    description:
      "Production, gestion et distribution de bout en bout sur marchés locaux et internationaux.",
    tags: ["Stockage", "Livraison", "Fulfillment", "Supply chain"],
  },
  {
    name: "Solutions Startup & MVP",
    description:
      "Validation rapide, développement MVP et systèmes évolutifs pour startups en croissance.",
    tags: ["MVP", "Stratégie produit", "Prototypage", "Croissance"],
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <>
      <section className={styles.servicesHero}>
        <motion.div
          className={styles.servicesHero_container}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.servicesHero_left} variants={stagger}>
            <motion.h1 variants={fadeUp}>
              Services complets<span>.</span>
            </motion.h1>
            <motion.p variants={fadeUp}>
              De la stratégie et du design à la production, au développement et
              à la croissance — nous livrons des solutions intégrées couvrant
              impression, branding, plateformes digitales et marketing.
            </motion.p>

            <motion.div
              className={styles.servicesHero_buttons}
              variants={fadeUp}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${styles.servicesHero_button} ${styles.servicesHero_button_secondary}`}
                onClick={() => navigate("/contact")}
              >
                Demander un devis
                <i className="fi fi-rs-arrow-small-right" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.servicesHero_button}
                onClick={() => navigate("/work")}
              >
                Voir nos réalisations
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.servicesHero_right}
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className={styles.servicesHero_stats}
              variants={stagger}
            >
              <motion.div
                className={styles.servicesHero_stat}
                variants={fadeUp}
              >
                <h1>15+</h1>
                <hr />
                <p>années d’excellence en impression, branding et digital</p>
              </motion.div>

              <motion.div
                className={styles.servicesHero_stat}
                variants={fadeUp}
              >
                <h1>300+</h1>
                <hr />
                <p>marques accompagnées dans différents secteurs</p>
              </motion.div>

              <motion.div
                className={styles.servicesHero_stat}
                variants={fadeUp}
              >
                <h1>50K+</h1>
                <hr />
                <p>projets livrés sur supports physiques et digitaux</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        className={styles.servicesOverview}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.servicesOverview_container}>
          <motion.p variants={fadeUp}>
            <span>Chez RGI Studio</span>, nous agissons comme une agence de
            production et digitale complète — combinant impression premium,
            branding créatif et développement logiciel avancé.
          </motion.p>
          <motion.p variants={fadeUp}>
            Que vous ayez besoin de production physique, de plateformes
            digitales ou de marketing performant, nos équipes intégrées assurent
            cohérence, rapidité et résultats mesurables.
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        className={styles.servicesCategories}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.servicesCategories_container}>
          <motion.div
            className={styles.servicesCategories_header}
            variants={fadeUp}
          >
            <div className={styles.servicesCategories_left}>
              <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                360°
              </motion.h1>
            </div>

            <div className={styles.servicesCategories_right}>
              <div className={styles.servicesCategories_smallTitle}>
                <h3 className={styles.servicesCategories_title}>
                  services<span>.</span>
                </h3>
                <p>
                  Un écosystème complet — du concept à la création, production,
                  lancement et croissance à long terme.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div className={styles.servicesGrid} variants={stagger}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={styles.serviceCard}
                variants={fadeUp}
                whileHover={{ y: -12, scale: 1.02 }}
              >
                <div className={styles.serviceCard_info}>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>

                  <div className={styles.serviceCard_tags}>
                    {service.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section className={styles.servicesProcess}>
        <div className={styles.servicesProcess_container}>
          <motion.div className={styles.servicesProcess_title}>
            <h1>
              Notre méthode<span>.</span>
            </h1>
            <p>
              Une approche structurée garantissant qualité, cohérence et
              résultats.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section className={styles.servicesCTA}>
        <div className={styles.servicesCTA_container}>
          <motion.h1>
            Construisons quelque chose d’impactant<span>.</span>
          </motion.h1>

          <motion.p>
            Impression premium, branding, plateformes web ou stratégies de
            croissance — notre équipe est prête à vous accompagner.
          </motion.p>

          <motion.button
            className={`${styles.servicesHero_button} ${styles.servicesHero_button_secondary}`}
            onClick={() => navigate("/contact")}
          >
            Démarrer un projet
            <i className="fi fi-rs-arrow-small-right" />
          </motion.button>
        </div>
      </motion.section>
    </>
  );
}
