import styles from "./Button.module.scss";

export default function Button({
  text = "Button",
  icon,
  type = "button",
  onClick = () => {},
  isOutlined = false,
}) {
  return (
    <button
      type={type}
      className={`${styles.button} ${isOutlined ? styles.outlined : ""}`}
      onClick={onClick}
    >
      {text}
      {icon && <i className={icon} />}
    </button>
  );
}
