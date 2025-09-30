import styles from "./TextWithImage.module.scss";

export default function TextWithImage() {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.content}>
            <div className={styles.text}>
              <div className={styles.textInner}>
                <h1>Ne manquez rien grâce aux appels vocaux et vidéo</h1>
                <p>
                  Que vous soyez dans un appel de groupe avec des camarades de
                  classe ou au téléphone avec votre mère, les appels vocaux et
                  vidéo vous donneront l’impression d’être dans la même pièce.
                </p>
              </div>

              <button className={styles.btn}>En savoir plus</button>
            </div>
          </div>

          <div className={styles.image}>
            <img
              alt="Page principale de WhatsApp"
              src="https://scontent.whatsapp.net/v/t39.8562-34/472786853_558698087153533_2795908553321527687_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=ZB5ImS7CEk8Q7kNvwGNhvqf&_nc_oc=AdnS0dmd734gJIj_RAaBWRacL5CQQhFQs113ONO5ubYqz0jMyFUi1o8WW_WwAO0JM0A&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=oyTVff5u3rDdKhQzg3HZkg&oh=01_Q5Aa2gF8knI9WYdFkTk4JDpVpw7Y2XuKSyV0EUKNaGdQpA4qzQ&oe=68E1CA34"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
