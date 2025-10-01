import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Box } from "@mui/material";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(true);

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
      description:
        "Nos services incluent la conception graphique, le développement web, et plus encore.",
      link: "#",
      subMenu: [
        {
          name: "Print",
          description:
            "Nos services incluent la conception graphique, le développement web, et plus encore.",
          link: "#",
        },
        {
          name: "Digital",
          description:
            "Nos services incluent la conception graphique, le développement web, et plus encore.",
          link: "#",
        },
        {
          name: "Web",
          description:
            "Nos services incluent la conception graphique, le développement web, et plus encore.",
          link: "#",
        },
        {
          name: "Digital",
          description:
            "Nos services incluent la conception graphique, le développement web, et plus encore.",
          link: "#",
        },
        {
          name: "Web",
          description:
            "Nos services incluent la conception graphique, le développement web, et plus encore.",
          link: "#",
        },
      ],
    },
    {
      name: "Réalisations",
      description: "Découvrez nos projets récents.",
      link: "#",
      subMenu: [
        {
          name: "Print",
          description:
            "Nos services incluent la conception graphique, le développement web, et plus encore.",
          link: "#",
        },
      ],
    },
    {
      name: "À propos",
      description: "En savoir plus sur notre entreprise.",
      link: "#",
    },
    {
      name: "Contact",
      description: "Nous contacter pour plus d'informations.",
      link: "#",
    },
  ];

  return (
    <header className={`${styles.main} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <img
          alt="Logo de l'entreprise"
          src="https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg"
        />
        <ul className={styles.nav}>
          {menu.map((item, index) => (
            <li
              key={item.name}
              className={styles.element}
              onMouseEnter={() => setHoveredMenu(index)}
            >
              <a href={item.link || "#"} className={styles.underline}>
                {item.name}
                {item.subMenu && (
                  <Box component="i" className={`fi fi-rs-angle-small-down `} />
                )}
              </a>
            </li>
          ))}
        </ul>

        {hoveredMenu !== null && menu[hoveredMenu]?.subMenu && (
          <ul
            className={styles.subMenu}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            {menu[hoveredMenu].subMenu.map((sub) => (
              <li key={sub.name} className={styles.subMenuItem}>
                <Box
                  component="i"
                  className={`fi fi-rs-check ${styles.icon}`}
                />
                <h2 href={sub.link} className={styles.subLink}>
                  {sub.name}
                </h2>
                <p>{sub.description}</p>
                <Box
                  component="i"
                  className={`fi fi-rs-arrow-small-right ${styles.link}`}
                />
              </li>
            ))}
          </ul>
        )}

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
