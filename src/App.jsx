import "./App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, qtyAdd) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qtyAdd } : item,
        );
      }
      return [...prevCart, { ...product, qty: qtyAdd }];
    });
  };

  const modifyCartQty = (product, qtyChange) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + qtyChange } : item,
      );
    });
  };
  return (
    <>
      <NavBar />
      <main>
        <Outlet context={{ cart, addToCart, modifyCartQty }} />
      </main>
    </>
  );
}

export default App;
