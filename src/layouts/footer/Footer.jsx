import styles from "./Footer.module.scss";
import logo from "../../assets/rgi-logo.png";

import { motion, useMotionValue, useTransform } from "framer-motion";

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
            <h1>Be part of the journey—stay tuned</h1>
          </motion.div>

          <motion.div
            className={styles.footer_right}
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.footer_info_section}>
              <p className={styles.footer_info_header}>Visit us</p>
              <p className={styles.footer_info}>
                10, Rue Liberté, Appartement 5, 3ème étage
              </p>
            </div>
            <div className={styles.footer_info_section}>
              <p className={styles.footer_info_header}>Follow us</p>
              <p className={styles.footer_info}>
                Facebook · Instagram · LinkedIn · Behance
              </p>
            </div>
            <div className={styles.footer_info_section}>
              <p className={styles.footer_info_header}>Contact us</p>
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
          <img src={logo} alt="" className={styles.logo} />
          <span className={styles.footer_copyright}>
            © {new Date().getFullYear()} RGI Studio. All rights reserved.
          </span>
        </div>
      </motion.section>
    </>
  );
}
