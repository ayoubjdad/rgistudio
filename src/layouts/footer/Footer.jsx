// Footer.jsx
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.logoSection}>
            <img
              className={styles.logo}
              alt="Page principale de WhatsApp"
              src="https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg"
            />
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
            <p>2025 © WhatsApp LLC</p>
            <a href="#">Conditions et politique de confidentialité</a>
            <a href="#">Plan du site</a>
          </div>

          <div className={styles.socials}>
            <a href="#">
              <i class="fi fi-brands-facebook"></i>
            </a>
            <a href="#">
              <i class="fi fi-brands-facebook"></i>
            </a>
            <a href="#">
              <i class="fi fi-brands-facebook"></i>
            </a>
            <a href="#">
              <i class="fi fi-brands-facebook"></i>
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
