import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import styles from "./Shop.module.css";

function ShopPage() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItemList(data));
  }, []);

  return (
    <div className={styles["item-grid"]}>
      {itemList.map((itemInfo) => (
        <ItemCard key={itemInfo.id} itemInfo={itemInfo} />
      ))}
    </div>
  );
}

export default ShopPage;
