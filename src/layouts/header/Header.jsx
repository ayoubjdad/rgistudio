import { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/logo/rgi-logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router";
import { fadeUp, stagger } from "../../theme/motion-effects";

const menu = [
  { name: "Accueil", href: "/" },
  { name: "Entreprise", href: "/company" },
  { name: "Services", href: "/services" },
  // { name: "Réalisations", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];

  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <motion.nav
      className={styles.main}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className={styles.container}>
        <div style={{ display: "flex", gap: "32px" }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="Logo" className={styles.logo} />
          </motion.div>

          <motion.ul
            className={styles.desktopMenu}
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {menu.map((item, index) => (
              <motion.li key={index} variants={fadeUp}>
                <a
                  href={item.href}
                  className={`${styles.item} ${
                    currentPath === item.name.toLowerCase() ? styles.active : ""
                  }`}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className={styles.buttons}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className={styles.button + " " + styles.desktopToggle}
          >
            <a href="/cv-generator">Générateur de CV</a>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className={styles.button + " " + styles.desktopToggle}
          >
            <a href="/get-a-quote">Obtenir un devis</a>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className={styles.button + " " + styles.mobileToggle}
            onClick={toggleMobileMenu}
            style={{ border: "none" }}
          >
            <i className="fi fi-rs-burger-menu" />
            <span>menu</span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.ul
            className={styles.mobileMenu}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {menu.map((item, index) => (
              <motion.li
                key={index}
                variants={fadeUp}
                onClick={() => setMobileOpen(false)}
              >
                <a href={item.href}>{item.name}</a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
