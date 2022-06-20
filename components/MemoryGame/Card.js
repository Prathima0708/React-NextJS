import React from "react";
import styles from "./Game.module.css";

const Card = ({ item, handleClick, id }) => {
  const itemClass = item.stat ? styles.active : "";
  return (
    <div
      className={`${styles.card} ${itemClass}`}
      onClick={() => handleClick(id)}
    >
      <img src={item.img} />
    </div>
  );
};

export default Card;
