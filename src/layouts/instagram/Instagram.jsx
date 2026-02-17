import styles from "./Instagram.module.scss";
import { fadeUp, stagger } from "../../theme/motion-effects";
import { motion } from "framer-motion";

const instagramPosts = [
  "https://instagram.frba1-1.fna.fbcdn.net/v/t51.82787-15/632125485_18525759214068637_2214413659711101241_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzgzMTc0MDcxMjg5NTY4ODc2NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=CgxPKEoJgN8Q7kNvwHCXEnB&_nc_oc=AdlxL2ACxPMli846EpZFSzJRpr1IvSnx-aRx-w4zULff0T34uxeVqmqwxvQj1T6KOCw&_nc_ad=z-m&_nc_cid=1404&_nc_zt=23&_nc_ht=instagram.frba1-1.fna&_nc_gid=F_1H6Vo1BmaTICXCzaMTXQ&oh=00_AfssHFl18o4UaYK8nDI8IeLNRTlbkfXuoaIx3yyTMQtrnw&oe=69952CA1",
  "https://instagram.frba1-1.fna.fbcdn.net/v/t51.82787-15/632125485_18525759214068637_2214413659711101241_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzgzMTc0MDcxMjg5NTY4ODc2NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=CgxPKEoJgN8Q7kNvwHCXEnB&_nc_oc=AdlxL2ACxPMli846EpZFSzJRpr1IvSnx-aRx-w4zULff0T34uxeVqmqwxvQj1T6KOCw&_nc_ad=z-m&_nc_cid=1404&_nc_zt=23&_nc_ht=instagram.frba1-1.fna&_nc_gid=F_1H6Vo1BmaTICXCzaMTXQ&oh=00_AfssHFl18o4UaYK8nDI8IeLNRTlbkfXuoaIx3yyTMQtrnw&oe=69952CA1",
  "https://instagram.frba1-1.fna.fbcdn.net/v/t51.82787-15/632125485_18525759214068637_2214413659711101241_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzgzMTc0MDcxMjg5NTY4ODc2NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=CgxPKEoJgN8Q7kNvwHCXEnB&_nc_oc=AdlxL2ACxPMli846EpZFSzJRpr1IvSnx-aRx-w4zULff0T34uxeVqmqwxvQj1T6KOCw&_nc_ad=z-m&_nc_cid=1404&_nc_zt=23&_nc_ht=instagram.frba1-1.fna&_nc_gid=F_1H6Vo1BmaTICXCzaMTXQ&oh=00_AfssHFl18o4UaYK8nDI8IeLNRTlbkfXuoaIx3yyTMQtrnw&oe=69952CA1",
];

export default function Instagram() {
  return (
    <motion.section
      className={styles.instagram}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className={styles.instagram_container}>
        <motion.div className={styles.instagram_title} variants={fadeUp}>
          <h1>
            Dernières publications Instagram<span>.</span>
          </h1>
          <p>
            Un aperçu de nos productions imprimées, systèmes de branding,
            campagnes et lancements digitaux les plus récents.
          </p>
        </motion.div>

        <motion.div
          className={styles.instagram_content_wrapper}
          variants={stagger}
        >
          <motion.div className={styles.instagram_content} variants={fadeUp}>
            {instagramPosts.map((post) => (
              <motion.div
                className={styles.instagram_content_right}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 180 }}
                style={{ backgroundImage: `url(${post})` }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
