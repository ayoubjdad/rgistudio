import styles from "./Company.module.scss";
import { motion, useMotionValue, useTransform } from "framer-motion";
import logo from "../../assets/rgi-logo.png";
import { redirect } from "react-router";

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

const hiring = [
  "15+ years / printing & digital excellence",
  "300+ brands / trusted worldwide",
  "50K+ projects / delivered successfully",
  "Branding & design / visual identities",
  "Large format printing / signage & displays",
  "Commercial print / offset & digital",
  "Websites & platforms / high-performance",
  "SaaS & mobile apps / scalable solutions",
  "UI/UX design / conversion-driven",
  "Digital marketing / growth campaigns",
  "Production & logistics / end-to-end service",
  "From concept to delivery / one partner",
];

export default function Company() {
  const jobsOpened = [
    {
      tags: ["Design", "Full-time"],
      title: "Senior Brand & Print Designer",
      link: "#",
    },
    {
      tags: ["Development", "Full-time"],
      title: "Frontend Web Developer (React)",
      link: "#",
    },
    {
      tags: ["Marketing", "Full-time"],
      title: "Performance Marketing Specialist",
      link: "#",
    },
    {
      tags: ["Production", "On-site"],
      title: "Print Production Manager",
      link: "#",
    },
  ];

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
            <motion.h1 variants={fadeUp}>Print. Digital. Impact.</motion.h1>
            <motion.p variants={fadeUp}>
              RGI Studio is a creative production partner specializing in
              high-end printing, branding and digital experiences. We help
              brands stand out, scale faster and perform better — online and
              offline.
            </motion.p>

            <motion.div className={styles.hero_buttons} variants={fadeUp}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${styles.hero_button} ${styles.hero_button_secondary}`}
              >
                Work with us
                <i className="fi fi-rs-arrow-small-right" />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.hero_right}
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            <motion.div className={styles.hero_cards} variants={stagger}>
              <motion.div className={styles.hero_card} variants={fadeUp}>
                <h1>50K+</h1>
                <hr />
                <p>
                  print projects delivered with precision, speed and consistency
                </p>
              </motion.div>
              <motion.div className={styles.hero_card} variants={fadeUp}>
                <h1>300+</h1>
                <hr />
                <p>
                  brands supported across design, marketing and digital growth
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* VALUES */}
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
              Our values<span>.</span>
            </h1>
            <p>
              At RGI Studio, we combine craftsmanship, creativity and
              performance. These principles guide everything we design, print
              and build.
            </p>
          </motion.div>

          <motion.div className={styles.keyNumbers_content_wrapper}>
            <motion.div className={styles.keyNumbers_content}>
              <motion.div className={styles.keyNumbers_content_left}>
                <h1>Precision</h1>
                <p>
                  Every detail matters. From color accuracy to digital
                  performance, we obsess over quality and execution.
                </p>
              </motion.div>

              <motion.div className={styles.keyNumbers_content_right}>
                <h1>Collaboration</h1>
                <p>
                  We work as an extension of your team, aligning strategy,
                  creativity and production into one seamless workflow.
                </p>
              </motion.div>
            </motion.div>

            <motion.div className={styles.keyNumbers_content_bottom}>
              <motion.div className={styles.keyNumbers_content_bottom_text}>
                <h1>Transparency</h1>
                <p>
                  Clear communication, honest timelines and measurable results —
                  no surprises, just performance.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* OUR TEAM */}
      <motion.section
        className={styles.ourTeam}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.ourTeam_container}>
          <motion.div className={styles.ourTeam_title} variants={fadeUp}>
            <h1>
              Our studio<span>.</span>
            </h1>
            <p>
              Designers, printers, developers and marketers working together to
              create bold brands, powerful campaigns and high-performing digital
              products.
            </p>
          </motion.div>

          <div className={styles.ourTeam_content}>
            <div className={styles.ourTeam_content_head}>
              <div />
              <div className={styles.ourTeam_card_head}>
                <h1>11</h1>
                <p>points</p>
              </div>
            </div>
            <div className={styles.ourTeam_content_one}>
              <div
                className={styles.ourTeam_card}
                style={{ borderRadius: "20px 0px 0px" }}
              >
                <i className="fi fi-ts-database-management" />
                <p>Data-driven</p>
              </div>
              <div className={styles.ourTeam_card}>
                <i className="fi fi-ts-book-alt" />
                <p>Skilled</p>
              </div>
              <div className={styles.ourTeam_card}>
                <i className="fi fi-ts-chart-histogram" />
                <p>Results-focused</p>
              </div>
            </div>
            <div className={styles.ourTeam_content_two}>
              <div className={styles.ourTeam_card}>
                <i className="fi fi-ts-refresh" /> <p>Collaborative</p>
              </div>
              <div className={styles.ourTeam_card}>
                <i className="fi fi-ts-shopping-bag" /> <p>Professional</p>
              </div>
              <div className={styles.ourTeam_card}>
                <i className="fi fi-ts-rocket-lunch" /> <p>Innovative</p>
              </div>
            </div>
            <div className={styles.ourTeam_content_two}>
              <div className={styles.ourTeam_card}>
                <i className="fi fi-ts-hr-person" /> <p>Supportive</p>
              </div>
              <div className={styles.ourTeam_card}>
                <i className="fi fi-ts-fire-flame-curved" /> <p>Passionate</p>
              </div>
              <div className={styles.ourTeam_card}>
                <i className="fi fi-ts-archery" /> <p>Ambitious</p>
              </div>
            </div>
            <div className={styles.ourTeam_content_one}>
              <div className={styles.ourTeam_card}>
                <i className="fi fi-ts-shield" /> <p>Reliable</p>
              </div>
              <div
                className={styles.ourTeam_card}
                style={{ borderRadius: "0px 0px 20px 0px" }}
              >
                <i className="fi fi-ts-star" /> <p>Excellence-driven</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* WE ARE HIRING */}
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
              Join the studio<span>.</span>
            </h1>
            <p>
              We’re always looking for designers, printers, developers and
              marketers who want to work on ambitious projects across print and
              digital industries.
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
                  <p onClick={() => redirect(item.link)}>View role</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* INSTAGRAM / WORK */}
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
              Our work<span>.</span>
            </h1>
            <p>
              A look at our latest print productions, brand identities,
              campaigns and digital experiences — built for performance and
              impact.
            </p>
          </motion.div>

          <motion.div
            className={styles.instagram_content_wrapper}
            variants={stagger}
          >
            <motion.div className={styles.instagram_content} variants={fadeUp}>
              <motion.div
                className={styles.instagram_content_right}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 180 }}
                style={{
                  backgroundImage: `url(data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"width="126"height="126"><path id="a"d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z"fill="rgb(136, 136, 136, 0.2)"fill-rule="evenodd"/></svg>)`,
                }}
              ></motion.div>

              <motion.div
                className={styles.instagram_content_right}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 180 }}
              ></motion.div>

              <motion.div
                className={styles.instagram_content_right}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 180 }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
