import { useRef } from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Slider.module.scss";

export default function CustomSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slidesData = [
    {
      id: 1,
      title: "Design & Print créatif",
      description:
        "Nous réalisons vos supports print avec un design unique et impactant pour valoriser votre marque.",
    },
    {
      id: 2,
      title: "Communication digitale performante",
      description:
        "Stratégies et contenus digitaux sur mesure pour toucher votre audience et booster votre visibilité.",
    },
    {
      id: 3,
      title: "Développement web sur-mesure",
      description:
        "Création de sites web modernes et applications interactives, adaptées à vos besoins et à votre image.",
    },
    {
      id: 4,
      title: "Solutions complètes & intégrées",
      description:
        "Nous combinons print, digital et web pour offrir à votre entreprise une communication cohérente et efficace.",
    },
  ];

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.textInner}>
            <h1>Boostez votre communication</h1>
            <p>
              Découvrez nos services de print, communication digitale et
              développement web pour faire briller votre entreprise.
            </p>
          </div>

          <div className={styles.buttons}>
            <Box
              component="i"
              className={`fi fi-ts-arrow-small-left ${styles.icon}`}
              onClick={() => sliderRef.current.slickPrev()}
            />
            <Box
              component="i"
              className={`fi fi-ts-arrow-small-right ${styles.icon}`}
              onClick={() => sliderRef.current.slickNext()}
            />
          </div>
        </div>

        <div className={styles.slider}>
          <Slider ref={sliderRef} {...settings}>
            {slidesData.map((slide) => (
              <div key={slide.id} className={styles.slide}>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                <button className={styles.btn}>En savoir plus</button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
