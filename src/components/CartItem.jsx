import styles from "./CartItem.module.css";

export default function CartItem({ itemInfo, onModify }) {
  const incrementQty = () => {
    onModify(itemInfo, 1);
  };

  const decrementQty = () => {
    onModify(itemInfo, -1);
  };
  return (
    <div className={styles["cart-item"]}>
      <div className={styles["item-info"]}>
        <h3>{itemInfo.title}</h3>
        <p>${itemInfo.price}</p>
      </div>
      <div className={styles["item-btns"]}>
        <button onClick={incrementQty}>+</button>
        <input
          type="text"
          inputmode="numeric"
          pattern="[0-9]*"
          value={itemInfo.qty}
          readOnly={true}
        ></input>
        <button onClick={decrementQty}>-</button>
      </div>
    </div>
  );
}
