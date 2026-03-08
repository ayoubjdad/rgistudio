import { useState } from "react";
import { fadeUp } from "../../theme/motion-effects";
import styles from "./Contact.module.scss";
import { motion } from "framer-motion";
import { FORMSPREE_IDS } from "../../config/forms.config";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");

    try {
      const res = await fetch(
        `https://formspree.io/f/${FORMSPREE_IDS.contact}`,
        {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        }
      );

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
            <h3>E-mail</h3>
            <p>contact@rgistudio.com</p>

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
            onSubmit={handleSubmit}
            action={`https://formspree.io/f/${FORMSPREE_IDS.contact}`}
            method="POST"
          >
            <input type="text" name="name" placeholder="Votre nom" required />
            <input
              type="email"
              name="email"
              placeholder="Votre e-mail"
              required
            />
            <textarea
              name="message"
              placeholder="Parlez-nous de votre projet"
              required
            />
            {status === "sending" && (
              <p className={styles.formStatus}>Envoi en cours...</p>
            )}
            {status === "success" && (
              <p className={styles.formStatusSuccess}>
                Message envoyé ! Nous vous recontacterons rapidement.
              </p>
            )}
            {status === "error" && (
              <p className={styles.formStatusError}>
                Une erreur est survenue. Réessayez ou contactez-nous par e-mail.
              </p>
            )}
            <button type="submit" disabled={status === "sending"}>
              Envoyer le message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
