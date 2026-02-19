import styles from "./Services.module.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fadeUp, scaleIn, stagger } from "../../theme/motion-effects";
import { services } from "../../data/global.data";

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
                style={{ "grid-column": index === 2 ? "span 2" : "span 1" }}
              >
                <div className={styles.serviceCard_info}>
                  <p>0{index + 1}/</p>
                  <h1>{service.name}</h1>
                  <p>{service.shortDescription}</p>
                  <div className={styles.serviceCard_tags}>
                    {service.allServices.map((serviceName, i) => (
                      <motion.span key={i} variants={stagger}>
                        {serviceName}
                      </motion.span>
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
              Construisons quelque chose d’impactant<span>.</span>
            </h1>
            <p>
              Impression premium, branding, plateformes web ou stratégies de
              croissance — notre équipe est prête à vous accompagner.
            </p>
          </motion.div>
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
