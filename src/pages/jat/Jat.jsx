import styles from "./Jat.module.scss";
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
  "15+ years / printing excellence",
  "300+ brands / served worldwide",
  "50K+ / projects delivered",
  "Web, SaaS & mobile / development",
  "Creative design / branding & packaging",
  "Performance marketing / growth campaigns",
  "Large format / signage & displays",
  "Offset & digital / high-quality printing",
  "UI/UX design / conversion-focused",
  "Custom websites / scalable platforms",
  "Startup solutions / MVP to scale",
  "Production & logistics / end-to-end",
];

const instagramPosts = [
  `url("https://instagram.frba1-1.fna.fbcdn.net/v/t51.82787-15/632125485_18525759214068637_2214413659711101241_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzgzMTc0MDcxMjg5NTY4ODc2NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=CgxPKEoJgN8Q7kNvwHCXEnB&_nc_oc=AdlxL2ACxPMli846EpZFSzJRpr1IvSnx-aRx-w4zULff0T34uxeVqmqwxvQj1T6KOCw&_nc_ad=z-m&_nc_cid=1404&_nc_zt=23&_nc_ht=instagram.frba1-1.fna&_nc_gid=F_1H6Vo1BmaTICXCzaMTXQ&oh=00_AfssHFl18o4UaYK8nDI8IeLNRTlbkfXuoaIx3yyTMQtrnw&oe=69952CA1")`,
  `url("https://instagram.frba1-1.fna.fbcdn.net/v/t51.82787-15/632125485_18525759214068637_2214413659711101241_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzgzMTc0MDcxMjg5NTY4ODc2NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=CgxPKEoJgN8Q7kNvwHCXEnB&_nc_oc=AdlxL2ACxPMli846EpZFSzJRpr1IvSnx-aRx-w4zULff0T34uxeVqmqwxvQj1T6KOCw&_nc_ad=z-m&_nc_cid=1404&_nc_zt=23&_nc_ht=instagram.frba1-1.fna&_nc_gid=F_1H6Vo1BmaTICXCzaMTXQ&oh=00_AfssHFl18o4UaYK8nDI8IeLNRTlbkfXuoaIx3yyTMQtrnw&oe=69952CA1")`,
  `url("https://instagram.frba1-1.fna.fbcdn.net/v/t51.82787-15/632125485_18525759214068637_2214413659711101241_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzgzMTc0MDcxMjg5NTY4ODc2NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=CgxPKEoJgN8Q7kNvwHCXEnB&_nc_oc=AdlxL2ACxPMli846EpZFSzJRpr1IvSnx-aRx-w4zULff0T34uxeVqmqwxvQj1T6KOCw&_nc_ad=z-m&_nc_cid=1404&_nc_zt=23&_nc_ht=instagram.frba1-1.fna&_nc_gid=F_1H6Vo1BmaTICXCzaMTXQ&oh=00_AfssHFl18o4UaYK8nDI8IeLNRTlbkfXuoaIx3yyTMQtrnw&oe=69952CA1")`,
];

