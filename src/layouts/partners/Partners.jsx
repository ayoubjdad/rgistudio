import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Partners.module.scss";
import assimil from "../../assets/partners/assimil.png";
import ifim from "../../assets/partners/ifim.png";
import barifood from "../../assets/partners/barifood.png";
import msc from "../../assets/partners/msc.png";
import fnm from "../../assets/partners/fnm.png";
import logo from "../../assets/logo/rgi-logo.png";

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
    logo,
    "",
    logo,
    "",
    logo,
    "",
    logo,
    "",
    logo,
    "",
    logo,
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
