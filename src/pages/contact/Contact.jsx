import React from "react";
import styles from "./Contact.module.scss";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

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
          <h1>Let’s Talk</h1>
          <p>
            Have a project in mind? We’d love to hear about it and explore how
            we can collaborate.
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

            <h3>Office</h3>
            <p>Casablanca — Remote</p>

            <h3>Follow</h3>
            <p>Facebook · Instagram · LinkedIn · Behance</p>
          </motion.div>

          <motion.form
            className={styles.contact_form}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Tell us about your project" />
            <button type="submit">Send Message</button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
