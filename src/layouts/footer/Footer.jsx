import styles from "./Footer.module.scss";
import logo from "../../assets/logo/rgi-logo.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.logoSection}>
            <img className={styles.logo} alt="Logo" src={logo} />
          </div>

          <div className={styles.links}>
            <div />

            <div>
              <h4>Nos services</h4>
              <ul>
                <li>Print</li>
                <li>Digital</li>
                <li>Web</li>
              </ul>
            </div>

            <div>
              <h4>Qui sommes-nous ?</h4>
              <ul>
                <li>À propos de nous</li>
                <li>Réalisations</li>
                <li>Emplois</li>
              </ul>
            </div>

            <div>
              <h4>Besoin d’aide ?</h4>
              <ul>
                <li>Demander un devis</li>
                <li>Nous contacter</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.legal}>
            <p>2025 © RGI Studio</p>
            <a href="/">Conditions et politique de confidentialité</a>
            <a href="/">Plan du site</a>
          </div>

          <div className={styles.socials}>
            <a
              href="https://www.facebook.com/rgistudio_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fi fi-brands-facebook" />
            </a>
            <a
              href="https://www.instagram.com/rgistudio_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fi fi-brands-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/rgistudio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fi fi-brands-linkedin" />
            </a>
          </div>

          {/* <div className={styles.language}>
            <button>français ⌄</button>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
