import styles from "./Main.module.scss";
import image from "../../assets/images/imprimerie.jpg";

export default function Main() {
  return (
    <section className={styles.main}>
      <div
        className={styles.container}
        // style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.inner}>
          <div className={styles.content}>
            <div className={styles.text}>
              <div className={styles.textInner}>
                <h1>Creating</h1>
                <h1 className={styles.highlight}>
                  <i className="fi fi-rs-arrow-small-right" />
                  <i>the impact</i>
                </h1>
                <h1>you deserve</h1>
                <p>
                  Spécialistes du print, de la communication digitale et du
                  développement web, nous accompagnons votre entreprise à chaque
                  étape de sa croissance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
