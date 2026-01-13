function ItemCard({ itemInfo }) {
  return (
    <div className="item-card">
      <div className="img-card-container">
        <img src={itemInfo.image} />
      </div>
      <h1>{itemInfo.title}</h1>
      <p>${itemInfo.price}</p>
    </div>
  );
}

export default ItemCard;
