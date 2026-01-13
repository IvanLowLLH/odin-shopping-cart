import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function ShopPage() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItemList(data));
  });

  return (
    <div className="item-grid">
      {itemList.map((itemInfo) => (
        <ItemCard itemInfo={itemInfo} />
      ))}
    </div>
  );
}

export default ShopPage;
