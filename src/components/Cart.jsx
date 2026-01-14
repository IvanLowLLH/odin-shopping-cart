import { useOutletContext } from "react-router";
import CartItem from "./CartItem";

export default function Cart() {
  const { cart, modifyCartQty, deleteCartItem } = useOutletContext();
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length == 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              itemInfo={item}
              onModify={modifyCartQty}
              onDelete={deleteCartItem}
            />
          ))}
        </div>
      )}
    </div>
  );
}
