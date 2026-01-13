import styles from "./ItemCard.module.css";

function ItemCard({ itemInfo }) {
  return (
    <div className={styles["item-card"]}>
      <div className={styles["img-card-container"]}>
        <img src={itemInfo.image} />
      </div>
      <div className={styles["item-info"]}>
        <h1 className={styles["item-title"]}>{itemInfo.title}</h1>
        <p className={styles["item-price"]}>${itemInfo.price}</p>
      </div>
    </div>
  );
}

export default ItemCard;
