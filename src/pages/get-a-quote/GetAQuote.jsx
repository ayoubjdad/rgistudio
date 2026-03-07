import { useState } from "react";
import styles from "./GetAQuote.module.scss";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../theme/motion-effects";
import { services } from "../../data/global.data";
import { FORMSPREE_IDS } from "../../config/forms.config";

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
  const [status, setStatus] = useState("");

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
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
                  selectedServices.includes(service.name) ? styles.active : ""
                }`}
                onClick={() => toggleService(service.name)}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {service.name}
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

          <motion.form
            className={styles.quote_form}
            variants={fadeUp}
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target;
              setStatus("sending");

              try {
                const res = await fetch(`https://formspree.io/f/${FORMSPREE_IDS.quote}`, {
                  method: "POST",
                  body: new FormData(form),
                  headers: { Accept: "application/json" },
                });

                if (res.ok) {
                  setStatus("success");
                  form.reset();
                  setSelectedServices([]);
                  setBudget(null);
                  setTimeline(null);
                } else {
                  setStatus("error");
                }
              } catch {
                setStatus("error");
              }
            }}
            action={`https://formspree.io/f/${FORMSPREE_IDS.quote}`}
            method="POST"
          >
            <input type="hidden" name="services" value={selectedServices.join(", ")} />
            <input type="hidden" name="budget" value={budget || ""} />
            <input type="hidden" name="timeline" value={timeline || ""} />
            <div className={styles.quote_row}>
              <input type="text" name="name" placeholder="Votre nom" required />
              <input type="email" name="email" placeholder="Adresse e-mail" required />
            </div>

            <input type="text" name="company" placeholder="Entreprise (optionnel)" />
            <textarea name="description" placeholder="Décrivez vos objectifs, délais et attentes..." required />

            {status === "sending" && <p className={styles.formStatus}>Envoi en cours...</p>}
            {status === "success" && <p className={styles.formStatusSuccess}>Demande envoyée ! Nous vous recontacterons sous 24 à 48 heures.</p>}
            {status === "error" && <p className={styles.formStatusError}>Une erreur est survenue. Réessayez ou contactez-nous par e-mail.</p>}
            <button type="submit" disabled={status === "sending"}>Demander un devis</button>
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
