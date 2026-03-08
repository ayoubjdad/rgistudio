import styles from "./Company.module.scss";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../theme/motion-effects";
import Hiring from "../../layouts/hiring/Hiring";
import Instagram from "../../layouts/instagram/Instagram";
import Team from "../../layouts/team/Team";

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
              Impression. Digital. Impact<span>.</span>
            </motion.h1>
            <motion.p variants={fadeUp}>
              RGI Studio est un studio de production créative à Casablanca, structuré autour de trois expertises : l’impression (tous types et formats), le marketing digital et le design graphique, et le
              développement web et applications. Nous aidons les marques à se
              démarquer, communiquer avec impact et grandir — en ligne et hors ligne.
            </motion.p>

            {/* <motion.div className={styles.hero_buttons} variants={fadeUp}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${styles.hero_button} ${styles.hero_button_secondary}`}
              >
                Travailler avec nous
                <i className="fi fi-rs-arrow-small-right" />
              </motion.button>
            </motion.div> */}
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
              Chez RGI Studio, nous combinons savoir-faire artisanal, créativité
              et rigueur. Ces principes guident chaque projet — qu'il s'agisse
              d'impression, de branding ou de développement digital.
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
              ensemble pour créer des marques fortes, des campagnes percutantes
              et des produits digitaux performants — impression, branding et
              web sous un même toit.
            </p>
          </motion.div>

          <div className={styles.ourTeam_content}>
            <div
              className={styles.ourTeam_card}
              style={{ border: "none", "grid-column": "span 2" }}
            />
            <div
              className={styles.ourTeam_card_head}
              style={{ "grid-column": "span 2" }}
            >
              <h1>11</h1>
              <p>points</p>
            </div>

            <div
              className={styles.ourTeam_card}
              style={{ borderRadius: "20px 0px 0px", "grid-column": "span 2" }}
            >
              <i className="fi fi-ts-database-management" />
              <p>Axé données</p>
            </div>
            <div className={styles.ourTeam_card}>
              <i className="fi fi-ts-book-alt" />
              <p>Expertise</p>
            </div>
            <div className={styles.ourTeam_card}>
              <i className="fi fi-ts-chart-histogram" />
              <p>Orienté résultats</p>
            </div>
            <div className={styles.ourTeam_card}>
              <i className="fi fi-ts-discussion-group" /> <p>Collaboratif</p>
            </div>
            <div className={styles.ourTeam_card}>
              <i className="fi fi-ts-shopping-bag" /> <p>Professionnel</p>
            </div>
            <div
              className={styles.ourTeam_card}
              style={{ "grid-column": "span 2" }}
            >
              <i className="fi fi-ts-rocket-lunch" /> <p>Innovant</p>
            </div>
            <div className={styles.ourTeam_card}>
              <i className="fi fi-ts-hr-person" /> <p>Solidaire</p>
            </div>
            <div className={styles.ourTeam_card}>
              <i className="fi fi-ts-fire-flame-curved" /> <p>Passionné</p>
            </div>
            <div
              className={styles.ourTeam_card}
              style={{ "grid-column": "span 2" }}
            >
              <i className="fi fi-ts-archery" /> <p>Ambitieux</p>
            </div>
            <div
              className={styles.ourTeam_card}
              style={{
                borderRadius: "0px 0px 0px 20px",
                "grid-column": "span 2",
              }}
            >
              <i className="fi fi-ts-shield" /> <p>Fiable</p>
            </div>
            <div
              className={styles.ourTeam_card}
              style={{ borderRadius: "0px 0px 20px 0px" }}
            >
              <i className="fi fi-ts-star" /> <p>Excellence</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* OUR TEAM */}
      <Team />

      {/* HIRING */}
      <Hiring />

      {/* INSTAGRAM */}
      <Instagram />
    </>
  );
}
