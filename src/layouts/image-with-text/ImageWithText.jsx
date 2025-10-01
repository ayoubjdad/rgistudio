import styles from "./ImageWithText.module.scss";

export default function ImageWithText({
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
            <img
              alt="Solutions digitales et print"
              src="https://scontent.whatsapp.net/v/t39.8562-34/318725648_934638697913637_6709353489700907679_n.png?stp=dst-webp&ccb=1-7&_nc_sid=73b08c&_nc_ohc=sIc7vW_DxNIQ7kNvwFZ1hDR&_nc_oc=AdkhataiumbCE0lxfktFCXSrerYO_s_WGsI2F4MVtZMoxKbNVPOc3hQ3HNO6H-1Fm0E&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=JxljioMZ7tNt_ebglNWNFQ&oh=01_Q5Aa2gGOdRc68UwtLNHQpcr6Ruldj2DzzCpuJADgmsjOAnaRfQ&oe=68E31226"
            />
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

              <button className={styles.btn}>Découvrir nos services</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
