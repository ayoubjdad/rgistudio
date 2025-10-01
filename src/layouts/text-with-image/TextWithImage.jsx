import styles from "./TextWithImage.module.scss";

export default function TextWithImage({
  header = "Boostez votre visibilité avec nos solutions digitales",
  subHeader = "De la création graphique au développement web, nous accompagnons votre entreprise pour communiquer efficacement et toucher vos clients là où ils se trouvent. Nos solutions print et digitales sont conçues pour faire passer vos projets au niveau supérieur.",
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
              </div>

              <button className={styles.btn}>Découvrir nos services</button>
            </div>
          </div>

          <div className={styles.image}>
            <img
              alt="Solutions digitales et print"
              src="https://scontent.whatsapp.net/v/t39.8562-34/472786853_558698087153533_2795908553321527687_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=ZB5ImS7CEk8Q7kNvwGNhvqf&_nc_oc=AdnS0dmd734gJIj_RAaBWRacL5CQQhFQs113ONO5ubYqz0jMyFUi1o8WW_WwAO0JM0A&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=oyTVff5u3rDdKhQzg3HZkg&oh=01_Q5Aa2gF8knI9WYdFkTk4JDpVpw7Y2XuKSyV0EUKNaGdQpA4qzQ&oe=68E1CA34"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
