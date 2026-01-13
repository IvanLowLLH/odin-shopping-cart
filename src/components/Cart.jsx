import { useOutletContext } from "react-router";

export default function Cart() {
  const { cart } = useOutletContext();
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length == 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <div className="cart-item">
              <p>{item.title}</p>
              <p>{item.qty}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
