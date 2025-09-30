import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.main}>
      <div className={styles.container}>
        <img
          class="_afvz"
          alt="Page principale de WhatsApp"
          src="https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg"
        />
        <ul className={styles.nav}>
          <li>
            <a href="#">Fonctionnalités</a>
          </li>
          <li>
            <a href="#">Meta&nbsp;AI</a>
          </li>
          <li>
            <a href="#">Sécurité</a>
          </li>
          <li>
            <a href="#">Pages d’aide</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Pour les entreprises</a>
          </li>
        </ul>
        <div className={styles.buttons}>
          <button className={styles.btn}>Se connecter</button>
          <button className={`${styles.btn} ${styles.btnLogin}`}>
            Télécharger
          </button>
        </div>
      </div>
    </header>
  );
}
