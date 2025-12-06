import { useState, useEffect } from "react";
import Card from "../../components/card/Card";
import styles from "./Cards.module.scss";
import Tag from "../../components/tag/Tag";

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

const tags = [
  { text: "//FACTS THAT SPEAK", top: "16%", left: "36%" },
  { text: "//CASES THAT WORK", top: "42%", left: "65%" },
];

export default function Cards() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className={styles.main}>
      {tags.map((tag, index) => (
        <Tag
          key={index}
          text={tag.text}
          positions={{ top: tag.top, left: tag.left }}
          offset={mouse}
        />
      ))}
      {cardsList.slice(0, 3).map((card, index) => (
        <Card
          key={index}
          index={index}
          title={card.title}
          description={card.description}
          shortcut={card.shortcut}
          offset={mouse}
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
          offset={mouse}
        />
      ))}
    </div>
  );
}
