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
            <div>
              <h4>Notre mission</h4>
              <ul>
                <li>Fonctionnalités</li>
                <li>Blog</li>
                <li>Sécurité</li>
                <li>Pour les entreprises</li>
              </ul>
            </div>

            <div>
              <h4>Qui sommes-nous ?</h4>
              <ul>
                <li>À propos de nous</li>
                <li>Emplois</li>
                <li>Espace Marque</li>
                <li>Confidentialité</li>
              </ul>
            </div>

            <div>
              <h4>Utiliser WhatsApp</h4>
              <ul>
                <li>Android</li>
                <li>iPhone</li>
                <li>Mac/PC</li>
                <li>WhatsApp Web</li>
              </ul>
            </div>

            <div>
              <h4>Besoin d’aide ?</h4>
              <ul>
                <li>Nous contacter</li>
                <li>Centre d’aide</li>
                <li>Applications</li>
                <li>Avis de sécurité</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.legal}>
            <p>2025 © RGI Studio</p>
            <a href="/contact">Conditions et politique de confidentialité</a>
            <a href="/contact">Plan du site</a>
          </div>

          <div className={styles.socials}>
            <a href="/contact">
              <i class="fi fi-brands-facebook" />
            </a>
            <a href="/contact">
              <i class="fi fi-brands-instagram" />
            </a>
            <a href="/contact">
              <i class="fi fi-brands-linkedin" />
            </a>
          </div>

          <div className={styles.language}>
            <button>français ⌄</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
