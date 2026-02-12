import styles from "./Services.module.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* ---------------- ANIMATIONS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ---------------- DATA ---------------- */

const services = [
  {
    name: "Branding & Identity",
    description:
      "Brand strategy, logo systems, packaging design and visual storytelling that build recognition and trust.",
    tags: ["Brand Strategy", "Logos", "Packaging", "Visual Systems"],
    image:
      "https://framerusercontent.com/images/KnlOHRMUaFoTuK0TzXQl9ezLn8.png?scale-down-to=1024",
  },
  {
    name: "Commercial Printing",
    description:
      "Premium offset and digital printing for brochures, catalogs, magazines, books and marketing collateral.",
    tags: ["Offset", "Digital", "Finishing", "Quality Control"],
    image:
      "https://framerusercontent.com/images/KnlOHRMUaFoTuK0TzXQl9ezLn8.png?scale-down-to=1024",
  },
  {
    name: "Large Format & Signage",
    description:
      "High-impact signage solutions for retail, exhibitions, outdoor campaigns and brand environments.",
    tags: ["Billboards", "POS", "Exhibitions", "Retail Displays"],
    image:
      "https://framerusercontent.com/images/KnlOHRMUaFoTuK0TzXQl9ezLn8.png?scale-down-to=1024",
  },
  {
    name: "Websites & Platforms",
    description:
      "High-performance marketing websites, dashboards and portals designed for speed and conversion.",
    tags: ["React", "SEO", "Performance", "CMS"],
    image:
      "https://framerusercontent.com/images/KnlOHRMUaFoTuK0TzXQl9ezLn8.png?scale-down-to=1024",
  },
  {
    name: "SaaS & Mobile Applications",
    description:
      "Scalable SaaS platforms and mobile applications built for growth, security and long-term performance.",
    tags: ["SaaS", "iOS", "Android", "Cloud"],
    image:
      "https://framerusercontent.com/images/KnlOHRMUaFoTuK0TzXQl9ezLn8.png?scale-down-to=1024",
  },
  {
    name: "Digital Marketing & Growth",
    description:
      "SEO, paid media, social campaigns and analytics-driven growth strategies that scale acquisition.",
    tags: ["SEO", "Paid Ads", "Analytics", "CRO"],
    image:
      "https://framerusercontent.com/images/KnlOHRMUaFoTuK0TzXQl9ezLn8.png?scale-down-to=1024",
  },
  {
    name: "UI/UX Design",
    description:
      "User research, interface design and experience optimization for products that users love.",
    tags: ["UX Research", "UI Design", "Prototyping", "Testing"],
    image:
      "https://framerusercontent.com/images/KnlOHRMUaFoTuK0TzXQl9ezLn8.png?scale-down-to=1024",
  },
  {
    name: "Production & Logistics",
    description:
      "End-to-end production, fulfillment and distribution services across local and global markets.",
    tags: ["Warehousing", "Shipping", "Fulfillment", "Supply Chain"],
    image:
      "https://framerusercontent.com/images/KnlOHRMUaFoTuK0TzXQl9ezLn8.png?scale-down-to=1024",
  },
  {
    name: "Startup & MVP Solutions",
    description:
      "Rapid validation, MVP builds and scalable systems for startups launching and growing fast.",
    tags: ["MVP", "Product Strategy", "Prototyping", "Growth"],
    image:
      "https://framerusercontent.com/images/KnlOHRMUaFoTuK0TzXQl9ezLn8.png?scale-down-to=1024",
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className={styles.servicesHero}>
        <motion.div
          className={styles.servicesHero_container}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.servicesHero_left} variants={stagger}>
            <motion.h1 variants={fadeUp}>
              End-to-end services<span>.</span>
            </motion.h1>
            <motion.p variants={fadeUp}>
              From strategy and design to production, development and growth —
              we deliver fully integrated solutions across print, branding,
              digital platforms and marketing.
            </motion.p>

            <motion.div
              className={styles.servicesHero_buttons}
              variants={fadeUp}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${styles.servicesHero_button} ${styles.servicesHero_button_secondary}`}
                onClick={() => navigate("/contact")}
              >
                Request a quote
                <i className="fi fi-rs-arrow-small-right" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.servicesHero_button}
                onClick={() => navigate("/work")}
              >
                View our work
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.servicesHero_right}
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className={styles.servicesHero_stats}
              variants={stagger}
            >
              <motion.div
                className={styles.servicesHero_stat}
                variants={fadeUp}
              >
                <h1>15+</h1>
                <hr />
                <p>years of printing, branding and digital excellence</p>
              </motion.div>
              <motion.div
                className={styles.servicesHero_stat}
                variants={fadeUp}
              >
                <h1>300+</h1>
                <hr />
                <p>brands supported across industries worldwide</p>
              </motion.div>
              <motion.div
                className={styles.servicesHero_stat}
                variants={fadeUp}
              >
                <h1>50K+</h1>
                <hr />
                <p>projects delivered across physical and digital channels</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ---------------- OVERVIEW ---------------- */}
      <motion.section
        className={styles.servicesOverview}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.servicesOverview_container}>
          <motion.p variants={fadeUp}>
            <span>At RGI Studio</span>, we operate as a full-service production
            and digital agency — combining premium printing, creative branding
            and advanced software development under one roof.
          </motion.p>
          <motion.p variants={fadeUp}>
            Whether you need physical production, digital platforms or
            performance marketing, our integrated teams ensure consistency,
            speed and measurable business results.
          </motion.p>
        </div>
      </motion.section>

      {/* ---------------- SERVICE CATEGORIES ---------------- */}
      <motion.section
        className={styles.servicesCategories}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.servicesCategories_container}>
          <motion.div
            className={styles.servicesCategories_header}
            variants={fadeUp}
          >
            <div className={styles.servicesCategories_left}>
              <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                360°
              </motion.h1>
            </div>
            <div className={styles.servicesCategories_right}>
              <div className={styles.servicesCategories_smallTitle}>
                <h3 className={styles.servicesCategories_title}>
                  services<span>.</span>
                </h3>
                <p>
                  A complete service ecosystem — from concept and creation to
                  production, launch and long-term growth.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div className={styles.servicesGrid} variants={stagger}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={styles.serviceCard}
                variants={fadeUp}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <div className={styles.serviceCard_info}>
                  <motion.div
                    initial={{ scale: 0.6, rotate: -15, opacity: 0 }}
                    whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "6px",
                      backgroundColor: "red",
                    }}
                  />
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>

                  <div className={styles.serviceCard_tags}>
                    {service.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ---------------- PROCESS ---------------- */}
      <motion.section
        className={styles.servicesProcess}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.servicesProcess_container}>
          <motion.div className={styles.servicesProcess_title}>
            <h1>
              How we work<span>.</span>
            </h1>
            <p>
              A proven, structured approach that ensures quality, consistency
              and business results across print, digital and marketing projects.
            </p>
          </motion.div>

          <motion.div className={styles.servicesProcess_content_wrapper}>
            <motion.div className={styles.servicesProcess_content}>
              <motion.div className={styles.servicesProcess_left}>
                <h1>01</h1>
                <p>
                  <b>Strategy & consulting</b> — aligning business objectives,
                  market insights and execution roadmaps
                </p>
              </motion.div>

              <motion.div className={styles.servicesProcess_right}>
                <h1>02</h1>
                <p>
                  <b>Design & experience</b> — branding, visuals, UX/UI and
                  content built for impact and conversion
                </p>
              </motion.div>
            </motion.div>

            <motion.div className={styles.servicesProcess_bottom}>
              <motion.div className={styles.servicesProcess_bottom_text}>
                <h1>03</h1>
                <p>
                  <b>Production & development</b> — premium print manufacturing,
                  scalable web platforms and mobile applications
                </p>
              </motion.div>
            </motion.div>

            <motion.div className={styles.servicesProcess_content}>
              <motion.div className={styles.servicesProcess_left_bottom}>
                <h1>04</h1>
                <p>
                  <b>Launch & distribution</b> — logistics, deployment and
                  go-live across physical and digital channels
                </p>
              </motion.div>

              <motion.div className={styles.servicesProcess_right}>
                <h1>05</h1>
                <p>
                  <b>Growth & optimization</b> — marketing, analytics and
                  continuous performance improvement
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ---------------- CTA ---------------- */}
      <motion.section
        className={styles.servicesCTA}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.servicesCTA_container}>
          <motion.h1 variants={fadeUp}>
            Let’s build something impactful<span>.</span>
          </motion.h1>
          <motion.p variants={fadeUp}>
            Whether you need premium printing, branding systems, web platforms
            or scalable growth strategies — our team is ready to help you
            execute.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${styles.servicesHero_button} ${styles.servicesHero_button_secondary}`}
            onClick={() => navigate("/contact")}
          >
            Start a project
            <i className="fi fi-rs-arrow-small-right" />
          </motion.button>
        </div>
      </motion.section>
    </>
  );
}
