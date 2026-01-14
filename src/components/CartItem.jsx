import styles from "./CartItem.module.css";

export default function CartItem({ itemInfo, onModify, onDelete }) {
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
        <div className={styles["item-qty-btns"]}>
          <button onClick={incrementQty}>+</button>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={itemInfo.qty}
            readOnly={true}
          ></input>
          <button onClick={decrementQty}>-</button>
        </div>
        <button onClick={() => onDelete(itemInfo)}>Del</button>
      </div>
    </div>
  );
}
