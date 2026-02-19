import { useState } from "react";
import styles from "./GetAQuote.module.scss";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../theme/motion-effects";
import { services } from "../../data/global.data";

const budgets = [
  "5k MAD – 10k MAD",
  "10k MAD – 25k MAD",
  "25k MAD – 50k MAD",
  "50k+ MAD",
];

const timelines = ["ASAP", "1 – 2 mois", "3 – 4 mois", "Flexible"];

const GetAQuote = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [budget, setBudget] = useState(null);
  const [timeline, setTimeline] = useState(null);

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  };

  return (
    <div className={styles.quote}>
      <div className={styles.quote_container}>
        <motion.div
          className={styles.quote_header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h1 variants={fadeUp}>Obtenir un devis</motion.h1>
          <motion.p variants={fadeUp}>
            Parlez-nous de votre projet et nous reviendrons vers vous avec une
            proposition adaptée sous 24 à 48 heures.
          </motion.p>
        </motion.div>

        <motion.section
          className={styles.quote_section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp}>
            Quels services vous intéressent ?
          </motion.h2>

          <motion.div className={styles.quote_grid} variants={stagger}>
            {services.map((service, index) => (
              <motion.button
                key={index}
                type="button"
                className={`${styles.quote_card} ${
                  selectedServices.includes(service) ? styles.active : ""
                }`}
                onClick={() => toggleService(service)}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {service}
              </motion.button>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className={styles.quote_section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp}>Budget estimé</motion.h2>

          <motion.div className={styles.quote_grid_small} variants={stagger}>
            {budgets.map((item, index) => (
              <motion.button
                key={index}
                type="button"
                className={`${styles.quote_card} ${
                  budget === item ? styles.active : ""
                }`}
                onClick={() => setBudget(item)}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className={styles.quote_section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp}>Délai du projet</motion.h2>

          <motion.div className={styles.quote_grid_small} variants={stagger}>
            {timelines.map((item, index) => (
              <motion.button
                key={index}
                type="button"
                className={`${styles.quote_card} ${
                  timeline === item ? styles.active : ""
                }`}
                onClick={() => setTimeline(item)}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className={styles.quote_section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp}>Parlez-nous de votre projet</motion.h2>

          <motion.form className={styles.quote_form} variants={fadeUp}>
            <div className={styles.quote_row}>
              <input type="text" placeholder="Votre nom" />
              <input type="email" placeholder="Adresse email" />
            </div>

            <input type="text" placeholder="Entreprise (optionnel)" />
            <textarea placeholder="Décrivez vos objectifs, délais et attentes..." />

            <button type="submit">Demander un devis</button>
          </motion.form>
        </motion.section>

        <motion.div
          className={styles.quote_cta}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>Nous répondons généralement sous 24 heures.</h2>
          <p>
            Notre équipe analyse chaque demande avec attention et revient vers
            vous avec une approche personnalisée, un délai et une estimation de
            budget.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default GetAQuote;
