import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import styles from "./ThemeSwitch.module.scss";

const options = [
  { value: "light", label: "Clair", icon: "fi fi-rs-sun" },
  { value: "dark", label: "Sombre", icon: "fi fi-rs-moon" },
  { value: "system", label: "Système", icon: "fi fi-rs-dashboard-monitor" },
];

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = options.find((o) => o.value === theme) || options[2];

  return (
    <div className={`${styles.wrapper} ${open ? styles.open : ""}`} ref={ref}>
      <motion.button
        type="button"
        className={styles.button + " " + styles.desktopToggle}
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Changer le thème"
        aria-expanded={open}
      >
        <i className={current.icon} />
        <i className={`fi fi-rs-angle-small-down ${styles.chevron}`} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.ul
            className={styles.dropdown}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
          >
            {options.map((opt) => (
              <li key={opt.value}>
                <button
                  type="button"
                  className={`${styles.option} ${
                    theme === opt.value ? styles.active : ""
                  }`}
                  onClick={() => {
                    setTheme(opt.value);
                    setOpen(false);
                  }}
                >
                  <i className={opt.icon} />
                  <span>{opt.label}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
