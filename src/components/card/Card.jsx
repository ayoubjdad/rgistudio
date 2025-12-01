import styles from "./Card.module.scss";

const placements = [
  { top: "3%", left: "25%", transform: "translate(-50%, -50%)" }, // card 0
  { top: "-15%", left: "50%", transform: "translate(-50%, -50%)" }, // card 1
  { top: "0%", left: "80%", transform: "translate(-50%, -50%)" }, // card 2
  { top: "50%", left: "20%", transform: "translate(-50%, -50%)" }, // card 3
  { top: "65%", left: "50%", transform: "translate(-50%, -50%)" }, // card 4
  { top: "45%", left: "82%", transform: "translate(-50%, -50%)" }, // card 5
];

export default function Card({ index, title, description, shortcut }) {
  const pos = placements[index];

  return (
    <div
      className={styles.card}
      style={{
        top: pos.top,
        left: pos.left,
        transform: pos.transform,
        // backgroundColor: "green",
      }}
    >
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={styles.bottom}>
        <span>{shortcut}</span>
        <i className="fi fi-rs-arrow-small-right" />
      </div>
    </div>
  );
}
