import styles from "./Home.module.scss";
import { motion } from "framer-motion";
import { ReactComponent as Shape } from "../../assets/svg/shape.svg";
import { useNavigate } from "react-router";
import { fadeUp, scaleIn, stagger } from "../../theme/motion-effects";
import Hiring from "../../layouts/hiring/Hiring";
import Instagram from "../../layouts/instagram/Instagram";
import { services } from "../../data/global.data";
import Team from "../../layouts/team/Team";
import rollup3d from "../../assets/images/Sans titre-1.png";

const partners = [
  "https://www.wikiberal.org/images/c/c3/Logo_Google.png",
  "https://www.wikiberal.org/images/c/c3/Logo_Google.png",
  "https://www.wikiberal.org/images/c/c3/Logo_Google.png",
  "https://www.wikiberal.org/images/c/c3/Logo_Google.png",
  "https://www.wikiberal.org/images/c/c3/Logo_Google.png",
  "https://www.wikiberal.org/images/c/c3/Logo_Google.png",
  "https://www.wikiberal.org/images/c/c3/Logo_Google.png",
  "https://www.wikiberal.org/images/c/c3/Logo_Google.png",
  "https://www.wikiberal.org/images/c/c3/Logo_Google.png",
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.hero_container}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.hero_left} variants={stagger}>
            <motion.h1 variants={fadeUp}>
              Design studio for <span>ambitious</span> startups
            </motion.h1>
            <motion.p variants={fadeUp}>
              From idea to launch and beyond — Without stress.
            </motion.p>

            <motion.div className={styles.hero_buttons} variants={fadeUp}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${styles.hero_button} ${styles.hero_button_secondary}`}
                onClick={() => navigate("/get-a-quote")}
              >
                Demander un devis
                <i className="fi fi-rs-arrow-small-right"></i>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.hero_button}
                onClick={() => navigate("/work")}
              >
                Voir nos réalisations
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.hero_right}
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            <GlowShape />

            <motion.div className={styles.hero_cards} variants={stagger}>
              <motion.div className={styles.hero_card} variants={fadeUp}>
                <h1>170+</h1>
                <hr />
                <p>
                  projets imprimés livrés avec une qualité constante et des
                  délais rapides
                </p>
              </motion.div>
              <motion.div className={styles.hero_card} variants={fadeUp}>
                <h1>60+</h1>
                <hr />
                <p>
                  marques accompagnées grâce au design, marketing et croissance
                  digitale
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* PRESENTATION */}
      <motion.section
        className={styles.presentation}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.presentation_container}>
          <motion.p variants={fadeUp}>
            <span>Chez RGI Studio</span>, nous combinons impression haut de
            gamme, branding créatif et innovation digitale pour aider les
            entreprises à se démarquer, mieux communiquer et grandir plus
            rapidement — en ligne et hors ligne.
          </motion.p>
          <motion.p variants={fadeUp}>
            De la carte de visite au panneau publicitaire, des landing pages aux
            plateformes SaaS, nous livrons des solutions évolutives conçues pour
            la performance, la durabilité et l’impact de marque à long terme.
          </motion.p>
        </div>
      </motion.section>

      {/* SERVICES */}
      <motion.section
        className={styles.products}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.products_container}>
          <motion.div className={styles.products_header} variants={fadeUp}>
            <div className={styles.products_left}>
              <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                360°
              </motion.h1>
            </div>
            <div className={styles.products_right}>
              <div className={styles.products_smallTitle}>
                <h3 className={styles.products_title}>
                  services<span>.</span>
                </h3>
                <p>
                  Une agence de production et digitale complète couvrant
                  impression, design, marketing, plateformes web et applications
                  mobiles — tout sous un même toit.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div className={styles.products_content} variants={stagger}>
            {services.map((product, index) => (
              <motion.div
                key={index}
                className={styles.product}
                variants={fadeUp}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <div className={styles.product_info}>
                  <motion.div
                    initial={{ scale: 0.6, rotate: -15, opacity: 0 }}
                    whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(254, 80, 17)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                    }}
                  >
                    <i className={product.icon} style={{ fontSize: 24 }} />
                  </motion.div>
                  <h3>{product.name}</h3>
                  <p>{product.shortDescription}</p>
                </div>
                <div className={styles.product_image}>
                  <img
                    src={
                      rollup3d ||
                      "https://framerusercontent.com/images/8XqwUzzsLJM74vFK57g4JBMUzk.png"
                    }
                    alt=""
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            className={`${styles.hero_button} ${styles.hero_button_secondary}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeUp}
            onClick={() => navigate("/services")}
          >
            Explorer tous les services
            <i className="fi fi-rs-arrow-small-right"></i>
          </motion.button>
        </div>
      </motion.section>

      {/* PROCESS */}
      <motion.section
        className={styles.keyNumbers}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.keyNumbers_container}>
          <motion.div className={styles.keyNumbers_title}>
            <h1>
              Notre processus<span>.</span>
            </h1>
            <p>
              De l’idée à la livraison, nous gérons chaque étape — stratégie,
              design, production, développement et déploiement — avec précision
              et cohérence.
            </p>
          </motion.div>

          <motion.div className={styles.keyNumbers_content_wrapper}>
            <motion.div className={styles.keyNumbers_content}>
              <motion.div className={styles.keyNumbers_content_left}>
                <h1>01</h1>
                <p>
                  <b>Stratégie & conseil</b> — comprendre votre activité, votre
                  marché et vos objectifs
                </p>
                <GlowShape />
              </motion.div>

              <motion.div className={styles.keyNumbers_content_right}>
                <h1>02</h1>
                <p>
                  <b>Design & création</b> — branding, visuels, UX/UI et
                  contenus conçus pour l’impact
                </p>
              </motion.div>
            </motion.div>

            <motion.div className={styles.keyNumbers_content_bottom}>
              <motion.div className={styles.keyNumbers_content_bottom_text}>
                <h1>03</h1>
                <p>
                  <b>Production & développement</b> — impression premium,
                  plateformes web, SaaS et applications mobiles
                </p>
              </motion.div>

              <MotionVideo />
            </motion.div>

            <motion.div className={styles.keyNumbers_content}>
              <motion.div className={styles.keyNumbers_content_right}>
                <h1>04</h1>
                <p>
                  <b>Croissance & optimisation</b> — marketing, analytics et
                  amélioration continue
                </p>
              </motion.div>

              <motion.div className={styles.keyNumbers_content_left_bottom}>
                <h1>05</h1>
                <p>
                  <b>Lancement & distribution</b> — logistique, déploiement et
                  mise en ligne
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* PARTNERS */}
      <motion.section
        className={styles.partners}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.partners_container}>
          <motion.div className={styles.partners_title} variants={fadeUp}>
            <h1>
              Nos partenaires<span>.</span>
            </h1>
            <p>
              Faites partie de l'aventure, des entreprises performantes nous
              font déjà confiance
            </p>
          </motion.div>

          <motion.div
            className={styles.partners_track}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
          >
            {[...partners, ...partners].map((item, index) => (
              <div key={index} className={styles.partners_header_item}>
                <img src={item} alt="" className={styles.partners_logo} />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* OUR TEAM */}
      <Team />

      {/* WE ARE HIRING */}
      <Hiring />

      {/* INSTAGRAM */}
      <Instagram />
    </>
  );
}

const MotionVideo = () => {
  return (
    <motion.div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        perspective: 900,
        willChange: "transform",
      }}
    >
      <motion.video
        src="https://framerusercontent.com/assets/OIgm9zKi72y7IttffNKf15uihks.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100px",
          objectFit: "cover",
          transformStyle: "preserve-3d",
          boxShadow: "0 40px 80px rgba(0,0,0,0.25)",
        }}
      />
    </motion.div>
  );
};

const GlowShape = () => {
  return (
    <div className={styles.glowShape}>
      <div style={{ height: "100%", width: "100%" }}>
        <Shape />
      </div>
    </div>
  );
};
