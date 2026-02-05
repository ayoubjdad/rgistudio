import styles from "./Jat.module.scss";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Jat() {
  const menu = [
    { name: "Home", href: "#" },
    { name: "Company", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Products", href: "#" },
    { name: "Blog", href: "#" },
  ];

  const products = [
    {
      name: "Cleaner",
      description: "Education, Lifestyle and Cybersecurity",
      image:
        "https://framerusercontent.com/images/KnlOHRMUaFoTuK0TzXQl9ezLn8.png?scale-down-to=1024",
    },
    {
      name: "Cleaner",
      description: "Education",
      image:
        "https://framerusercontent.com/images/KnlOHRMUaFoTuK0TzXQl9ezLn8.png?scale-down-to=1024",
    },
    {
      name: "Cleaner",
      description: "Education",
      image:
        "https://framerusercontent.com/images/KnlOHRMUaFoTuK0TzXQl9ezLn8.png?scale-down-to=1024",
    },
    {
      name: "Cleaner",
      description: "Education, Lifestyle and Cybersecurity",
      image:
        "https://framerusercontent.com/images/KnlOHRMUaFoTuK0TzXQl9ezLn8.png?scale-down-to=1024",
    },
    {
      name: "Cleaner",
      description: "Education",
      image:
        "https://framerusercontent.com/images/KnlOHRMUaFoTuK0TzXQl9ezLn8.png?scale-down-to=1024",
    },
    {
      name: "Cleaner",
      description: "Education",
      image:
        "https://framerusercontent.com/images/KnlOHRMUaFoTuK0TzXQl9ezLn8.png?scale-down-to=1024",
    },
  ];
  return (
    <>
      <nav className={styles.main}>
        <div className={styles.container}>
          <h3>JATAPP</h3>
          <ul>
            {menu.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
          <div className={styles.buttons}>
            <button className={styles.button}>EN</button>
            <button className={styles.button}>Get In Touch</button>
          </div>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.hero_container}>
          <div className={styles.hero_left}>
            <h1>Create and develop digital products</h1>
            <p>
              Our passionate team of data-driven professionals embraces
              innovation, startup principles, and a product-focused approach to
              achieve impactful results.
            </p>
            <div className={styles.hero_buttons}>
              <button
                className={
                  styles.hero_button + " " + styles.hero_button_secondary
                }
              >
                Join our team
                <i class="fi fi-rs-arrow-small-right"></i>
              </button>
              <button className={styles.hero_button}>View our products</button>
            </div>
          </div>
          <div className={styles.hero_right}>
            <Logo3D />
            <div className={styles.hero_cards}>
              <div className={styles.hero_card}>
                <h1>20+</h1>
                <hr />
                <p>
                  products with an average rating of 4.7 on the App Store and
                  Google Play
                </p>
              </div>
              <div className={styles.hero_card}>
                <h1>200+</h1>
                <hr />
                <p>
                  talented professionals, united by ambition to change the app
                  industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.presentation}>
        <div className={styles.presentation_container}>
          <p>
            <span>At JATAPP</span>, we develop high-tech applications that
            transform how people live, work, and grow. Our portfolio features
            20+ amazing products that are loved and used by people all around
            the world.
          </p>
          <p>
            We value innovation, collaboration, and continuous improvement. By
            using a data-driven approach, we address real customer problems
            through our apps.
          </p>
        </div>
      </section>

      <section className={styles.products}>
        <div className={styles.products_container}>
          <div className={styles.products_header}>
            <div className={styles.products_left}>
              <h1>20+</h1>
            </div>
            <div className={styles.products_right}>
              <div className={styles.products_smallTitle}>
                <h3 className={styles.products_title}>products.</h3>
                <p>
                  We focus exclusively on white niches, with 20+ products in
                  business, utilities, lifestyle, cybersecurity, and education
                  that we’re proud to showcase.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.products_content}>
            {products.map((product, index) => (
              <div key={index} className={styles.product}>
                <div className={styles.product_info}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      "border-radius": "6px",
                      "background-color": "red",
                    }}
                  />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
                <div className={styles.product_image}>
                  <img
                    decoding="auto"
                    src="https://framerusercontent.com/images/8XqwUzzsLJM74vFK57g4JBMUzk.png"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            className={styles.hero_button + " " + styles.hero_button_secondary}
          >
            View all products
            <i class="fi fi-rs-arrow-small-right"></i>
          </button>
        </div>
      </section>

      <section className={styles.keyNumbers}>
        <div className={styles.keyNumbers_container}>
          <div className={styles.keyNumbers_title}>
            <h1>
              Key Numbers<span>.</span>
            </h1>
            <p>
              At JATAPP, we’re all about building great apps. Here’s a glimpse
              of our journey and what we’ve accomplished so far:
            </p>
          </div>

          <div className={styles.keyNumbers_content_wrapper}>
            <div className={styles.keyNumbers_content}>
              <div className={styles.keyNumbers_content_left}>
                <h1>20+</h1>
                <p>
                  <b>products</b>, with an average rating of <b>4.7</b> on the{" "}
                  <b>App Store</b> and
                  <b>Google Play</b>
                </p>
              </div>
              <div className={styles.keyNumbers_content_right}>
                <h1>200+</h1>
                <p>
                  <b>talented professionals</b>, united by common values and an
                  ambition to change the app industry
                </p>
              </div>
            </div>

            <div className={styles.keyNumbers_content_bottom}>
              <h1>5 key units</h1>
              <p>
                each playing a crucial role in transforming the niche and the
                industry
              </p>
            </div>

            <div className={styles.keyNumbers_content}>
              <div className={styles.keyNumbers_content_left}>
                <h1>250+ million</h1>
                <p>
                  <b>users worldwide</b>, including in the USA, Europe, and Asia
                </p>
              </div>
              <div className={styles.keyNumbers_content_right}>
                <h1>10 years</h1>
                <p>
                  <b>in app development</b>, establishing us as an experienced
                  and trusted global market leader
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ourTeam}>
        <div className={styles.ourTeam_container}>
          <div className={styles.ourTeam_title}>
            <h1>
              Our team<span>.</span>
            </h1>
            <p>
              Our passionate team of data-driven professionals embraces
              innovation, startup principles, and a product-focused approach to
              achieve impactful results.
            </p>
          </div>

          <div className={styles.ourTeam_content_wrapper}>
            <div className={styles.ourTeam_content}>
              <div className={styles.ourTeam_content_left}>
                <h1>20+</h1>
                <p>
                  <b>products</b>, with an average rating of <b>4.7</b> on the{" "}
                  <b>App Store</b> and
                  <b>Google Play</b>
                </p>
              </div>
              <div className={styles.ourTeam_content_right}>
                <h1>200+</h1>
                <p>
                  <b>talented professionals</b>, united by common values and an
                  ambition to change the app industry
                </p>
              </div>
            </div>

            <div className={styles.ourTeam_content_bottom}>
              <h1>5 key units</h1>
              <p>
                each playing a crucial role in transforming the niche and the
                industry
              </p>
            </div>

            <div className={styles.ourTeam_content}>
              <div className={styles.ourTeam_content_left}>
                <h1>250+ million</h1>
                <p>
                  <b>users worldwide</b>, including in the USA, Europe, and Asia
                </p>
              </div>
              <div className={styles.ourTeam_content_right}>
                <h1>10 years</h1>
                <p>
                  <b>in app development</b>, establishing us as an experienced
                  and trusted global market leader
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.footer_left}>
            <h1>Be part of the journey-stay tuned</h1>
          </div>
          <div className={styles.footer_right}>
            <p>Follow us</p>
          </div>
        </div>
      </section>
    </>
  );
}

function Logo3D() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  function handleMouse(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{
        width: 200,
        height: 200,
        perspective: 800,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.img
        src="https://upload.wikimedia.org/wikipedia/commons/0/02/Google_One_logo.png"
        alt="Logo"
        style={{
          // width: 140,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
      />
    </motion.div>
  );
}