export default function Jat() {
  const products = [
    {
      name: "Branding & Identity",
      description: "Logos, brand systems, packaging and visual storytelling",
      image:
        "https://framerusercontent.com/images/KnlOHRMUaFoTuK0TzXQl9ezLn8.png?scale-down-to=1024",
    },
    {
      name: "Commercial Printing",
      description: "Brochures, business cards, catalogs, magazines and books",
      image:
        "https://framerusercontent.com/images/KnlOHRMUaFoTuK0TzXQl9ezLn8.png?scale-down-to=1024",
    },
    {
      name: "Large Format & Signage",
      description: "Billboards, roll-ups, banners, POS and event displays",
      image:
        "https://framerusercontent.com/images/KnlOHRMUaFoTuK0TzXQl9ezLn8.png?scale-down-to=1024",
    },
    {
      name: "Websites & Platforms",
      description: "High-performance websites, dashboards and portals",
      image:
        "https://framerusercontent.com/images/KnlOHRMUaFoTuK0TzXQl9ezLn8.png?scale-down-to=1024",
    },
    {
      name: "SaaS & Mobile Apps",
      description: "Scalable SaaS platforms and iOS / Android applications",
      image:
        "https://framerusercontent.com/images/KnlOHRMUaFoTuK0TzXQl9ezLn8.png?scale-down-to=1024",
    },
    {
      name: "Digital Marketing",
      description: "SEO, paid ads, social media and growth strategies",
      image:
        "https://framerusercontent.com/images/KnlOHRMUaFoTuK0TzXQl9ezLn8.png?scale-down-to=1024",
    },
  ];

  const jobsOpened = [
    {
      tags: ["Graphic Design", "Full-time"],
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
            <motion.h1 variants={fadeUp}>
              Printing, branding & digital solutions that grow your business
            </motion.h1>
            <motion.p variants={fadeUp}>
              We design, print and build high-impact experiences — from premium
              print production and visual branding to websites, SaaS platforms
              and mobile applications that convert and scale.
            </motion.p>

            <motion.div className={styles.hero_buttons} variants={fadeUp}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${styles.hero_button} ${styles.hero_button_secondary}`}
              >
                Request a quote
                <i className="fi fi-rs-arrow-small-right"></i>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.hero_button}
              >
                View our work
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.hero_right}
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            <Logo3D />

            <motion.div className={styles.hero_cards} variants={stagger}>
              <motion.div className={styles.hero_card} variants={fadeUp}>
                <h1>50K+</h1>
                <hr />
                <p>
                  printed projects delivered with consistent quality and fast
                  turnaround
                </p>
              </motion.div>
              <motion.div className={styles.hero_card} variants={fadeUp}>
                <h1>300+</h1>
                <hr />
                <p>
                  brands supported through design, marketing and digital growth
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
            <span>At RGI Studio</span>, we combine high-end printing, creative
            branding and digital innovation to help companies stand out,
            communicate better and grow faster — online and offline.
          </motion.p>
          <motion.p variants={fadeUp}>
            From business cards to billboards, from landing pages to SaaS
            platforms, we deliver scalable solutions designed for performance,
            durability and long-term brand impact.
          </motion.p>
        </div>
      </motion.section>

      {/* PRODUCTS / SERVICES */}
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
                  A full-service production and digital agency covering print,
                  design, marketing, web platforms and mobile applications — all
                  under one roof.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div className={styles.products_content} variants={stagger}>
            {products.map((product, index) => (
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
                      backgroundColor: "red",
                    }}
                  />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
                <div className={styles.product_image}>
                  <img
                    src="https://framerusercontent.com/images/8XqwUzzsLJM74vFK57g4JBMUzk.png"
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
          >
            Explore all services
            <i className="fi fi-rs-arrow-small-right"></i>
          </motion.button>
        </div>
      </motion.section>

      {/* PROCESS (NEW SECTION — MATCHES YOUR DESIGN SYSTEM) */}
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
              Our process<span>.</span>
            </h1>
            <p>
              From idea to delivery, we manage every step — strategy, design,
              production, development and deployment — with precision and
              consistency.
            </p>
          </motion.div>

          <motion.div className={styles.keyNumbers_content_wrapper}>
            <motion.div className={styles.keyNumbers_content}>
              <motion.div className={styles.keyNumbers_content_left}>
                <h1>01</h1>
                <p>
                  <b>Strategy & consulting</b> — understanding your business,
                  market and objectives before execution
                </p>
                <GlowShape />
              </motion.div>

              <motion.div className={styles.keyNumbers_content_right}>
                <h1>02</h1>
                <p>
                  <b>Design & creative</b> — branding, visuals, UX/UI and
                  content crafted for impact and conversion
                </p>
              </motion.div>
            </motion.div>

            <motion.div className={styles.keyNumbers_content_bottom}>
              <motion.div className={styles.keyNumbers_content_bottom_text}>
                <h1>03</h1>
                <p>
                  <b>Production & development</b> — premium printing, web
                  platforms, SaaS tools and mobile applications
                </p>
              </motion.div>

              <MotionVideo />
            </motion.div>

            <motion.div className={styles.keyNumbers_content}>
              <motion.div className={styles.keyNumbers_content_right}>
                <h1>04</h1>
                <p>
                  <b>Growth & optimization</b> — marketing, analytics and
                  continuous performance improvement
                </p>
              </motion.div>

              <motion.div className={styles.keyNumbers_content_left_bottom}>
                <h1>05</h1>
                <p>
                  <b>Launch & distribution</b> — logistics, deployment and
                  go-live across physical and digital channels
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
              Our team<span>.</span>
            </h1>
            <p>
              Designers, printers, developers and marketers working together to
              deliver high-quality execution across physical and digital
              experiences.
            </p>
          </motion.div>

          <motion.div
            className={styles.ourTeam_content_wrapper}
            variants={stagger}
          >
            <motion.div className={styles.ourTeam_content} variants={fadeUp}>
              <motion.img
                src="https://framerusercontent.com/images/buZgrBSPTLLdUd6qW7p83vduUA.jpg?scale-down-to=2048&width=5328&height=4000"
                className={styles.ourTeam_image_large}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 180 }}
              />
              <motion.img
                src="https://framerusercontent.com/images/x19uVpPtOO9Btagp9VmrahtUQ.jpg?scale-down-to=512&width=5328&height=4000"
                className={styles.ourTeam_image_small}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 180 }}
              />
            </motion.div>
            <motion.img
              src="https://framerusercontent.com/images/buZgrBSPTLLdUd6qW7p83vduUA.jpg?scale-down-to=2048&width=5328&height=4000"
              className={styles.ourTeam_image_big}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 180 }}
            />
            <motion.div className={styles.ourTeam_content} variants={fadeUp}>
              <motion.img
                src="https://framerusercontent.com/images/x19uVpPtOO9Btagp9VmrahtUQ.jpg?scale-down-to=512&width=5328&height=4000"
                className={styles.ourTeam_image_small}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 180 }}
              />
              <motion.img
                src="https://framerusercontent.com/images/buZgrBSPTLLdUd6qW7p83vduUA.jpg?scale-down-to=2048&width=5328&height=4000"
                className={styles.ourTeam_image_large}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 180 }}
              />
            </motion.div>

            <div className={styles.ourTeam_buttons}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${styles.ourTeam_button} ${styles.ourTeam_button_secondary}`}
              >
                Join our team
                <i className="fi fi-rs-arrow-small-right"></i>
              </motion.button>
            </div>
          </motion.div>
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
              We’re growing<span>.</span>
            </h1>
            <p>
              We’re always looking for talented designers, printers, developers
              and marketers who want to work on high-impact projects across
              print and digital industries.
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

      {/* INSTAGRAM */}
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
              Latest on Instagram<span>.</span>
            </h1>
            <p>
              A look at our most recent print productions, branding systems,
              campaigns and digital launches — crafted for performance and
              impact.
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
    </>
  );
}

