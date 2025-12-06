import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Box } from "@mui/material";
import Button from "../../components/button/Button";
import logo from "../../assets/logo/rgi-logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(0);

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
      link: "/services",
      subMenu: [
        {
          name: "Print",
          description:
            "Nos services incluent la conception graphique, le développement web, et plus encore.",
          link: "/services#print",
        },
        {
          name: "Digital",
          description:
            "Nos services incluent la conception graphique, le développement web, et plus encore.",
          link: "/services#digital",
        },
        {
          name: "Web",
          description:
            "Nos services incluent la conception graphique, le développement web, et plus encore.",
          link: "/services#web",
        },
      ],
    },
    {
      name: "Réalisations",
      description: "Découvrez nos projets récents.",
      link: "#",
    },
    {
      name: "À propos",
      description: "En savoir plus sur notre entreprise.",
      link: "/about",
    },
    {
      name: "Contact",
      description: "Nous contacter pour plus d'informations.",
      link: "/contact",
    },
  ];

  return (
    <header className={`${styles.main} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <img
          className={styles.logo}
          alt="Logo de l'entreprise"
          src={logo}
          onClick={() => (window.location.href = "/")}
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
              <a
                key={sub.name}
                href={sub.link || "#"}
                className={styles.subMenuLink}
              >
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
              </a>
            ))}
          </ul>
        )}

        <Button text="Demander un devis" icon="fi fi-rs-arrow-up-right" />
      </div>
    </header>
  );
}
