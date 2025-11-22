import Main from "../../layouts/main/Main";
import TextCenter from "../../layouts/text-center/TextCenter";
import TextWithImage from "../../layouts/text-with-image/TextWithImage";
import ImageWithText from "../../layouts/image-with-text/ImageWithText";
import Slider from "../../layouts/slider/Slider";
import Partners from "../../layouts/partners/Partners";

export default function Home() {
  return (
    <>
      <Main />
      <TextCenter text="Nous aidons les entreprises à se démarquer grâce à des solutions Print, Marketing Digital et Développement Web innovantes." />
      <TextWithImage
        header="Des solutions créatives et sur mesure"
        subHeader="Chaque projet est unique. Nous combinons design, stratégie et technologie pour créer un impact réel."
      />
      <ImageWithText
        isDark
        header="Prêt à booster votre communication ?"
        subHeader="Contactez-nous dès aujourd’hui pour transformer vos idées en succès."
      />
      <TextWithImage
        header="Des solutions créatives et sur mesure"
        subHeader="Chaque projet est unique. Nous combinons design, stratégie et technologie pour créer un impact réel."
      />
      <ImageWithText
        header="Prêt à booster votre communication ?"
        subHeader="Contactez-nous dès aujourd’hui pour transformer vos idées en succès."
      />
      <Partners />
      <Slider />
    </>
  );
}
