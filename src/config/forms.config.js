/**
 * Configuration des formulaires (envoi d'e-mails)
 *
 * Pour activer l'envoi d'e-mails :
 * 1. Créez un compte sur https://formspree.io (gratuit)
 * 2. Créez un formulaire pour Contact et un pour GetAQuote
 * 3. Remplacez les IDs ci-dessous par vos vrais IDs Formspree
 *
 * Exemple d'ID : xyzabcde (visible dans l'URL après création du formulaire)
 */
export const FORMSPREE_IDS = {
  contact: process.env.REACT_APP_FORMSPREE_CONTACT || "YOUR_CONTACT_FORM_ID",
  quote: process.env.REACT_APP_FORMSPREE_QUOTE || "YOUR_QUOTE_FORM_ID",
};
