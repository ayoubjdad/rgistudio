import Card from "../../components/card/Card";
import styles from "./Cards.module.scss";

const cardsList = [
  {
    title: "2000+",
    description: "// crafted smiles",
    shortcut: "cases",
  },
  {
    title: "500+",
    description: "// happy clients",
    shortcut: "button",
  },
  {
    title: "2000+",
    description: "// crafted smiles",
    shortcut: "cases",
  },
  {
    title: "6+",
    description: "// happy clients",
    shortcut: "button",
  },
  {
    title: "2000+",
    description: "// crafted smiles",
    shortcut: "cases",
  },
  {
    title: "500+",
    description: "// happy clients",
    shortcut: "button",
  },
];

export default function Cards() {
  return (
    <div className={styles.main}>
      {cardsList.slice(0, 3).map((card, index) => (
        <Card
          key={index}
          index={index}
          title={card.title}
          description={card.description}
          shortcut={card.shortcut}
        />
      ))}
      <div className={styles.textSection}>
        <div className={styles.textInner}>
          <h1>Trust</h1>
          <h1>measured</h1>
          <h1 className={styles.highlight}>
            <i class="fi fi-rs-arrow-small-right" />
            <i>in results</i>
          </h1>
        </div>
      </div>
      {cardsList.slice(3, 6).map((card, index) => (
        <Card
          key={index + 3}
          index={index + 3}
          title={card.title}
          description={card.description}
          shortcut={card.shortcut}
        />
      ))}
    </div>
  );
}
