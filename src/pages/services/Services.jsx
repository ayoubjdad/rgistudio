import { useState } from "react";
import styles from "./Services.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fadeUp, scaleIn, stagger } from "../../theme/motion-effects";
import { services } from "../../data/global.data";
import { servicesProducts } from "../../data/servicesProducts.data";

export default function Services() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  const getProductsForService = (serviceId) => servicesProducts[serviceId] || null;

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
              Nos services<span>.</span>
            </motion.h1>
            <motion.p variants={fadeUp}>
              Trois expertises complémentaires pour accompagner votre marque de
              bout en bout : impression (tous types), marketing digital & design
              graphique, développement web & applications. Une offre 360° pensée
              pour la cohérence, la performance et l'impact.
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
                <h1>170+</h1>
                <hr />
                <p>projets imprimés livrés avec qualité et délais tenus</p>
              </motion.div>

              <motion.div
                className={styles.servicesHero_stat}
                variants={fadeUp}
              >
                <h1>60+</h1>
                <hr />
                <p>marques accompagnées en design, marketing et digital</p>
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
            <span>Chez RGI Studio</span>, nous regroupons trois piliers sous un
            même toit : l'impression (petit et grand format, tous supports), le
            marketing digital et le design graphique (branding, identité
            visuelle, stratégie digitale), et le développement web et
            applications (sites, e-commerce, SaaS, apps mobiles).
          </motion.p>
          <motion.p variants={fadeUp}>
            Que vous ayez besoin de supports imprimés, d'une identité de marque
            forte, d'une stratégie digitale ou d'une plateforme web sur mesure —
            nos équipes intégrées assurent cohérence, rapidité et résultats
            mesurables.
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
                  Impression, marketing digital & design, développement web —
                  trois piliers pour une marque cohérente et performante.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div className={styles.servicesDetail} variants={stagger}>
            {services.map((service, index) => (
              <motion.article
                key={service.id || index}
                className={styles.serviceDetail}
                variants={fadeUp}
                onClick={() => service.id && setSelectedService(service.id)}
                style={{ cursor: service.id ? "pointer" : "default" }}
              >
                <div className={styles.serviceDetail_header}>
                  <div
                    className={styles.serviceDetail_icon}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      backgroundColor: "var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                    }}
                  >
                    <i className={service.icon} style={{ fontSize: 24 }} />
                  </div>
                </div>
                <h1>{service.name}</h1>
                <p className={styles.serviceDetail_description}>
                  {service.longDescription}
                </p>
                <div className={styles.serviceDetail_services}>
                  <span className={styles.serviceDetail_label}>
                    Ce que nous proposons :
                  </span>
                  <ul>
                    {service.allServices.slice(0, 5).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  {service.id && (
                    <span className={styles.serviceDetail_seeAll}>
                      Voir tous les produits <i className="fi fi-rs-arrow-right" />
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className={styles.serviceModal_overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className={styles.serviceModal}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const data = getProductsForService(selectedService);
                if (!data) return null;
                return (
                  <>
                    <div className={styles.serviceModal_header}>
                      <div
                        className={styles.serviceModal_icon}
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 12,
                          backgroundColor: "var(--accent)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                        }}
                      >
                        <i className={data.icon} style={{ fontSize: 24 }} />
                      </div>
                      <h2>{data.name}</h2>
                      <button
                        className={styles.serviceModal_close}
                        onClick={() => setSelectedService(null)}
                      >
                        <i className="fi fi-rs-cross-small" />
                      </button>
                    </div>
                    <div className={styles.serviceModal_content}>
                      {data.categories.map((cat, i) => (
                        <div key={i} className={styles.serviceModal_category}>
                          <h3>{cat.name}</h3>
                          <ul>
                            {cat.items.map((item, j) => (
                              <li key={j}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className={styles.serviceModal_footer}>
                      <button
                        className={styles.servicesHero_button_secondary}
                        onClick={() => {
                          setSelectedService(null);
                          navigate("/contact");
                        }}
                      >
                        Demander un devis
                        <i className="fi fi-rs-arrow-small-right" />
                      </button>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section className={styles.servicesProcess}>
        <div className={styles.servicesProcess_container}>
          <motion.div className={styles.servicesProcess_title}>
            <h1>
              Construisons ensemble<span>.</span>
            </h1>
            <p>
              Impression, marketing digital, branding ou développement web —
              notre équipe est prête à donner vie à vos projets et à amplifier
              votre impact.
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
