import styles from "./ImageWithText.module.scss";
import standard from "../../assets/images/472786853_558698087153533_2795908553321527687_n.webp";
import Button from "../../components/button/Button";

export default function ImageWithText({
  image,
  header = "Dites ce que vous pensez",
  subHeader = "Exprimez-vous en utilisant autre chose que des mots. Tirez parti des stickers et des GIF pour partager des moments de votre quotidien dans les statuts. Enregistrez un message vocal pour dire bonjour ou raconter une histoire.",
  services = [],
  isDark = false,
}) {
  return (
    <section className={isDark ? styles.mainDark : styles.main}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.image}>
            <img alt="Solutions digitales et print" src={image || standard} />
          </div>

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

              <Button text="Découvrir nos services" isLight isOutlined />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
