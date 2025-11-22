import styles from "./Main.module.scss";
import image from "../../assets/images/imprimerie.jpg";
import Button from "../../components/button/Button";

export default function Main() {
  return (
    <section className={styles.main}>
      <div
        className={styles.container}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.inner}>
          <div className={styles.content}>
            <div className={styles.text}>
              <div className={styles.textInner}>
                <h1>Votre partenaire en communication et digital</h1>
                <p>
                  Nous transformons vos idées en solutions créatives et
                  performantes. Spécialistes du print, de la communication
                  digitale et du développement web, nous accompagnons votre
                  entreprise à chaque étape de sa croissance.
                </p>
              </div>

              <div className={styles.buttons}>
                <Button text="Nos Services" isLight />
                <Button text="Nous Contacter" />
                {/* <button className={`${styles.btn} ${styles.btnLogin}`}>
                  Nos Services
                </button>
                <button className={styles.btn}>Nous Contacter</button> */}
              </div>
            </div>
          </div>

          {/* <div>
            <img
              alt="Communication digitale et développement web"
              src="https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