/* ---------------- LOGO 3D ---------------- */

function Logo3D() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [18, -18]);
  const rotateY = useTransform(x, [-50, 50], [-18, 18]);

  function handleMouse(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.height / 2);
  }

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        width: 220,
        height: 220,
        perspective: 900,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.img
        src="https://upload.wikimedia.org/wikipedia/commons/0/02/Google_One_logo.png"
        alt="Logo"
        style={{
          width: 160,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.25))",
        }}
        transition={{ type: "spring", stiffness: 140, damping: 14 }}
      />
    </motion.div>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 400"
          width="400"
          height="400"
          preserveAspectRatio="xMidYMid slice"
          style={{
            width: "100%",
            height: "100%",
            transform: "translate3d(0px, 0px, 0px);",
          }}
        >
          <defs>
            <clipPath id="__lottie_element_2">
              <rect width="400" height="400" x="0" y="0"></rect>
            </clipPath>
            <linearGradient
              id="__lottie_element_7"
              spreadMethod="pad"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="-187.5"
              x2="0"
              y2="187.5"
            >
              <stop
                offset="0%"
                stop-color="rgb(173,173,173)"
                stop-opacity="1"
              ></stop>
              <stop
                offset="50%"
                stop-color="rgb(214,214,214)"
                stop-opacity="0.5"
              ></stop>
              <stop
                offset="100%"
                stop-color="rgb(255,255,255)"
                stop-opacity="0"
              ></stop>
            </linearGradient>
            <radialGradient
              id="__lottie_element_10"
              spreadMethod="pad"
              gradientUnits="userSpaceOnUse"
              cx="0"
              cy="0"
              r="193"
              fx="0"
              fy="0"
            >
              <stop
                offset="0%"
                stop-color="rgb(255,255,255)"
                stop-opacity="1"
              ></stop>
              <stop
                offset="50%"
                stop-color="rgb(255,254,254)"
                stop-opacity="0.5"
              ></stop>
              <stop
                offset="100%"
                stop-color="rgb(255,254,254)"
                stop-opacity="0"
              ></stop>
            </radialGradient>
          </defs>
          <g clip-path="url(#__lottie_element_2)">
            <g
              transform="matrix(-0.3318588137626648,0.9433290958404541,-0.9433290958404541,-0.3318588137626648,200,200)"
              opacity="0.16"
              style={{ display: "block" }}
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="url(#__lottie_element_7)"
                  fill-opacity="1"
                  d=" M52.12799835205078,-50.641998291015625 C10.64900016784668,-90.93900299072266 0,-187.5 0,-187.5 C0,-187.5 -10.64900016784668,-90.93900299072266 -52.12799835205078,-50.641998291015625 C-93.60700225830078,-10.345000267028809 -193,0 -193,0 C-193,0 -93.60700225830078,10.345000267028809 -52.12799835205078,50.641998291015625 C-10.64900016784668,90.93900299072266 0,187.5 0,187.5 C0,187.5 10.64900016784668,90.93900299072266 52.12799835205078,50.641998291015625 C93.60700225830078,10.345000267028809 193,0 193,0 C193,0 93.60700225830078,-10.345000267028809 52.12799835205078,-50.641998291015625z"
                ></path>
              </g>
            </g>
            <g
              transform="matrix(-0.3318588137626648,0.9433290958404541,-0.9433290958404541,-0.3318588137626648,200,200)"
              opacity="0.16"
              style={{ display: "block" }}
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="url(#__lottie_element_10)"
                  fill-opacity="1"
                  d=" M-176.66299438476562,-1.2589999437332153 C-179.86900329589844,-0.7450000047683716 -182.68800354003906,-0.328000009059906 -185.03799438476562,0 C-182.68800354003906,0.328000009059906 -179.86900329589844,0.7450000047683716 -176.66299438476562,1.2589999437332153 C-166.67599487304688,2.861999988555908 -152.9250030517578,5.419000148773193 -137.8719940185547,9.239999771118164 C-107.8219985961914,16.868000030517578 -72.3740005493164,29.577999114990234 -51.430999755859375,49.92499923706055 C-30.482999801635742,70.2760009765625 -17.39699935913086,104.7229995727539 -9.543999671936035,133.92300415039062 C-5.610000133514404,148.5489959716797 -2.9760000705718994,161.91000366210938 -1.3259999752044678,171.61500549316406 C-0.7799999713897705,174.82400512695312 -0.34200000762939453,177.63299560546875 0,179.95700073242188 C0.34200000762939453,177.63299560546875 0.7799999713897705,174.82400512695312 1.3259999752044678,171.61500549316406 C2.9760000705718994,161.91000366210938 5.610000133514404,148.5489959716797 9.543999671936035,133.92300415039062 C17.39699935913086,104.7229995727539 30.482999801635742,70.2760009765625 51.430999755859375,49.92499923706055 C72.3740005493164,29.577999114990234 107.8219985961914,16.868000030517578 137.8719940185547,9.239999771118164 C152.9250030517578,5.419000148773193 166.67599487304688,2.861999988555908 176.66299438476562,1.2589999437332153 C179.86900329589844,0.7450000047683716 182.68800354003906,0.328000009059906 185.03799438476562,0 C182.68800354003906,-0.328000009059906 179.86900329589844,-0.7450000047683716 176.66299438476562,-1.2589999437332153 C166.67599487304688,-2.861999988555908 152.9250030517578,-5.419000148773193 137.8719940185547,-9.239999771118164 C107.8219985961914,-16.868000030517578 72.3740005493164,-29.577999114990234 51.430999755859375,-49.92499923706055 C30.482999801635742,-70.2760009765625 17.39699935913086,-104.7229995727539 9.543999671936035,-133.92300415039062 C5.610000133514404,-148.5489959716797 2.9760000705718994,-161.91000366210938 1.3259999752044678,-171.61500549316406 C0.7799999713897705,-174.82400512695312 0.34200000762939453,-177.63299560546875 0,-179.95700073242188 C-0.34200000762939453,-177.63299560546875 -0.7799999713897705,-174.82400512695312 -1.3259999752044678,-171.61500549316406 C-2.9760000705718994,-161.91000366210938 -5.610000133514404,-148.5489959716797 -9.543999671936035,-133.92300415039062 C-17.39699935913086,-104.7229995727539 -30.482999801635742,-70.2760009765625 -51.430999755859375,-49.92499923706055 C-72.3740005493164,-29.577999114990234 -107.8219985961914,-16.868000030517578 -137.8719940185547,-9.239999771118164 C-152.9250030517578,-5.419000148773193 -166.67599487304688,-2.861999988555908 -176.66299438476562,-1.2589999437332153z M0,-187.5 C0,-187.5 -0.15700000524520874,-186.08299255371094 -0.5049999952316284,-183.52099609375 C-3.0329999923706055,-164.93299865722656 -15.673999786376953,-86.05799865722656 -52.12799835205078,-50.641998291015625 C-88.51399993896484,-15.293000221252441 -169.46600341796875,-2.992000102996826 -188.79600524902344,-0.5040000081062317 C-191.50100708007812,-0.15600000321865082 -193,0 -193,0 C-193,0 -191.50100708007812,0.15600000321865082 -188.79600524902344,0.5040000081062317 C-169.46600341796875,2.992000102996826 -88.51399993896484,15.293000221252441 -52.12799835205078,50.641998291015625 C-15.673999786376953,86.05799865722656 -3.0329999923706055,164.93299865722656 -0.5049999952316284,183.52099609375 C-0.15700000524520874,186.08299255371094 0,187.5 0,187.5 C0,187.5 0.15700000524520874,186.08299255371094 0.5049999952316284,183.52099609375 C3.0320000648498535,164.93299865722656 15.673999786376953,86.05799865722656 52.12799835205078,50.641998291015625 C88.51399993896484,15.293000221252441 169.46600341796875,2.992000102996826 188.79600524902344,0.5040000081062317 C191.50100708007812,0.15600000321865082 193,0 193,0 C193,0 191.50100708007812,-0.15600000321865082 188.79600524902344,-0.5040000081062317 C169.46600341796875,-2.992000102996826 88.51399993896484,-15.293000221252441 52.12799835205078,-50.641998291015625 C15.673999786376953,-86.05799865722656 3.0320000648498535,-164.93299865722656 0.5049999952316284,-183.52099609375 C0.15700000524520874,-186.08299255371094 0,-187.5 0,-187.5z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};
