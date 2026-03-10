import styles from "./Work.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router";
import { fadeUp, stagger } from "../../theme/motion-effects";
import { works } from "../../data/work.data";
import { useMemo, useState } from "react";

export default function Work() {
  const navigate = useNavigate();

  const categories = [
    "All",
    "Print",
    "Marketing digital",
    "Design graphique",
    "Développement web",
  ];

  const [category, setCategory] = useState("All");

  const filteredWorks = useMemo(() => {
    if (category === "All") {
      return works;
    }

    return works.filter((work) => work.tags.includes(category));
  }, [category]);

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
              Nos réalisations<span>.</span>
            </motion.h1>
            <motion.p variants={fadeUp}>
              Une sélection de nos meilleurs projets : branding, sites web,
              applications et supports imprimés. Chaque réalisation reflète
              notre engagement pour la qualité et l'impact.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.hero_right}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <motion.div className={styles.hero_stat} variants={fadeUp}>
              {/* <h1>{works.length}</h1> */}
              <h1>100+</h1>
              <hr />
              <p>projets livrés avec succès</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* GRID */}
      <motion.section
        className={styles.works}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.works_container}>
          <div style={{ marginBottom: 32 }}>
            <div className={styles.work_tags}>
              {categories.map((cat, i) => (
                <span
                  key={i}
                  style={{ cursor: "pointer" }}
                  className={`${styles.work_tag} ${category === cat ? styles.active : ""}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <motion.div className={styles.works_grid} variants={stagger}>
            <AnimatePresence mode="popLayout">
              {filteredWorks.map((work) => (
                <motion.article
                  key={work.id}
                  className={styles.work_card}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  layout
                  onClick={() => work.link && window.open(work.link, "_blank")}
                >
                  <div className={styles.work_image}>
                    <img src={work.image} alt={work.title} />
                    <div className={styles.work_overlay}>
                      <span className={styles.work_category}>
                        {work.category}
                      </span>
                    </div>
                  </div>

                  <div className={styles.work_info}>
                    <h3>{work.title}</h3>
                    <p>{work.description}</p>

                    <div className={styles.work_tags}>
                      {work.tags.map((tag, i) => (
                        <span key={i}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className={styles.cta}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className={styles.cta_container}>
          <motion.div className={styles.cta_title} variants={fadeUp}>
            <h1>
              Un projet en tête ?<span>.</span>
            </h1>
            <p>
              Parlons de votre prochain projet. Nous serions ravis de
              l'accompagner de l'idée à la livraison.
            </p>
          </motion.div>
          <motion.button
            className={styles.cta_button}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
