import { TextField, Button, Box } from "@mui/material";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h1>Contactez-nous</h1>
        <h3>Assistance WhatsApp</h3>
        <p>Si vous avez des questions relatives à WhatsApp, contactez-nous</p>
        <Box
          component="form"
          className={styles.form}
          noValidate
          autoComplete="off"
        >
          <div>
            <h2>Votre nom</h2>
            <TextField
              id="name"
              name="name"
              label="Nom"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
          </div>
          <div>
            <h2>Votre adresse email</h2>
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
          </div>
          <div>
            <h2>Votre numéro de téléphone</h2>
            <TextField
              id="phone"
              name="phone"
              label="Numéro de téléphone"
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </div>
          <div>
            <h2>Votre message</h2>
            <TextField
              id="message"
              name="message"
              label="Message"
              multiline
              rows={5}
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            fullWidth
          >
            Envoyer
          </Button>
        </Box>
      </div>
    </section>
  );
}
