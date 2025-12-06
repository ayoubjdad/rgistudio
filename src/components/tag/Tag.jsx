import styles from "./Tag.module.scss";

export default function Tag({ text, positions, offset }) {
  return (
    <div
      className={styles.card}
      style={{
        top: positions.top,
        left: positions.left,
        transform: `translate(-50%, -50%) translate(${offset.x}px, ${offset.y}px)`,
      }}
    >
      <p>{text}</p>
    </div>
  );
}
