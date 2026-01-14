import { useOutletContext } from "react-router";
import CartItem from "./CartItem";

export default function Cart() {
  const { cart, modifyCartQty, deleteCartItem } = useOutletContext();

  function getTotal() {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.price * item.qty;
    });
    return sum.toFixed(2);
  }
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
      <div className="cart-footer">
        <div className="order-summary">
          <h1>Order Summary</h1>
          <p>Total: ${getTotal()}</p>
        </div>
      </div>
    </div>
  );
}
