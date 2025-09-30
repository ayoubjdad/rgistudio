import { useRef } from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import styles from "./Slider.module.scss";
import "slick-carousel/slick/slick-theme.css";

export default function CustomSlider() {
  const sliderRef = useRef(null); // <-- create ref

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const slidesData = [
    {
      id: 1,
      title: "Découvrez la traduction des messages",
      description:
        "Sachant que plus de 3 milliards de personnes, dans plus de 180 pays, utilisent WhatsApp...",
    },
    {
      id: 2,
      title:
        "De nouvelles manières de planifier les appels sur WhatsApp et d’y participer",
      description:
        "Aujourd’hui, nous annonçons de nouvelles fonctionnalités sur WhatsApp...",
    },
    {
      id: 3,
      title: "Découvrez les nouvelles fonctionnalités de WhatsApp",
      description:
        "Sachant que plus de 3 milliards de personnes, dans plus de 180 pays, utilisent WhatsApp...",
    },
    {
      id: 4,
      title: "Découvrez les nouvelles fonctionnalités de WhatsApp",
      description:
        "Sachant que plus de 3 milliards de personnes, dans plus de 180 pays, utilisent WhatsApp...",
    },
  ];

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.textInner}>
            <h1>Échangez des messages privés</h1>
            <p>
              Recevez les dernières actualités de WhatsApp: nouveautés, conseils
              utiles et nouvelles fonctionnalités pour vous aider à garder le
              contact.
            </p>
          </div>

          <div className={styles.buttons}>
            <Box
              component="i"
              className={`fi fi-ts-arrow-small-left ${styles.icon}`}
              onClick={() => sliderRef.current.slickNext()}
            />
            <Box
              component="i"
              className={`fi fi-ts-arrow-small-right ${styles.icon}`}
              onClick={() => sliderRef.current.slickPrev()}
            />
          </div>
        </div>
        <div className={styles.slider}>
          <Slider ref={sliderRef} {...settings}>
            {slidesData.map((slide, index) => (
              <div key={slide.id} className={styles.slide}>
                <p>{index + 1}</p>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                <button className={styles.btn}>Lire la suite</button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
