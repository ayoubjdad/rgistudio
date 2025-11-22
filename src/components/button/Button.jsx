import { Box } from "@mui/material";
import styles from "./Button.module.scss";

export default function Button({
  text = "Button",
  icon,
  isLight = false,
  onClick = () => {},
  isOutlined = false,
}) {
  if (icon) {
    return (
      <Box
        component="i"
        className={`${icon} ${styles.iconButton} ${
          isLight ? styles.lightButton : ""
        }`}
        onClick={onClick}
      />
    );
  }

  return (
    <button
      className={`${styles.button} ${isLight ? styles.lightButton : ""} ${
        isOutlined ? styles.outlinedButton : ""
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
