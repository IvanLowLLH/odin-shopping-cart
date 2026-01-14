import { useState } from "react";
import styles from "./ItemCard.module.css";

function ItemCard({ itemInfo, onAddToCart }) {
  const [itemCount, setItemCount] = useState(0);

  const incrementCount = () => {
    setItemCount(itemCount + 1);
  };
  const decrementCount = () => {
    if (itemCount === 0) {
      return;
    }
    setItemCount(itemCount - 1);
  };
  return (
    <div className={styles["item-card"]}>
      <div className={styles["img-card-container"]}>
        <img src={itemInfo.image} />
      </div>
      <div className={styles["item-info"]}>
        <h1 className={styles["item-title"]}>{itemInfo.title}</h1>
        <p className={styles["item-price"]}>${itemInfo.price}</p>
      </div>
      <div className={styles["item-qty-interface"]}>
        <button onClick={incrementCount}>+</button>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={itemCount}
          onChange={(e) => setItemCount(Number(e.target.value))}
        ></input>
        <button onClick={decrementCount}>-</button>
      </div>
      <button onClick={() => onAddToCart(itemInfo, itemCount)}>
        Add To Cart
      </button>
    </div>
  );
}

export default ItemCard;
