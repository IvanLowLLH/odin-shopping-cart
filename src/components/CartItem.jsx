import styles from "./CartItem.module.css";

export default function CartItem({ itemInfo }) {
  return (
    <div className={styles["cart-item"]}>
      <div className={styles["item-info"]}>
        <h3>{itemInfo.title}</h3>
        <p>${itemInfo.price}</p>
      </div>
      <div className={styles["item-btns"]}>
        <button>+</button>
        <input
          type="text"
          inputmode="numeric"
          pattern="[0-9]*"
          value={itemInfo.qty}
        ></input>
        <button>-</button>
      </div>
    </div>
  );
}
