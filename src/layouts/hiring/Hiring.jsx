import styles from "./Hiring.module.scss";
import { motion } from "framer-motion";
import { redirect } from "react-router";
import { fadeUp, stagger } from "../../theme/motion-effects";

const hiring = [
  "Web, SaaS & mobile / développement",
  "Design créatif / branding & packaging",
  "Marketing de performance / campagnes de croissance",
  "Grand format / signalétique & affichage",
  "Offset & digital / impression haute qualité",
  "Design UI/UX / orienté conversion",
  "Sites web sur mesure / plateformes évolutives",
  "Solutions startup / du MVP à l’échelle",
  "Production & logistique / de A à Z",
];

const jobsOpened = [
  {
    tags: ["Design graphique", "Temps plein"],
    title: "Senior Brand & Print Designer",
    link: "#",
  },
  {
    tags: ["Développement", "Temps plein"],
    title: "Développeur Frontend (React)",
    link: "#",
  },
  {
    tags: ["Marketing", "Temps plein"],
    title: "Spécialiste Marketing",
    link: "#",
  },
  {
    tags: ["Production", "Sur site"],
    title: "Responsable Production Impression",
    link: "#",
  },
];

export default function Hiring() {
  return (
    <motion.section
      className={styles.hiring}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className={styles.hiring_container}>
        <motion.div
          className={styles.hiring_track}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
        >
          {[...hiring, ...hiring].map((item, index) => (
            <div key={index} className={styles.hiring_header_item}>
              <span className={styles.spark}>✦</span>
              <p>{item}</p>
            </div>
          ))}
        </motion.div>

        <motion.div className={styles.hiring_title} variants={fadeUp}>
          <h1>
            Nous grandissons<span>.</span>
          </h1>
          <p>
            Nous recherchons toujours des designers, imprimeurs, développeurs et
            marketeurs talentueux souhaitant travailler sur des projets à fort
            impact.
          </p>
        </motion.div>

        <motion.div className={styles.hiring_content_main}>
          <motion.div
            className={styles.hiring_content_wrapper}
            variants={stagger}
          >
            {jobsOpened.map((item, index) => (
              <motion.div
                key={index}
                className={styles.hiring_content_card}
                transition={{ type: "spring", stiffness: 180 }}
              >
                <p className={styles.hiring_content_card_title}>
                  {item.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </p>
                <h1>{item.title}</h1>
                <p onClick={() => redirect(item.link)}>Voir l’offre</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
