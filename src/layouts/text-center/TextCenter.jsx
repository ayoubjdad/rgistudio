import styles from "./TextCenter.module.scss";

export default function TextCenter({
  text = "Chez RGI Studio, nous transformons vos idées en projets concrets. Du print à la communication digitale, en passant par le développement web, nous créons des solutions sur mesure pour vous aider à vous démarquer et atteindre vos objectifs.",
}) {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <img
          src="https://scontent.whatsapp.net/v/t39.8562-34/472789625_593649246596394_5449176563091833632_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=e4jA4JgPqjkQ7kNvwG09tD8&_nc_oc=Adn6CQEwHtB-TGwuPFOH9UICYXjkoSFUPiFR53ypx9zMS1IRW6a8EQg4_bhrD2WXp_M&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=imovJ-ZDHtM-1sQ_vOGnwQ&oh=01_Q5Aa2gEUzdbqkK11R0IJhNXgshyZ4MvQ8bVZEN_cEk5kLLI9-w&oe=68E16DDE"
          alt="Communication digitale et développement web"
        />
        <p className={styles.text}>{text}</p>
        <img
          src="https://scontent.whatsapp.net/v/t39.8562-34/473083383_985260680138627_8314586055954509622_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=6OvtkptUcKQQ7kNvwG2mP7q&_nc_oc=AdleEM2aqbAseKwrr1YBJ3qVAzvtDlcsCE-CrqqTiK6rBa8eIgBrHQBrp7rxk0fMzSU&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=imovJ-ZDHtM-1sQ_vOGnwQ&oh=01_Q5Aa2gHV4RtsN0iQYugYOR6e6owkmGlLnJPuq5VLc00ldhQ4VQ&oe=68E19FCE"
          alt="Solutions créatives et digitales"
        />
      </div>
    </section>
  );
}
