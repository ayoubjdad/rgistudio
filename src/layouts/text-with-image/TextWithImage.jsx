import styles from "./TextWithImage.module.scss";
import standard from "../../assets/images/472786853_558698087153533_2795908553321527687_n.webp";
import Button from "../../components/button/Button";

export default function TextWithImage({
  id,
  image,
  header = "Boostez votre visibilité avec nos solutions digitales",
  subHeader = "De la création graphique au développement web, nous accompagnons votre entreprise pour communiquer efficacement et toucher vos clients là où ils se trouvent. Nos solutions print et digitales sont conçues pour faire passer vos projets au niveau supérieur.",
  services = [],
  onClick,
}) {
  const hasButton = onClick?.length > 0;

  return (
    <section
      className={styles.main}
      id={id || Math.random().toString(36).substring(7)}
    >
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.content}>
            <div className={styles.text}>
              <div className={styles.textInner}>
                <h1>{header}</h1>
                <p>{subHeader}</p>
                <ul style={{ listStyle: "circle", paddingLeft: 20, margin: 0 }}>
                  {services?.length
                    ? services.map((service, index) => (
                        <li
                          key={index}
                          style={{
                            borderBottom:
                              index !== services.length - 1 &&
                              "1px solid #dddcdc",
                            padding: "16px 0",
                          }}
                        >
                          <p>{service}</p>
                        </li>
                      ))
                    : null}
                </ul>
              </div>

              {hasButton ? <Button text="Découvrir nos services" /> : null}
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
