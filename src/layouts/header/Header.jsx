import styles from "./Header.module.scss";
import logo from "../../assets/rgi-logo.png";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const menu = [
  { name: "Home", href: "/" },
  { name: "Company", href: "/company" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <motion.nav
      className={styles.main}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className={styles.container}>
        <motion.h3 whileHover={{ scale: 1.05 }}>
          <img src={logo} alt="" className={styles.logo} />
        </motion.h3>

        <motion.ul variants={stagger} initial="hidden" animate="visible">
          {menu.map((item, index) => (
            <motion.li key={index} variants={fadeUp}>
              <a href={item.href}>{item.name}</a>
            </motion.li>
          ))}
        </motion.ul>

        <div className={styles.buttons}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className={styles.button}
          >
            <a href="/get-a-quote">Get a Quote</a>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
