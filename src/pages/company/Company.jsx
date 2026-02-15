import styles from "./Company.module.scss";
import { motion } from "framer-motion";
import { redirect } from "react-router";
import { fadeUp, scaleIn, stagger } from "../../theme/motion-effects";

const hiring = [
  "15+ ans / excellence impression & digital",
  "300+ marques / confiance mondiale",
  "50K+ projets / livrés avec succès",
  "Branding & design / identités visuelles",
  "Impression grand format / signalétique & affichage",
  "Impression commerciale / offset & digital",
  "Sites web & plateformes / haute performance",
  "Applications SaaS & mobiles / solutions évolutives",
  "Design UI/UX / orienté conversion",
  "Marketing digital / campagnes de croissance",
  "Production & logistique / service complet",
  "Du concept à la livraison / un seul partenaire",
];

const jobsOpened = [
  {
    tags: ["Design", "Temps plein"],
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
    title: "Spécialiste Marketing de Performance",
    link: "#",
  },
  {
    tags: ["Production", "Sur site"],
    title: "Responsable Production Impression",
    link: "#",
  },
];

export default function Company() {
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
              Impression. Digital. Impact.
            </motion.h1>
            <motion.p variants={fadeUp}>
              RGI Studio est un partenaire de production créative spécialisé
              dans l’impression haut de gamme, le branding et les expériences
              digitales. Nous aidons les marques à se démarquer, évoluer plus
              vite et performer mieux — en ligne et hors ligne.
            </motion.p>

            <motion.div className={styles.hero_buttons} variants={fadeUp}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${styles.hero_button} ${styles.hero_button_secondary}`}
              >
                Travailler avec nous
                <i className="fi fi-rs-arrow-small-right" />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.hero_right}
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            <motion.div className={styles.hero_cards} variants={stagger}>
              <motion.div className={styles.hero_card} variants={fadeUp}>
                <h1>50K+</h1>
                <hr />
                <p>
                  projets imprimés livrés avec précision, rapidité et constance
                </p>
              </motion.div>
              <motion.div className={styles.hero_card} variants={fadeUp}>
                <h1>300+</h1>
                <hr />
                <p>
                  marques accompagnées en design, marketing et croissance
                  digitale
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* VALUES */}
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
              Nos valeurs<span>.</span>
            </h1>
            <p>
              Chez RGI Studio, nous combinons savoir-faire, créativité et
              performance. Ces principes guident tout ce que nous concevons,
              imprimons et développons.
            </p>
          </motion.div>

          <motion.div className={styles.keyNumbers_content_wrapper}>
            <motion.div className={styles.keyNumbers_content}>
              <motion.div className={styles.keyNumbers_content_left}>
                <h1>Précision</h1>
                <p>
                  Chaque détail compte. De la précision des couleurs à la
                  performance digitale, nous visons une qualité d’exécution
                  irréprochable.
                </p>
              </motion.div>

              <motion.div className={styles.keyNumbers_content_right}>
                <h1>Collaboration</h1>
                <p>
                  Nous travaillons comme une extension de votre équipe, en
                  alignant stratégie, créativité et production dans un flux de
                  travail fluide.
                </p>
              </motion.div>
            </motion.div>

            <motion.div className={styles.keyNumbers_content_bottom}>
              <motion.div className={styles.keyNumbers_content_bottom_text}>
                <h1>Transparence</h1>
                <p>
                  Communication claire, délais honnêtes et résultats mesurables
                  — aucune surprise, seulement de la performance.
                </p>
              </motion.div>
            </motion.div>
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
              Notre studio<span>.</span>
            </h1>
            <p>
              Designers, imprimeurs, développeurs et marketeurs travaillant
              ensemble pour créer des marques fortes, des campagnes puissantes
              et des produits digitaux performants.
            </p>
          </motion.div>

          <div className={styles.ourTeam_content}>
            <div className={styles.ourTeam_content_head}>
              <div />
              <div className={styles.ourTeam_card_head}>
                <h1>11</h1>
                <p>points</p>
              </div>
            </div>
            <div className={styles.ourTeam_content_one}>
              <div
                className={styles.ourTeam_card}
                style={{ borderRadius: "20px 0px 0px" }}
              >
                <i className="fi fi-ts-database-management" />
                <p>Basé sur les données</p>
              </div>
              <div className={styles.ourTeam_card} style={{ border: "none" }}>
                <i className="fi fi-ts-book-alt" />
                <p>Expert</p>
              </div>
              <div className={styles.ourTeam_card}>
                <i className="fi fi-ts-chart-histogram" />
                <p>Orienté résultats</p>
              </div>
            </div>
            <div className={styles.ourTeam_content_two}>
              <div className={styles.ourTeam_card}>
                <i className="fi fi-ts-refresh" /> <p>Collaboratif</p>
              </div>
              <div className={styles.ourTeam_card} style={{ border: "none" }}>
                <i className="fi fi-ts-shopping-bag" /> <p>Professionnel</p>
              </div>
              <div className={styles.ourTeam_card}>
                <i className="fi fi-ts-rocket-lunch" /> <p>Innovant</p>
              </div>
            </div>
            <div className={styles.ourTeam_content_two}>
              <div className={styles.ourTeam_card}>
                <i className="fi fi-ts-hr-person" /> <p>Solidaire</p>
              </div>
              <div className={styles.ourTeam_card}>
                <i className="fi fi-ts-fire-flame-curved" /> <p>Passionné</p>
              </div>
              <div className={styles.ourTeam_card}>
                <i className="fi fi-ts-archery" /> <p>Ambitieux</p>
              </div>
            </div>
            <div className={styles.ourTeam_content_one}>
              <div className={styles.ourTeam_card}>
                <i className="fi fi-ts-shield" /> <p>Fiable</p>
              </div>
              <div
                className={styles.ourTeam_card}
                style={{ borderRadius: "0px 0px 20px 0px" }}
              >
                <i className="fi fi-ts-star" /> <p>Axé excellence</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* WE ARE HIRING */}
      <motion.section
        className={styles.hiring}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.hiring_container}>
          <motion.div
            className={styles.hiring_track}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
          >
            {[...hiring, ...hiring].map((item, index) => (
              <div key={index} className={styles.hiring_header_item}>
                <span className={styles.spark}>✦</span>
                <p>{item}</p>
              </div>
            ))}
          </motion.div>

          <motion.div className={styles.hiring_title} variants={fadeUp}>
            <h1>
              Rejoind le studio<span>.</span>
            </h1>
            <p>
              Nous recherchons toujours des designers, imprimeurs, développeurs
              et marketeurs souhaitant travailler sur des projets ambitieux dans
              les industries print et digitales.
            </p>
          </motion.div>

          <motion.div className={styles.hiring_content_main}>
            <motion.div
              className={styles.hiring_content_wrapper}
              variants={stagger}
            >
              {jobsOpened.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.hiring_content_card}
                  transition={{ type: "spring", stiffness: 180 }}
                >
                  <p className={styles.hiring_content_card_title}>
                    {item.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </p>
                  <h1>{item.title}</h1>
                  <p onClick={() => redirect(item.link)}>Voir l’offre</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* INSTAGRAM / WORK */}
      <motion.section
        className={styles.instagram}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.instagram_container}>
          <motion.div className={styles.instagram_title} variants={fadeUp}>
            <h1>
              Nos réalisations<span>.</span>
            </h1>
            <p>
              Un aperçu de nos dernières productions imprimées, identités de
              marque, campagnes et expériences digitales — conçues pour la
              performance et l’impact.
            </p>
          </motion.div>

          <motion.div
            className={styles.instagram_content_wrapper}
            variants={stagger}
          >
            <motion.div className={styles.instagram_content} variants={fadeUp}>
              <motion.div
                className={styles.instagram_content_right}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 180 }}
                style={{
                  backgroundImage: `url(data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"width="126"height="126"><path id="a"d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z"fill="rgb(136, 136, 136, 0.2)"fill-rule="evenodd"/></svg>)`,
                }}
              ></motion.div>

              <motion.div
                className={styles.instagram_content_right}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 180 }}
              ></motion.div>

              <motion.div
                className={styles.instagram_content_right}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 180 }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
