import { Link } from "react-router";
import styles from "./NavBar.module.css";

export default function NavBar({ cart }) {
  return (
    <div className={styles["nav-bar"]}>
      <div className={styles["nav-logo"]}>
        <h1>Placeholder</h1>
      </div>
      <div className={styles["nav-links"]}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
        <p>Items in cart: {cart.length}</p>
      </div>
    </div>
  );
}
