import styles from "./TextWithImage.module.scss";
import standard from "../../assets/images/472786853_558698087153533_2795908553321527687_n.webp";

export default function TextWithImage({
  image,
  header = "Boostez votre visibilité avec nos solutions digitales",
  subHeader = "De la création graphique au développement web, nous accompagnons votre entreprise pour communiquer efficacement et toucher vos clients là où ils se trouvent. Nos solutions print et digitales sont conçues pour faire passer vos projets au niveau supérieur.",
  services = [],
}) {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.content}>
            <div className={styles.text}>
              <div className={styles.textInner}>
                <h1>{header}</h1>
                <p>{subHeader}</p>
                <ul style={{ listStyle: "dot" }}>
                  {services?.length
                    ? services.map((service) => (
                        <li>
                          <p>{service}</p>
                        </li>
                      ))
                    : null}
                </ul>
              </div>

              <button className={styles.btn}>Découvrir nos services</button>
            </div>
          </div>

          <div className={styles.image}>
            <img alt="Solutions digitales et print" src={image || standard} />
          </div>
        </div>
      </div>
    </section>
  );
}
