import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./InvoiceLogin.module.scss";
import { INVOICE_AUTH } from "../../config/invoiceAuth.config";

const AUTH_KEY = "rgi_invoice_auth";

export const isInvoiceAuthenticated = () => {
  return sessionStorage.getItem(AUTH_KEY) === "1";
};

export const setInvoiceAuthenticated = () => {
  sessionStorage.setItem(AUTH_KEY, "1");
};

export const clearInvoiceAuth = () => {
  sessionStorage.removeItem(AUTH_KEY);
};

export default function InvoiceLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const expectedUser = INVOICE_AUTH.user;
    const expectedPass = INVOICE_AUTH.pass;

    if (username === expectedUser && password === expectedPass) {
      setInvoiceAuthenticated();
      navigate(location.state?.from?.pathname || "/invoices", {
        replace: true,
      });
    } else {
      setError("Identifiants incorrects.");
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.login_card}>
        <h1>Factures</h1>
        <p>Connectez-vous pour accéder au tableau de bord.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
}
