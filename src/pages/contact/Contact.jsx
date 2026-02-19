import { fadeUp } from "../../theme/motion-effects";
import styles from "./Contact.module.scss";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact_container}>
        {/* Header */}
        <motion.div
          className={styles.contact_header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h1>Parlons-en 🙌</h1>
          <p>
            Vous avez un projet en tête ? Nous serions ravis d’en discuter et
            d’explorer comment collaborer ensemble.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className={styles.contact_content}>
          <motion.div
            className={styles.contact_info}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3>Email</h3>
            <p>hello@rgistudio.com</p>

            <h3>Bureau</h3>
            <p>Casablanca · Had Soualem · À distance</p>

            <h3>Suivez-nous</h3>
            <p>
              <span>Facebook</span> · <span>Instagram</span> ·{" "}
              <span>LinkedIn</span> · <span>Behance</span>
            </p>
          </motion.div>

          <motion.form
            className={styles.contact_form}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <input type="text" placeholder="Votre nom" />
            <input type="email" placeholder="Votre email" />
            <textarea placeholder="Parlez-nous de votre projet" />
            <button type="submit">Envoyer le message</button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
