import styles from "./Main.module.scss";

export default function Main() {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.content}>
            <div className={styles.text}>
              <div className={styles.textInner}>
                <h1>Échangez des messages privés</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit do
                  eiusmod tempor incididunt.
                </p>
              </div>

              <div className={styles.buttons}>
                <button className={`${styles.btn} ${styles.btnLogin}`}>
                  Télécharger
                </button>
                <button className={styles.btn}>Télécharger</button>
              </div>
            </div>
          </div>

          <div>
            <img
              class="_afvz"
              alt="Page principale de WhatsApp"
              src="https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg"
            />
          </div>
        </div>
        {/* <img
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
        </div> */}
      </div>
    </section>
  );
}
