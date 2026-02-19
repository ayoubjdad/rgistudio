import { fadeUp, stagger } from "../../theme/motion-effects";
import styles from "./Team.module.scss";
import { motion } from "framer-motion";

export default function Team() {
  return (
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
            Notre équipe<span>.</span>
          </h1>
          <p>
            Designers, imprimeurs, développeurs et marketeurs travaillant
            ensemble pour offrir une exécution de haute qualité sur les
            expériences physiques et digitales.
          </p>
        </motion.div>

        <motion.div
          className={styles.ourTeam_content_wrapper}
          variants={stagger}
        >
          <motion.div className={styles.ourTeam_content} variants={fadeUp}>
            <motion.img
              src="https://framerusercontent.com/images/buZgrBSPTLLdUd6qW7p83vduUA.jpg?scale-down-to=2048&width=5328&height=4000"
              className={styles.ourTeam_image_large}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 180 }}
            />
            <motion.img
              src="https://framerusercontent.com/images/x19uVpPtOO9Btagp9VmrahtUQ.jpg?scale-down-to=512&width=5328&height=4000"
              className={styles.ourTeam_image_small}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 180 }}
            />
          </motion.div>
          <motion.img
            src="https://framerusercontent.com/images/buZgrBSPTLLdUd6qW7p83vduUA.jpg?scale-down-to=2048&width=5328&height=4000"
            className={styles.ourTeam_image_big}
            whileHover={{ y: -12 }}
            transition={{ type: "spring", stiffness: 180 }}
          />
          <motion.div className={styles.ourTeam_content} variants={fadeUp}>
            <motion.img
              src="https://framerusercontent.com/images/x19uVpPtOO9Btagp9VmrahtUQ.jpg?scale-down-to=512&width=5328&height=4000"
              className={styles.ourTeam_image_small}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 180 }}
            />
            <motion.img
              src="https://framerusercontent.com/images/buZgrBSPTLLdUd6qW7p83vduUA.jpg?scale-down-to=2048&width=5328&height=4000"
              className={styles.ourTeam_image_large}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 180 }}
            />
          </motion.div>

          {/* <div className={styles.ourTeam_buttons}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${styles.ourTeam_button} ${styles.ourTeam_button_secondary}`}
              >
                Rejoindre notre équipe
                <i className="fi fi-rs-arrow-small-right"></i>
              </motion.button>
            </div> */}
        </motion.div>
      </div>
    </motion.section>
  );
}
