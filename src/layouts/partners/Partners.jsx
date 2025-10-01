import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Partners.module.scss";

export default function Partners() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const slidesData = [
    "https://upload.wikimedia.org/wikipedia/commons/d/de/AsusTek-black-logo.png",
    "",
    "https://cdn.freebiesupply.com/images/large/2x/google-logo-black-transparent.png",
    "",
    "https://upload.wikimedia.org/wikipedia/commons/d/de/AsusTek-black-logo.png",
    "",
    "https://upload.wikimedia.org/wikipedia/commons/d/de/AsusTek-black-logo.png",
    "",
    "https://cdn.freebiesupply.com/images/large/2x/google-logo-black-transparent.png",
    "",
    "https://upload.wikimedia.org/wikipedia/commons/d/de/AsusTek-black-logo.png",
    "",
    "https://upload.wikimedia.org/wikipedia/commons/d/de/AsusTek-black-logo.png",
    "",
    "https://cdn.freebiesupply.com/images/large/2x/google-logo-black-transparent.png",
    "",
    "https://upload.wikimedia.org/wikipedia/commons/d/de/AsusTek-black-logo.png",
    "",
  ];

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h3>Ils nous ont fait confiance</h3>
          <p>
            Découvrez nos services de print, communication digitale et
            développement web pour faire briller votre entreprise.
          </p>
        </div>

        <div className={styles.slider}>
          <Slider ref={sliderRef} {...settings}>
            {slidesData.map((src) => (
              <img src={src} alt="" />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
