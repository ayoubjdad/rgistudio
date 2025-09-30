import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Box } from "@mui/material";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    {
      name: "Services",
      subMenu: [
        { name: "Print", link: "#" },
        { name: "Digital & Communication", link: "#" },
        { name: "Tech", link: "#" },
      ],
    },
    { name: "Réalisations", link: "#" },
    { name: "À propos", link: "#" },
    { name: "Contact", link: "#" },
  ];

  return (
    <header className={`${styles.main} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <img
          class="_afvz"
          alt="Page principale de WhatsApp"
          src="https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg"
        />
        <ul className={styles.nav}>
          {menu.map((item) => (
            <li key={item.name} className={styles.element}>
              <a href={item.link} className={styles.underline}>
                {item.name}

                {item.subMenu ? (
                  <Box
                    component="i"
                    className={`fi fi-rs-angle-small-down ${styles.underline}`}
                  />
                ) : null}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.buttons}>
          <button className={styles.btn}>Demander un devis</button>
          <Box
            component="i"
            className={`fi fi-rs-arrow-up-right ${styles.btn}`}
          />
        </div>
      </div>
    </header>
  );
}
