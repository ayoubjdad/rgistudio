import styles from "./Instagram.module.scss";
import { fadeUp, stagger } from "../../theme/motion-effects";
import { motion } from "framer-motion";

const instagramPosts = [
  "https://instagram.frba1-3.fna.fbcdn.net/v/t51.82787-15/573505596_18061388063552325_1908672466988867275_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=Mzc1MzQyODczOTA2MjI3NDA4OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=k1QGucj8p9sQ7kNvwH-1lCN&_nc_oc=AdlZxqm3rv8aPr5P8LdF-W_ARnGJ8BTlURr5FGq89Ui1QX5vETGFr7UfiG3yTYzx_gg&_nc_ad=z-m&_nc_cid=1404&_nc_zt=23&_nc_ht=instagram.frba1-3.fna&_nc_gid=aPh8AXBSXZBG8BYFS3vgxA&oh=00_Afsx1LCHIBRMGjTMsd9v9FqN3KdH2priUkiYzh2gh0nrjw&oe=69A01DBE",
  "https://instagram.frba1-3.fna.fbcdn.net/v/t51.82787-15/573505596_18061388063552325_1908672466988867275_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=Mzc1MzQyODczOTA2MjI3NDA4OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=k1QGucj8p9sQ7kNvwH-1lCN&_nc_oc=AdlZxqm3rv8aPr5P8LdF-W_ARnGJ8BTlURr5FGq89Ui1QX5vETGFr7UfiG3yTYzx_gg&_nc_ad=z-m&_nc_cid=1404&_nc_zt=23&_nc_ht=instagram.frba1-3.fna&_nc_gid=aPh8AXBSXZBG8BYFS3vgxA&oh=00_Afsx1LCHIBRMGjTMsd9v9FqN3KdH2priUkiYzh2gh0nrjw&oe=69A01DBE",
  "https://instagram.frba1-3.fna.fbcdn.net/v/t51.82787-15/573505596_18061388063552325_1908672466988867275_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=Mzc1MzQyODczOTA2MjI3NDA4OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=k1QGucj8p9sQ7kNvwH-1lCN&_nc_oc=AdlZxqm3rv8aPr5P8LdF-W_ARnGJ8BTlURr5FGq89Ui1QX5vETGFr7UfiG3yTYzx_gg&_nc_ad=z-m&_nc_cid=1404&_nc_zt=23&_nc_ht=instagram.frba1-3.fna&_nc_gid=aPh8AXBSXZBG8BYFS3vgxA&oh=00_Afsx1LCHIBRMGjTMsd9v9FqN3KdH2priUkiYzh2gh0nrjw&oe=69A01DBE",
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
