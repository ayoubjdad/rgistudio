import styles from "./ImageWithText.module.scss";
import standard from "../../assets/images/472786853_558698087153533_2795908553321527687_n.webp";
import Button from "../../components/button/Button";

export default function ImageWithText({
  image,
  header = "Dites ce que vous pensez",
  subHeader = "Exprimez-vous en utilisant autre chose que des mots. Tirez parti des stickers et des GIF pour partager des moments de votre quotidien dans les statuts. Enregistrez un message vocal pour dire bonjour ou raconter une histoire.",
  services = [],
  isDark = false,
  onClick,
  tags = [],
}) {
  const hasButton = onClick?.length > 0;

  return (
    <section className={`${styles.main} ${isDark ? styles.mainDark : ""}`}>
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
                <ul style={{ listStyle: "circle", paddingLeft: 20, margin: 0 }}>
                  {services?.length
                    ? services.map((service, index) => (
                        <li
                          style={{
                            borderBottom:
                              index !== services.length - 1 &&
                              "1px solid #302f2f",
                            padding: "16px 0",
                          }}
                        >
                          <p>{service}</p>
                        </li>
                      ))
                    : null}
                </ul>
              </div>

              {tags && tags.length > 0 ? (
                <div className={styles.tags}>
                  {tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}

              {hasButton ? (
                <Button text="Découvrir nos services" isLight isOutlined />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
