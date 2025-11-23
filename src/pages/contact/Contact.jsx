import { Box } from "@mui/material";
import styles from "./Contact.module.scss";
import Textfield from "../../components/textfield/Textfield";
import Button from "../../components/button/Button";

export default function Contact() {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h1>
          Love to hear from you,
          <br /> Get it touch 👋
        </h1>
        <h3>Assistance RGI Studio</h3>
        <p>Si vous avez des questions relatives à RGI Studio, contactez-nous</p>
        <Box
          component="form"
          className={styles.form}
          noValidate
          autoComplete="off"
        >
          <div
            style={{
              gap: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className={styles.inputGroup}>
              <h4>Nom complet</h4>
              <Textfield id="name" name="name" placeholder="Nom" required />
            </div>
            <div className={styles.inputGroup}>
              <h4>Email</h4>
              <Textfield
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
              />
            </div>
            <div className={styles.inputGroup}>
              <h4>Téléphone</h4>
              <Textfield
                id="phone"
                name="phone"
                fullWidth
                placeholder="Numéro de téléphone"
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <h4>Message</h4>
            <Textfield
              id="message"
              rows={5}
              name="message"
              required
              multiline
              placeholder="Message"
            />
          </div>

          <div
            className={styles.inputGroup}
            style={{ justifyContent: "flex-end" }}
          >
            <Button type="submit" text="Envoyer" />
          </div>
        </Box>

        <h3>Adresse du siège social 🚩</h3>
        <p>1 Meta Way, Menlo Park, California 94025, États-Unis</p>
        <p>
          WhatsApp LLC est une société à responsabilité limitée enregistrée au
          Delaware sous le numéro 5482270
        </p>
      </div>
    </section>
  );
}
