import styles from "./Footer.module.scss";
import logoGray from "../../assets/logo/rgi-logo-gray.png";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      <motion.section
        className={styles.footer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className={styles.footer_container}>
          <motion.div
            className={styles.footer_left}
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1>Faites partie du voyage — restez connectés</h1>
          </motion.div>

          <motion.div
            className={styles.footer_right}
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.footer_info_section}>
              <p className={styles.footer_info_header}>Venez nous voir</p>
              <p className={styles.footer_info}>
                10, Rue Liberté, Appartement 5, 3ème étage
              </p>
            </div>

            <div className={styles.footer_info_section}>
              <p className={styles.footer_info_header}>Suivez-nous</p>
              <p className={styles.footer_info}>
                Facebook · Instagram · LinkedIn · Behance
              </p>
            </div>

            <div className={styles.footer_info_section}>
              <p className={styles.footer_info_header}>Contact</p>
              <p className={styles.footer_info}>
                <span>contact</span>@rgistudio.com
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className={styles.footer}
        style={{ borderTop: "1px solid rgb(53, 53, 53)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className={styles.footer_container_copyright}>
          <img src={logoGray} alt="" className={styles.logo} />
          <span className={styles.footer_copyright}>
            © {new Date().getFullYear()} RGI Studio. Tous droits réservés.
          </span>
        </div>
      </motion.section>
    </>
  );
}
