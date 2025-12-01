import Main from "../../layouts/main/Main";
import TextCenter from "../../layouts/text-center/TextCenter";
import TextWithImage from "../../layouts/text-with-image/TextWithImage";
import ImageWithText from "../../layouts/image-with-text/ImageWithText";
import Slider from "../../layouts/slider/Slider";
import Partners from "../../layouts/partners/Partners";
import tshirt from "../../assets/images/tshirt.jpg";
import papier from "../../assets/images/papier.jpg";
import styles from "./Home.module.scss";
import Cards from "../../layouts/cards/Cards";

export default function Home() {
  return (
    <>
      <Main />
      <TextCenter text="Chez RGI Studio, nous aidons les entreprises à se démarquer grâce à des solutions innovantes en Print, Design et Développement IT." />
      <TextWithImage
        image={tshirt}
        header="Des solutions créatives et entièrement personnalisées"
        subHeader="Parce que chaque projet est unique, RGI Studio combine expertise graphique, stratégie digitale et technologies avancées pour donner vie à des expériences visuelles à fort impact."
      />
      <ImageWithText
        image={papier}
        isDark
        header={
          <>
            Prêt à dynamiser votre{" "}
            <span className={styles.highlight}>communication</span> ?
          </>
        }
        subHeader="Nos équipes vous accompagnent pour transformer vos idées en solutions performantes, durables et adaptées à vos objectifs."
      />
      <Cards />
      <TextWithImage
        image={tshirt}
        header="Un savoir-faire qui allie créativité et performance"
        subHeader="Du concept à la réalisation, RGI Studio développe des supports de communication qui renforcent l’image de votre marque et optimisent votre présence digitale."
      />
      <ImageWithText
        image={tshirt}
        header="Votre projet mérite l’excellence"
        subHeader="Contactez RGI Studio dès aujourd’hui et bénéficiez d’un accompagnement complet pour concrétiser vos ambitions."
      />
      <Partners />
      <Slider />
    </>
  );
}
