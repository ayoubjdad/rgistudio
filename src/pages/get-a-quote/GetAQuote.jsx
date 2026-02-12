import { useState } from "react";
import styles from "./GetAQuote.module.scss";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const services = [
  "Print Production",
  "Packaging Design",
  "Large Format & Signage",
  "Branding",
  "UX / UI Design",
  "Digital Marketing",
  "Growth Optimization",
  "Web Development",
  "Mobile App",
];

const budgets = [
  "5k MAD – 10k MAD",
  "10k MAD – 25k MAD",
  "25k MAD – 50k MAD",
  "50k+ MAD",
];

const timelines = ["ASAP", "1 – 2 months", "3 – 4 months", "Flexible"];

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
        {/* Header */}
        <motion.div
          className={styles.quote_header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h1 variants={fadeUp}>Get a Quote</motion.h1>
          <motion.p variants={fadeUp}>
            Tell us about your project and we’ll get back with a tailored
            proposal within 24–48 hours.
          </motion.p>
        </motion.div>

        {/* Step 1 — Services */}
        <motion.section
          className={styles.quote_section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp}>What services do you need?</motion.h2>

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

        {/* Step 2 — Budget */}
        <motion.section
          className={styles.quote_section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp}>Estimated budget</motion.h2>

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

        {/* Step 3 — Timeline */}
        <motion.section
          className={styles.quote_section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp}>Project timeline</motion.h2>

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

        {/* Step 4 — Details */}
        <motion.section
          className={styles.quote_section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp}>Tell us about your project</motion.h2>

          <motion.form className={styles.quote_form} variants={fadeUp}>
            <div className={styles.quote_row}>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email Address" />
            </div>

            <input type="text" placeholder="Company (optional)" />
            <textarea placeholder="Describe your goals, timeline and expectations..." />

            <button type="submit">Request Quote</button>
          </motion.form>
        </motion.section>

        {/* Confirmation CTA */}
        <motion.div
          className={styles.quote_cta}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>We usually respond within 24 hours.</h2>
          <p>
            Our team reviews every request carefully and comes back with a
            tailored approach, timeline and pricing range.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default GetAQuote;
