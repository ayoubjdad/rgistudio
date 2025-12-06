import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h1>
          À propos de nous
          <br /> Découvrez RGI Studio 🚀
        </h1>

        <h3>Qui sommes-nous ?</h3>
        <p>
          RGI Studio est un studio digital spécialisé dans la conception et le
          développement d’expériences numériques haut de gamme. Nous
          accompagnons les entreprises, startups et créateurs dans la
          réalisation de leurs projets en combinant expertise technique,
          créativité et sens du détail.
        </p>
        <p>
          Depuis notre création, nous nous engageons à proposer des solutions
          qui allient performance, design et innovation. Notre approche repose
          sur une compréhension profonde des besoins de nos clients afin de
          créer des produits qui ont du sens, de la valeur et un véritable
          impact.
        </p>

        <h3>Notre Vision 🌟</h3>
        <p>
          Nous croyons que la technologie est un levier puissant lorsqu’elle est
          guidée par une vision humaine et stratégique. Chez RGI Studio, nous
          aspirons à construire un monde numérique plus intuitif, plus
          accessible et plus créatif.
        </p>
        <p>
          Notre objectif est de devenir un partenaire de confiance pour les
          entreprises qui souhaitent innover, se moderniser ou améliorer leur
          présence digitale. Nous mettons un point d’honneur à créer des
          solutions durables, évolutives et pensées pour les utilisateurs
          finaux.
        </p>

        <h3>Notre équipe 👥</h3>
        <p>
          Notre force réside dans la diversité de nos profils : développeurs,
          designers, stratèges et créatifs unissent leurs expertises pour donner
          vie à des projets uniques. Ensemble, nous formons une équipe soudée,
          passionnée et déterminée à créer le meilleur pour nos clients.
        </p>

        <h3>Notre ambition 🚀</h3>
        <p>
          Continuer de grandir, d’innover et d’accompagner les marques qui
          souhaitent construire le digital de demain. Chez RGI Studio, chaque
          projet est une opportunité de créer quelque chose d’exceptionnel.
        </p>
      </div>
    </section>
  );
}
